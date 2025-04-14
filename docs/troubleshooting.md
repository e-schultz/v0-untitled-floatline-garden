# Troubleshooting Guide

This document provides solutions for common issues you might encounter when working with the FLOAT portfolio website.

## Development Issues

### Installation Problems

#### Issue: Dependencies fail to install

**Symptoms:**
- `npm install` or `yarn install` fails with errors
- Missing peer dependencies warnings

**Solutions:**
1. Clear npm cache:
   \`\`\`bash
   npm cache clean --force
   \`\`\`

2. Delete node_modules and reinstall:
   \`\`\`bash
   rm -rf node_modules
   rm package-lock.json # or yarn.lock
   npm install # or yarn install
   \`\`\`

3. Check Node.js version compatibility:
   \`\`\`bash
   node -v
   \`\`\`
   Ensure you're using Node.js 18.0.0 or later.

#### Issue: TypeScript errors during installation

**Symptoms:**
- TypeScript type errors during installation
- Incompatible type definitions

**Solutions:**
1. Update TypeScript:
   \`\`\`bash
   npm install typescript@latest
   \`\`\`

2. Check for incompatible type definitions and update them:
   \`\`\`bash
   npm update @types/react @types/node
   \`\`\`

### Development Server Issues

#### Issue: Development server won't start

**Symptoms:**
- `npm run dev` fails to start the server
- Port conflicts

**Solutions:**
1. Check if another process is using port 3000:
   \`\`\`bash
   # On Linux/Mac
   lsof -i :3000
   
   # On Windows
   netstat -ano | findstr :3000
   \`\`\`
   
2. Kill the process using the port:
   \`\`\`bash
   # On Linux/Mac
   kill -9 <PID>
   
   # On Windows
   taskkill /PID <PID> /F
   \`\`\`

3. Use a different port:
   \`\`\`bash
   npm run dev -- -p 3001
   \`\`\`

#### Issue: Hot reloading not working

**Symptoms:**
- Changes to files don't reflect in the browser
- Need to manually restart the server

**Solutions:**
1. Check for file watching limits (Linux):
   \`\`\`bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
   \`\`\`

2. Restart the development server with the `--turbo` flag:
   \`\`\`bash
   npm run dev -- --turbo
   \`\`\`

3. Check for issues with your file system (WSL users):
   - Ensure you're working in the Linux file system, not the Windows-mounted drives

## Build and Deployment Issues

### Build Failures

#### Issue: Build fails with module not found errors

**Symptoms:**
- `npm run build` fails with "Cannot find module" errors
- Import errors during build

**Solutions:**
1. Check import paths:
   - Ensure all import paths are correct
   - Check for case sensitivity issues

2. Verify the module is installed:
   \`\`\`bash
   npm list <module-name>
   \`\`\`

3. Clear Next.js cache:
   \`\`\`bash
   rm -rf .next
   \`\`\`

#### Issue: Memory issues during build

**Symptoms:**
- Build process crashes with "JavaScript heap out of memory" error

**Solutions:**
1. Increase Node.js memory limit:
   \`\`\`bash
   # In package.json, modify the build script
   "scripts": {
     "build": "NODE_OPTIONS='--max_old_space_size=4096' next build"
   }
   \`\`\`

### Deployment Issues

#### Issue: Images not loading in production

**Symptoms:**
- Images show as broken in the deployed site
- Next.js Image optimization errors

**Solutions:**
1. Check image paths:
   - Ensure all image paths are correct
   - Use absolute URLs for external images

2. Configure Next.js Image component properly:
   \`\`\`tsx
   // In next.config.js
   module.exports = {
     images: {
       domains: ['your-image-domain.com'],
     },
   }
   \`\`\`

3. For static exports, use unoptimized images:
   \`\`\`tsx
   // In next.config.js
   module.exports = {
     images: {
       unoptimized: true,
     },
   }
   \`\`\`

#### Issue: Adding environment variables for future extensions

**When to use environment variables:**
- For API keys when integrating external services
- For configuration that differs between environments
- For sensitive information that shouldn't be in code

**Best practices:**
1. Store environment variables in a `.env.local` file (not committed to Git)
2. For client-side variables, prefix with `NEXT_PUBLIC_`
3. Access environment variables correctly:
   \`\`\`tsx
   // Server components
   const serverValue = process.env.SERVER_ONLY_VALUE
   
   // Client components
   const publicValue = process.env.NEXT_PUBLIC_CLIENT_VALUE
   \`\`\`

Note: The current implementation of this project doesn't require any environment variables.

## Styling and UI Issues

### Responsive Design Issues

#### Issue: Layout breaks on mobile devices

**Symptoms:**
- Elements overflow on small screens
- Incorrect spacing or alignment on mobile

**Solutions:**
1. Use responsive utility classes:
   \`\`\`tsx
   <div className="px-4 md:px-6 lg:px-8">
     Content
   </div>
   \`\`\`

2. Test with browser dev tools in responsive mode
3. Add specific fixes for problematic screen sizes:
   \`\`\`css
   @media (max-width: 640px) {
     .problematic-element {
       width: 100%;
       margin: 0;
     }
   }
   \`\`\`

### Font and Typography Issues

#### Issue: Custom fonts not loading

**Symptoms:**
- Fallback fonts are displayed instead of custom fonts
- Flash of unstyled text (FOUT)

**Solutions:**
1. Verify font imports in `app/layout.tsx`
2. Check network tab to ensure font files are loading
3. Add font-display swap for better loading experience:
   \`\`\`css
   @font-face {
     font-family: 'YourFont';
     src: url('/fonts/your-font.woff2');
     font-display: swap;
   }
   \`\`\`

## Functionality Issues

### Digital Garden Graph Issues

#### Issue: Graph visualization not rendering properly

**Symptoms:**
- Graph doesn't appear
- Nodes or links are missing
- Console errors related to D3.js

**Solutions:**
1. Check browser console for specific errors
2. Verify that the graph data structure is correct:
   \`\`\`tsx
   // Ensure nodes have unique IDs
   const nodes = [
     { id: "unique-id-1", title: "Node 1", group: 1 },
     { id: "unique-id-2", title: "Node 2", group: 1 },
   ];
   
   // Ensure links reference existing node IDs
   const links = [
     { source: "unique-id-1", target: "unique-id-2", value: 1 },
   ];
   \`\`\`

3. Add error boundaries around the graph component:
   \`\`\`tsx
   import { ErrorBoundary } from 'react-error-boundary';
   
   <ErrorBoundary fallback={<div>Error loading graph</div>}>
     <GraphVisualization data={graphData} />
   </ErrorBoundary>
   \`\`\`

### Terminal Search Issues

#### Issue: Keyboard shortcut for terminal search not working

**Symptoms:**
- Pressing `/` doesn't focus the search input
- Terminal search doesn't filter results correctly

**Solutions:**
1. Check event listener implementation:
   \`\`\`tsx
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       // Don't trigger if user is already in an input or textarea
       if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
         return;
       }
       
       if (e.key === "/") {
         e.preventDefault();
         handleTerminalFocus();
       }
     };
     
     window.addEventListener("keydown", handleKeyDown);
     return () => window.removeEventListener("keydown", handleKeyDown);
   }, []);
   \`\`\`

2. Verify that the input ref is correctly assigned:
   \`\`\`tsx
   const terminalInputRef = useRef<HTMLInputElement>(null);
   
   // Later in JSX
   <Input ref={terminalInputRef} ... />
   \`\`\`

## Performance Issues

### Slow Page Loading

#### Issue: Pages take too long to load

**Symptoms:**
- High loading times
- Poor Lighthouse performance scores

**Solutions:**
1. Implement image optimization:
   - Use proper image sizes
   - Use WebP format
   - Implement lazy loading

2. Minimize JavaScript:
   - Use Server Components where possible
   - Implement code splitting
   - Remove unused dependencies

3. Implement proper caching:
   \`\`\`tsx
   // In next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/static/:path*',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ];
     },
   };
   \`\`\`

4. Use Next.js built-in performance features:
   - Static Generation for pages that don't need server-side rendering
   - Incremental Static Regeneration for dynamic content that changes infrequently

## Getting Additional Help

If you're still experiencing issues after trying the solutions in this guide:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search for similar issues on [GitHub](https://github.com/vercel/next.js/issues)
3. Ask for help on [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
4. Join the [Next.js Discord community](https://nextjs.org/discord)
