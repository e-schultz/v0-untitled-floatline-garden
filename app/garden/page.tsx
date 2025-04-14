"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Terminal, ArrowUpRight, Hash, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react"

type Node = {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  image?: string
}

export default function GardenPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const terminalInputRef = useRef<HTMLInputElement>(null)

  // Sample garden nodes
  const nodes: Node[] = [
    {
      id: "node-01",
      title: "FLOAT Log",
      excerpt: "Your ritual trace and memory scaffold, serving as both a temporal archive and a living document.",
      date: "March 28, 2023",
      tags: ["concept", "memory", "ritual"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4499-hAoZJbyTnEL8KDXVnHhcNYWV2fwEhS.png",
    },
    {
      id: "node-02",
      title: "Resonance Capture",
      excerpt: "A design principle for capturing and preserving moments of insight and connection.",
      date: "April 1, 2023",
      tags: ["design", "principle", "insight"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4501-Lj6twt1OiPoicIIqjHqzuQp7O3E71l.png",
    },
    {
      id: "node-03",
      title: "Engage Float Engine",
      excerpt: "A methodology for connecting disparate ideas and creating new insights through guided exploration.",
      date: "April 2, 2023",
      tags: ["methodology", "exploration", "insight"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4308-1DApGJB8cnadhPj9rpEuMYkJtw5Rmj.jpeg",
    },
    {
      id: "node-04",
      title: "Ghostline Active",
      excerpt: "Tracing the ephemeral connections between thoughts and ideas as they form and dissolve.",
      date: "April 3, 2023",
      tags: ["trace", "connection", "ephemeral"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4743-cU3TFKbigxGXR6DjQGAP1mVEgkvDTc.png",
    },
    {
      id: "node-05",
      title: "SSO For Joy",
      excerpt: "Authentication reimagined as a joyful, secure experience rather than a necessary friction.",
      date: "March 25, 2023",
      tags: ["authentication", "ux", "security"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4732-QCeHGPJ1qHCH9RVBHUZ4Z5jL9Vg3rg.png",
    },
  ]

  const filteredNodes = nodes.filter(
    (node) =>
      node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleTerminalFocus = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus()
    }
  }

  const toggleNode = (nodeId: string) => {
    if (activeNode === nodeId) {
      setActiveNode(null)
    } else {
      setActiveNode(nodeId)
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

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-start gap-4 mb-10">
        <h1 className="float-title text-4xl md:text-5xl">Digital Garden</h1>
        <p className="text-muted-foreground max-w-3xl">
          A living collection of interconnected notes, ideas, and explorations. Unlike a traditional blog, this space
          evolves over time as connections form and thoughts mature.
        </p>
      </div>

      {/* Terminal Search */}
      <div className="float-terminal mb-10 flex items-center cursor-text" onClick={handleTerminalFocus}>
        <div className="flex items-center text-primary mr-2">
          <Terminal size={16} />
          <span className="ml-2 font-mono">{">"}</span>
        </div>
        <Input
          ref={terminalInputRef}
          type="text"
          placeholder="Search the garden... (Press '/' to focus)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 font-mono text-white placeholder:text-muted-foreground"
        />
        <Search size={16} className="text-muted-foreground" />
      </div>

      {/* Garden Nodes */}
      <div className="grid gap-6">
        {filteredNodes.map((node) => (
          <div key={node.id} className="digital-garden-node">
            <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleNode(node.id)}>
              <div>
                <h2 className="float-title text-xl md:text-2xl">{node.title}</h2>
                <p className="text-muted-foreground mt-1">{node.excerpt}</p>
              </div>
              <Button variant="ghost" size="icon" className="text-primary">
                {activeNode === node.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </Button>
            </div>

            {activeNode === node.id && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-primary/30">
                {node.image && (
                  <div className="aspect-video relative overflow-hidden rounded-md border border-primary/50">
                    <Image src={node.image || "/placeholder.svg"} alt={node.title} fill className="object-cover" />
                  </div>
                )}

                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{node.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Hash size={14} />
                      <span>{node.id}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {node.tags.map((tag) => (
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
                      <Link href={`/garden/${node.id}`}>
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Explore Node
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
