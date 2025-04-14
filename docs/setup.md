# Setup and Configuration

This document provides detailed instructions for setting up and configuring the FLOAT portfolio website.

## System Requirements

- **Node.js**: Version 18.0.0 or later
- **npm** or **yarn**: Latest stable version recommended
- **Git**: For version control and deployment

## Detailed Installation Steps

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/float-portfolio.git
cd float-portfolio
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Environment Variables (Optional)

This project doesn't require any environment variables to function. If you want to extend the site with additional features in the future, you might add environment variables as needed.

Example `.env.local` file for future reference:

\`\`\`
# Base URL for the site (optional)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Add other environment variables as needed for future extensions
\`\`\`

### 4. Development Server

Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

The site will be available at [http://localhost:3000](http://localhost:3000).

### 5. Building for Production

To create a production build:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

To test the production build locally:

\`\`\`bash
npm run start
# or
yarn start
\`\`\`

## Configuration Options

### Customizing the Theme

The theme colors are defined in `tailwind.config.ts`. The primary color (magenta/pink) can be adjusted by modifying the `primary` color values.

\`\`\`typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      // other colors...
    },
  },
}
\`\`\`

The CSS variables are defined in `app/globals.css`:

\`\`\`css
:root {
  --primary: 326 100% 60%;
  /* other variables... */
}
\`\`\`

### Content Configuration

The site content is currently hardcoded in the components. To make it more dynamic:

1. Create a `content` directory in the project root
2. Add JSON or Markdown files for projects, blog posts, and garden nodes
3. Use the Next.js API routes to serve this content or import it directly in the components

Example structure:
\`\`\`
content/
├── projects/
│   ├── ghostline-viewer.md
│   ├── sso-for-joy.md
│   └── floating-epistemic-nexus.md
├── blog/
│   ├── techno-ruins.md
│   └── sso-for-joy-auth.md
└── garden/
    ├── float-log.md
    ├── resonance-capture.md
    └── engage-float-engine.md
\`\`\`

## Next Steps

After setting up the project, you might want to:

1. Customize the content with your own projects and blog posts
2. Modify the styling to match your personal brand
3. Add additional pages or features
4. Set up a deployment pipeline

For more information on these topics, refer to the other documentation files in this directory.
