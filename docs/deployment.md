# Deployment Guide

This document provides instructions for deploying the FLOAT portfolio website to various hosting platforms.

## Deployment Options

The FLOAT portfolio website can be deployed to several platforms:

1. **Vercel** (Recommended)
2. **Netlify**
3. **GitHub Pages**
4. **Custom Server**

## Deploying to Vercel

Vercel is the recommended platform for deploying Next.js applications.

### Prerequisites

- A [Vercel](https://vercel.com) account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Connect your repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select the repository containing your FLOAT portfolio

2. **Configure project**:
   - Project Name: Enter a name for your deployment
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: Leave as `.` if your project is in the root
   - Build and Output Settings: Leave as default

3. **Environment Variables**:
   - Add any environment variables from your `.env.local` file
   - Click "Add" for each variable

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project

5. **Custom Domain** (Optional):
   - In your project settings, go to "Domains"
   - Add your custom domain
   - Follow the instructions to configure DNS

### Continuous Deployment

Vercel automatically sets up continuous deployment. When you push changes to your repository, Vercel will automatically rebuild and deploy your site.

## Deploying to Netlify

### Prerequisites

- A [Netlify](https://netlify.com) account
- Your project pushed to a Git repository

### Deployment Steps

1. **Connect your repository**:
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Select your Git provider and repository

2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Advanced build settings**:
   - Add environment variables from your `.env.local` file

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy your project

5. **Custom Domain** (Optional):
   - In your site settings, go to "Domain management"
   - Add your custom domain
   - Follow the instructions to configure DNS

## Deploying to GitHub Pages

To deploy to GitHub Pages, you'll need to make some adjustments since GitHub Pages doesn't natively support Next.js server-side features.

### Prerequisites

- A GitHub repository for your project
- GitHub Pages enabled for your repository

### Deployment Steps

1. **Install the required package**:
   \`\`\`bash
   npm install --save-dev next-gh-pages-export
   \`\`\`

2. **Update `next.config.js`**:
   \`\`\`javascript
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
     images: {
       unoptimized: true,
     },
   };
   
   module.exports = nextConfig;
   \`\`\`

3. **Add a deployment script to `package.json`**:
   \`\`\`json
   "scripts": {
     "deploy": "next build && next-gh-pages-export && gh-pages -d out"
   }
   \`\`\`

4. **Install gh-pages**:
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

5. **Run the deployment script**:
   \`\`\`bash
   npm run deploy
   \`\`\`

6. **Configure GitHub Pages**:
   - Go to your repository settings
   - Scroll down to GitHub Pages
   - Select the `gh-pages` branch as the source

Note: Some dynamic features may not work with this static export approach.

## Deploying to a Custom Server

### Prerequisites

- A server with Node.js installed
- SSH access to your server
- A domain name (optional)

### Deployment Steps

1. **Build your application locally**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Transfer files to your server**:
   \`\`\`bash
   # Using rsync
   rsync -avz --exclude node_modules --exclude .git ./ user@your-server:/path/to/deployment/
   \`\`\`

3. **Install dependencies on the server**:
   \`\`\`bash
   ssh user@your-server "cd /path/to/deployment && npm install --production"
   \`\`\`

4. **Set up environment variables**:
   \`\`\`bash
   # Create .env file on the server
   ssh user@your-server "cd /path/to/deployment && nano .env"
   # Add your environment variables
   \`\`\`

5. **Start the application**:
   \`\`\`bash
   ssh user@your-server "cd /path/to/deployment && npm start"
   \`\`\`

6. **Set up a process manager** (recommended):
   \`\`\`bash
   # Install PM2
   ssh user@your-server "npm install -g pm2"
   
   # Start your application with PM2
   ssh user@your-server "cd /path/to/deployment && pm2 start npm --name 'float-portfolio' -- start"
   
   # Set PM2 to start on boot
   ssh user@your-server "pm2 startup && pm2 save"
   \`\`\`

7. **Set up Nginx as a reverse proxy** (recommended):
   \`\`\`bash
   # Install Nginx
   ssh user@your-server "sudo apt update && sudo apt install nginx"
   
   # Create Nginx configuration
   ssh user@your-server "sudo nano /etc/nginx/sites-available/float-portfolio"
   \`\`\`

   Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

   Enable the site:
   \`\`\`bash
   ssh user@your-server "sudo ln -s /etc/nginx/sites-available/float-portfolio /etc/nginx/sites-enabled/"
   ssh user@your-server "sudo nginx -t && sudo systemctl restart nginx"
   \`\`\`

8. **Set up SSL with Let's Encrypt** (recommended):
   \`\`\`bash
   ssh user@your-server "sudo apt install certbot python3-certbot-nginx"
   ssh user@your-server "sudo certbot --nginx -d your-domain.com"
   \`\`\`

## Deployment Considerations

### Performance Optimization

- Enable caching for static assets
- Use a CDN for global distribution
- Implement proper cache headers

### Security

- Keep dependencies updated
- Use HTTPS for all connections
- Implement proper Content Security Policy (CSP)
- Don't expose sensitive environment variables to the client

### Monitoring

- Set up uptime monitoring
- Implement error tracking
- Monitor performance metrics

## Troubleshooting Common Deployment Issues

### Build Failures

If your build fails during deployment:

1. Check the build logs for specific errors
2. Ensure all dependencies are properly installed
3. Verify that your code works locally with `npm run build`
4. Check for environment variables that might be missing

### 404 Errors for Pages

If pages return 404 errors after deployment:

1. Check your routing configuration
2. Verify that dynamic routes are properly set up
3. For static exports, ensure all pages are included in the export

### Image Loading Issues

If images fail to load:

1. Check that image paths are correct
2. For static exports, ensure images are properly optimized
3. Verify that the `next/image` component is properly configured

### API Routes Not Working

If API routes return 404 errors:

1. For static exports, remember that API routes require server-side rendering
2. Check that your API routes are properly implemented
3. Verify that environment variables for API connections are set
