# Component Documentation

This document provides detailed information about the key components used in the FLOAT portfolio website.

## Core Components

### Layout Components

#### `app/layout.tsx`

The root layout component that wraps all pages. It includes:
- Font loading (Inter and Space Mono)
- Theme provider setup
- Header and Footer components

\`\`\`tsx
// Key properties
export const metadata: Metadata = {
  title: "FLOAT | Evan Schultz",
  description: "Portfolio, Digital Garden, and Blog by Evan Schultz",
}
\`\`\`

#### `components/header.tsx`

The site header with navigation links and mobile menu.

Props: None

Features:
- Responsive design with mobile hamburger menu
- Navigation links to main sections
- FLOAT branding

#### `components/footer.tsx`

The site footer with copyright information and social links.

Props: None

Features:
- Copyright information with current year
- Social media links
- FLOAT branding and tagline

### Page Components

#### `app/page.tsx`

The home page component featuring sections for:
- Hero banner with FLOAT branding
- Featured projects
- Digital garden preview
- Latest blog posts

#### `app/projects/page.tsx`

The projects listing page showing all portfolio projects.

Features:
- Project cards with images
- Technology tags
- Links to GitHub repositories and project details

#### `app/garden/page.tsx`

The digital garden main page with interactive node exploration.

Features:
- Terminal-inspired search interface
- Expandable garden nodes
- Node metadata and tags

#### `app/garden/graph/page.tsx`

A visual graph representation of the digital garden nodes and their connections.

Features:
- Interactive D3.js visualization
- Node selection and details panel
- Links to full node content

#### `app/blog/page.tsx`

The blog listing page showing all blog posts.

Features:
- Blog post cards with featured images
- Publication dates and tags
- Excerpt previews

### UI Components

#### `components/digital-garden/graph-visualization.tsx`

A D3.js-powered graph visualization component for the digital garden.

Props:
\`\`\`tsx
interface GraphVisualizationProps {
  data: {
    nodes: Array<{
      id: string;
      title: string;
      group: number;
    }>;
    links: Array<{
      source: string;
      target: string;
      value: number;
    }>;
  };
  onNodeClick?: (nodeId: string) => void;
}
\`\`\`

Features:
- Interactive node dragging
- Force-directed graph layout
- Node selection events

## Styling System

The project uses a combination of Tailwind CSS utility classes and custom CSS classes defined in `app/globals.css`.

### Custom CSS Classes

\`\`\`css
.float-title {
  @apply font-mono text-primary font-bold tracking-wider;
}

.float-border {
  @apply border border-primary/70 rounded-md p-4 relative;
}

.float-card {
  @apply bg-black border border-primary/70 rounded-md p-4 transition-all duration-300 hover:border-primary;
}

.float-terminal {
  @apply font-mono text-sm bg-black border border-primary/70 rounded-md p-4;
}

.float-link {
  @apply text-primary hover:text-primary/80 transition-colors duration-200;
}

.digital-garden-node {
  @apply relative p-4 border border-primary/50 rounded-md hover:border-primary transition-all duration-300;
}
\`\`\`

### Animations

The project includes several custom animations defined in `tailwind.config.ts`:

\`\`\`tsx
keyframes: {
  float: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "pulse-glow": {
    "0%, 100%": {
      boxShadow: "0 0 5px 0 rgba(236, 72, 153, 0.3)",
      borderColor: "rgba(236, 72, 153, 0.5)",
    },
    "50%": {
      boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.5)",
      borderColor: "rgba(236, 72, 153, 0.8)",
    },
  },
  "terminal-blink": {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0" },
  },
},
animations: {
  float: "float 6s ease-in-out infinite",
  "pulse-glow": "pulse-glow 4s ease-in-out infinite",
  "terminal-blink": "terminal-blink 1s step-end infinite",
},
\`\`\`

## Component Best Practices

When creating new components for this project, follow these guidelines:

1. Use TypeScript interfaces for component props
2. Leverage the custom CSS classes for consistent styling
3. Ensure components are responsive using Tailwind's responsive modifiers
4. Use the shadcn/ui components when possible for UI elements
5. For interactive components, implement proper accessibility attributes
6. Keep components focused on a single responsibility
7. Use client-side components (`"use client"`) only when necessary for interactivity
