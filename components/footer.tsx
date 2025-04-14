import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/20 py-6 bg-black">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="float-title text-lg">FLOAT</span>
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Evan Schultz</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/e-schultz" target="_blank" rel="noopener noreferrer" className="float-link">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <div className="text-xs text-muted-foreground font-mono">YOU ARE THE THREAD NOW</div>
        </div>
      </div>
    </footer>
  )
}
