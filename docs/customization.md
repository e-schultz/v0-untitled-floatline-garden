# Customization Guide

This document provides guidance on how to customize the FLOAT portfolio website to match your personal brand and preferences.

## Theming

### Color Scheme

The default color scheme uses a magenta/pink on black cyberpunk-inspired aesthetic. To change this:

1. Modify the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --primary: 326 100% 60%; /* Magenta pink */
  /* Other colors... */
}

.dark {
  --background: 0 0% 0%; /* Black */
  --foreground: 0 0% 98%; /* White */
  --primary: 326 100% 60%; /* Magenta pink */
  /* Other colors... */
}
\`\`\`

To change the primary color to a different hue, adjust the first value (hue) in the HSL color. For example:
- Blue: `--primary: 220 100% 60%;`
- Green: `--primary: 142 100% 60%;`
- Purple: `--primary: 270 100% 60%;`

2. Update the animation colors in `tailwind.config.ts` to match your new primary color:

\`\`\`typescript
keyframes: {
  "pulse-glow": {
    "0%, 100%": {
      boxShadow: "0 0 5px 0 rgba(YOUR_COLOR_RGB, 0.3)",
      borderColor: "rgba(YOUR_COLOR_RGB, 0.5)",
    },
    "50%": {
      boxShadow: "0 0 20px 5px rgba(YOUR_COLOR_RGB, 0.5)",
      borderColor: "rgba(YOUR_COLOR_RGB, 0.8)",
    },
  },
  // Other animations...
},
\`\`\`

### Typography

The site uses two main fonts:
- Space Mono (monospace) for headings and terminal-style text
- Inter (sans-serif) for body text

To change these fonts:

1. Update the font imports in `app/layout.tsx`:

\`\`\`typescript
import { Noto_Sans_Mono as YourSansFont, Cormorant as YourMonoFont } from 'next/font/google'

const yourSansFont = YourSansFont({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
})

const yourMonoFont = YourMonoFont({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})
\`\`\`

2. Update the font variables in the HTML tag:

\`\`\`tsx
<html lang="en" suppressHydrationWarning className={`${yourSansFont.variable} ${yourMonoFont.variable}`}>
\`\`\`

3. The font classes are already set up in `tailwind.config.ts` to use these variables:

\`\`\`typescript
fontFamily: {
  sans: ["var(--font-sans)"],
  mono: ["var(--font-mono)"],
},
\`\`\`

## Content Customization

### Personal Information

Update your personal information in the following files:

1. Site metadata in `app/layout.tsx`:

\`\`\`typescript
export const metadata: Metadata = {
  title: "YOUR_NAME | Portfolio",
  description: "Portfolio, Digital Garden, and Blog by YOUR_NAME",
}
\`\`\`

2. Footer information in `components/footer.tsx`:

\`\`\`tsx
<span className="text-sm text-muted-foreground">© {new Date().getFullYear()} YOUR_NAME</span>
\`\`\`

3. Social media links in `components/footer.tsx`:

\`\`\`tsx
<Link href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="float-link">
  <Github size={20} />
  <span className="sr-only">GitHub</span>
</Link>
// Add other social media links as needed
\`\`\`

### Projects

Update the projects in `app/projects/page.tsx` and on the home page in `app/page.tsx`:

\`\`\`typescript
// Example project structure
{
  id: "your-project-id",
  title: "Your Project Title",
  excerpt: "Brief description of your project.",
  technologies: ["Next.js", "React", "TypeScript"],
  githubUrl: "https://github.com/yourusername/your-project",
  demoUrl: "https://your-project-demo.com",
  image: "/images/your-project-image.jpg"
}
\`\`\`

### Blog Posts

Update the blog posts in `app/blog/page.tsx` and on the home page in `app/page.tsx`:

\`\`\`typescript
// Example blog post structure
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief excerpt or introduction to your blog post.",
  date: "April 15, 2023",
  tags: ["tag1", "tag2", "tag3"],
  image: "/images/your-post-image.jpg"
}
\`\`\`

### Digital Garden

Update the garden nodes in `app/garden/page.tsx` and the graph data in `app/garden/graph/page.tsx`:

\`\`\`typescript
// Example garden node structure
{
  id: "node-id",
  title: "Node Title",
  excerpt: "Brief description of this concept or idea.",
  date: "April 10, 2023",
  tags: ["concept", "idea", "category"],
  image: "/images/node-image.jpg"
}

// Example graph connection
{
  source: "node-id-1",
  target: "node-id-2",
  value: 2 // Connection strength (1-3)
}
\`\`\`

## Layout Customization

### Header Navigation

Customize the navigation links in `components/header.tsx`:

\`\`\`tsx
<nav className="hidden md:flex items-center gap-6">
  <Link href="/" className="float-link flex items-center gap-2">
    <Home size={18} />
    <span>Home</span>
  </Link>
  {/* Add or modify navigation links */}
  <Link href="/your-custom-page" className="float-link flex items-center gap-2">
    <YourIcon size={18} />
    <span>Your Page</span>
  </Link>
</nav>
\`\`\`

### Adding New Pages

To add a new page to the site:

1. Create a new file in the `app` directory, e.g., `app/your-page/page.tsx`
2. Add the page content using the existing components and styles
3. Add a link to the page in the header navigation

Example new page:

\`\`\`tsx
// app/your-page/page.tsx
export default function YourPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-start gap-4 mb-10">
        <h1 className="float-title text-4xl md:text-5xl">Your Page Title</h1>
        <p className="text-muted-foreground max-w-3xl">
          Description or introduction to your page.
        </p>
      </div>
      
      {/* Your page content goes here */}
      <div className="float-border p-6 md:p-8">
        <h2 className="float-title text-2xl md:text-3xl mb-4">Section Title</h2>
        <p className="text-muted-foreground mb-6">
          Your content here. Use the existing styling classes to maintain a consistent look.
        </p>
      </div>
    </div>
  )
}
\`\`\`

## Advanced Customization

### Adding Custom Components

To add custom components:

1. Create a new file in the `components` directory
2. Use the existing styling system for consistency
3. Import and use the component in your pages

### Extending the Styling System

To add new custom CSS classes:

1. Add your classes to `app/globals.css` using the existing pattern:

\`\`\`css
.your-custom-class {
  @apply your-tailwind-utilities;
}
\`\`\`

2. Use your custom class in your components:

\`\`\`tsx
<div className="your-custom-class">
  Content
</div>
\`\`\`

### Adding Animations

To add new animations:

1. Define the keyframes in `tailwind.config.ts`:

\`\`\`typescript
keyframes: {
  "your-animation": {
    "0%": { /* starting state */ },
    "100%": { /* ending state */ },
  },
},
\`\`\`

2. Add the animation to the animations object:

\`\`\`typescript
animations: {
  "your-animation": "your-animation 2s ease-in-out infinite",
},
\`\`\`

3. Use the animation in your components:

\`\`\`tsx
<div className="animate-your-animation">
  Animated content
</div>
\`\`\`

## Performance Optimization

To optimize the performance of your customized site:

1. Use Next.js Image component for all images
2. Implement proper lazy loading for below-the-fold content
3. Use Server Components where possible to reduce client-side JavaScript
4. Implement proper caching strategies for dynamic content
5. Optimize third-party dependencies and remove unused ones

## Accessibility Considerations

When customizing, maintain good accessibility practices:

1. Ensure sufficient color contrast (at least 4.5:1 for normal text)
2. Provide alternative text for all images
3. Maintain proper heading hierarchy
4. Ensure keyboard navigability for all interactive elements
5. Test with screen readers to verify accessibility
