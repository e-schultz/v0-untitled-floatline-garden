# Digital Garden Documentation

This document explains the digital garden functionality in the FLOAT portfolio website, including its concept, implementation, and how to extend it.

## What is a Digital Garden?

A digital garden is a collection of interconnected notes, ideas, and concepts that evolve over time. Unlike a traditional blog with chronological posts, a digital garden represents knowledge as a network of connected thoughts that grow and change.

In the FLOAT portfolio, the digital garden is implemented with:
- Individual "nodes" representing discrete ideas or concepts
- Connections between related nodes
- A graph visualization to explore relationships
- A terminal-inspired interface for navigation

## Digital Garden Structure

### Node Structure

Each node in the digital garden has the following structure:

\`\`\`typescript
type Node = {
  id: string;        // Unique identifier
  title: string;     // Node title
  excerpt: string;   // Brief description
  date: string;      // Last updated date
  tags: string[];    // Categorization tags
  image?: string;    // Optional featured image
}
\`\`\`

### Node Connections

Connections between nodes are defined in the graph data structure:

\`\`\`typescript
type Link = {
  source: string;    // Source node ID
  target: string;    // Target node ID
  value: number;     // Connection strength (1-3)
}
\`\`\`

## Implementation Details

### Main Components

1. **Garden Page** (`app/garden/page.tsx`)
   - Lists all garden nodes
   - Provides search functionality
   - Allows expanding nodes to see details

2. **Graph Visualization** (`app/garden/graph/page.tsx` and `components/digital-garden/graph-visualization.tsx`)
   - Visual representation of nodes and their connections
   - Interactive D3.js-powered graph
   - Node selection and details panel

3. **Node Detail Pages** (to be implemented in `app/garden/[nodeId]/page.tsx`)
   - Full content for each node
   - Related nodes
   - Backlinks

### Key Features

#### Terminal-Inspired Search

The garden page includes a terminal-inspired search interface that can be focused by pressing the `/` key:

\`\`\`tsx
// From app/garden/page.tsx
const handleTerminalFocus = () => {
  if (terminalInputRef.current) {
    terminalInputRef.current.focus()
  }
}

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault()
      handleTerminalFocus()
    }
  }
  
  window.addEventListener("keydown", handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown)
}, [])
\`\`\`

#### Interactive Graph Visualization

The graph visualization uses D3.js to create an interactive force-directed graph:

\`\`\`tsx
// From components/digital-garden/graph-visualization.tsx
const simulation = d3
  .forceSimulation()
  .nodes(data.nodes as d3.SimulationNodeDatum[])
  .force(
    "link",
    d3
      .forceLink<d3.SimulationNodeDatum, d3.SimulationLinkDatum<d3.SimulationNodeDatum>>()
      .id((d: any) => d.id)
      .links(data.links)
      .distance(100),
  )
  .force("charge", d3.forceManyBody().strength(-300))
  .force("center", d3.forceCenter(width / 2, height / 2))
\`\`\`

## Extending the Digital Garden

### Adding New Nodes

To add new nodes to the digital garden:

1. Add a new entry to the `nodes` array in `app/garden/page.tsx`
2. Create connections to existing nodes in the `graphData` object in `app/garden/graph/page.tsx`
3. Create a new page for the node at `app/garden/[nodeId]/page.tsx` (to be implemented)

### Creating a Dynamic Data Source

For a more scalable approach, consider moving the node data to:

1. **Markdown files**: Store nodes as Markdown files with frontmatter for metadata
2. **Database**: Use a database like Supabase or MongoDB to store nodes and connections
3. **CMS**: Integrate with a headless CMS like Sanity or Contentful

Example implementation with Markdown files:

\`\`\`tsx
// lib/garden.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const gardenDirectory = path.join(process.cwd(), 'content/garden');

export function getAllNodeIds() {
  const fileNames = fs.readdirSync(gardenDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getNodeData(id: string) {
  const fullPath = path.join(gardenDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  };
}
\`\`\`

## Best Practices for Digital Garden Content

1. **Keep nodes focused**: Each node should represent a single concept or idea
2. **Create meaningful connections**: Connect nodes that have genuine relationships
3. **Update regularly**: Digital gardens should evolve over time
4. **Use consistent tagging**: Develop a taxonomy for categorizing nodes
5. **Include visual elements**: Images and diagrams can enhance understanding
6. **Provide context**: Make sure each node can stand alone while also fitting into the larger network
