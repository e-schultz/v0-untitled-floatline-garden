import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ArrowRight } from "lucide-react"

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image?: string
}

export default function BlogPage() {
  // Sample blog posts
  const posts: BlogPost[] = [
    {
      slug: "techno-ruins",
      title: "Techno Ruins on the Ominous Shore",
      excerpt: "Exploring the intersection of technology and decay, and what it means for our digital future.",
      date: "April 2, 2023",
      tags: ["technology", "philosophy", "digital-decay"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evan.just.evan__Title_Techno_Ruins_on_the_Ominous_Shore_Fragmen_5474c076-86a1-441e-ad54-1f5d257ecd2a-yORDvtHrHQu1jTkh0EzrkyBW9xQ5RQ.png",
    },
    {
      slug: "sso-for-joy",
      title: "SSO For Joy: Authentication Reimagined",
      excerpt: "A deep dive into creating authentication systems that prioritize user experience and security.",
      date: "March 28, 2023",
      tags: ["authentication", "ux", "security"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4732-QCeHGPJ1qHCH9RVBHUZ4Z5jL9Vg3rg.png",
    },
    {
      slug: "float-log-concept",
      title: "The FLOAT Log Concept",
      excerpt: "Introducing the concept of FLOAT Log as a ritual trace and memory scaffold for digital thought.",
      date: "March 25, 2023",
      tags: ["concept", "memory", "digital-garden"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4499-hAoZJbyTnEL8KDXVnHhcNYWV2fwEhS.png",
    },
    {
      slug: "resonance-capture",
      title: "Resonance Capture: Design Principles",
      excerpt: "How to design systems that capture moments of insight and connection in digital spaces.",
      date: "March 20, 2023",
      tags: ["design", "principles", "digital-spaces"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4501-Lj6twt1OiPoicIIqjHqzuQp7O3E71l.png",
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-start gap-4 mb-10">
        <h1 className="float-title text-4xl md:text-5xl">Blog</h1>
        <p className="text-muted-foreground max-w-3xl">
          Thoughts, ideas, and explorations on technology, design, and the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {posts.map((post) => (
          <article key={post.slug} className="float-border p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.image && (
                <div className="aspect-video relative overflow-hidden rounded-md border border-primary/50">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              )}

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="float-title text-2xl md:text-3xl mb-4">{post.title}</h2>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href={`/blog/${post.slug}`}>
                      Read Post <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
