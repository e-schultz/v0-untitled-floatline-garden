# Blog System Documentation

This document explains the blog functionality in the FLOAT portfolio website, including its implementation and how to extend it.

## Blog System Overview

The blog system in the FLOAT portfolio allows you to publish articles with:
- Featured images
- Publication dates
- Tags for categorization
- Excerpts for previews

The current implementation uses hardcoded data, but this can be extended to use Markdown files, a database, or a CMS.

## Blog Structure

### Post Structure

Each blog post has the following structure:

\`\`\`typescript
type BlogPost = {
  slug: string;      // URL-friendly identifier
  title: string;     // Post title
  excerpt: string;   // Brief description or introduction
  date: string;      // Publication date
  tags: string[];    // Categorization tags
  image?: string;    // Optional featured image
}
\`\`\`

## Implementation Details

### Main Components

1. **Blog Listing Page** (`app/blog/page.tsx`)
   - Lists all blog posts
   - Shows featured images, titles, excerpts, dates, and tags
   - Links to individual post pages

2. **Blog Post Pages** (to be implemented in `app/blog/[slug]/page.tsx`)
   - Full content for each post
   - Related posts
   - Comments section (optional)

### Current Data Source

The blog posts are currently defined as a static array in `app/blog/page.tsx`:

\`\`\`tsx
const posts: BlogPost[] = [
  {
    slug: "techno-ruins",
    title: "Techno Ruins on the Ominous Shore",
    excerpt: "Exploring the intersection of technology and decay, and what it means for our digital future.",
    date: "April 2, 2023",
    tags: ["technology", "philosophy", "digital-decay"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evan.just.evan__Title_Techno_Ruins_on_the_Ominous_Shore_Fragmen_5474c076-86a1-441e-ad54-1f5d257ecd2a-yORDvtHrHQu1jTkh0EzrkyBW9xQ5RQ.png",
  },
  // Additional posts...
]
\`\`\`

## Extending the Blog System

### Adding New Posts

To add new posts to the blog:

1. Add a new entry to the `posts` array in `app/blog/page.tsx`
2. Create a new page for the post at `app/blog/[slug]/page.tsx` (to be implemented)

### Creating a Dynamic Data Source

For a more scalable approach, consider moving the blog data to:

1. **Markdown files**: Store posts as Markdown files with frontmatter for metadata
2. **Database**: Use a database like Supabase or MongoDB to store posts
3. **CMS**: Integrate with a headless CMS like Sanity or Contentful

Example implementation with Markdown files:

\`\`\`tsx
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  return {
    slug,
    content: matterResult.content,
    ...matterResult.data
  };
}
\`\`\`

### Adding Rich Content to Blog Posts

To enhance blog posts with rich content:

1. **MDX Support**: Add MDX support to render React components within Markdown
2. **Syntax Highlighting**: Add a syntax highlighter for code blocks
3. **Image Gallery**: Create an image gallery component for posts with multiple images
4. **Table of Contents**: Generate a table of contents from post headings

Example MDX implementation:

\`\`\`tsx
// app/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getPostData } from '@/lib/blog';

// Custom components for MDX
const components = {
  // Add custom components here
};

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = getPostData(params.slug);
  const mdxSource = await serialize(postData.content);
  
  return (
    <article>
      <h1>{postData.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </article>
  );
}
\`\`\`

## Best Practices for Blog Content

1. **Use descriptive titles**: Make titles clear and engaging
2. **Write compelling excerpts**: The excerpt is often what convinces readers to click
3. **Choose relevant tags**: Use consistent tags to help readers find related content
4. **Include high-quality images**: Featured images should be visually appealing and relevant
5. **Structure content with headings**: Use proper heading hierarchy (H1, H2, H3)
6. **Include code examples**: For technical posts, include well-formatted code examples
7. **Link to related content**: Connect blog posts to related garden nodes or other posts
