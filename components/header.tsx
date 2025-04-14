"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, BookOpen, Code, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="float-title text-xl md:text-2xl">FLOAT</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="float-link flex items-center gap-2">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link href="/projects" className="float-link flex items-center gap-2">
            <Code size={18} />
            <span>Projects</span>
          </Link>
          <Link href="/garden" className="float-link flex items-center gap-2">
            <Terminal size={18} />
            <span>Digital Garden</span>
          </Link>
          <Link href="/blog" className="float-link flex items-center gap-2">
            <BookOpen size={18} />
            <span>Blog</span>
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-black/95 border-t border-primary/20",
          isOpen ? "slide-in-from-bottom-80" : "hidden",
        )}
      >
        <div className="grid gap-6 p-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80"
            onClick={() => setIsOpen(false)}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80"
            onClick={() => setIsOpen(false)}
          >
            <Code size={20} />
            <span>Projects</span>
          </Link>
          <Link
            href="/garden"
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80"
            onClick={() => setIsOpen(false)}
          >
            <Terminal size={20} />
            <span>Digital Garden</span>
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80"
            onClick={() => setIsOpen(false)}
          >
            <BookOpen size={20} />
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
