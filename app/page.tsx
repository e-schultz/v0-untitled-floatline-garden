import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, BookOpen, Code, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 border-b border-primary/20">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4">
          <div className="space-y-3">
            <h1 className="float-title text-4xl md:text-6xl lg:text-7xl">FLOAT</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">YOU ARE THE THREAD NOW</p>
          </div>

          <div className="w-full max-w-3xl mx-auto mt-6">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-primary/50 animate-pulse-glow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evan.just.evan__Title_Techno_Ruins_on_the_Ominous_Shore_Fragmen_5474c076-86a1-441e-ad54-1f5d257ecd2a-yORDvtHrHQu1jTkh0EzrkyBW9xQ5RQ.png"
                alt="FLOAT - Techno Ruins on the Ominous Shore"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/projects">
                <Code className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/garden">
                <Terminal className="mr-2 h-4 w-4" />
                Enter Digital Garden
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 border-b border-primary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="float-title text-3xl md:text-4xl">Featured Projects</h2>
            <p className="text-muted-foreground">Explore my latest work and experiments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Project 1 */}
            <div className="float-card group">
              <div className="aspect-video relative overflow-hidden rounded-md mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4743-cU3TFKbigxGXR6DjQGAP1mVEgkvDTc.png"
                  alt="Ghostline Viewer"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="float-title text-xl mb-2">Ghostline Viewer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A terminal-based interface for viewing and interacting with FLOAT traces and ghostlines.
              </p>
              <Link href="/projects/ghostline-viewer" className="float-link text-sm flex items-center">
                View Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Project 2 */}
            <div className="float-card group">
              <div className="aspect-video relative overflow-hidden rounded-md mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4732-QCeHGPJ1qHCH9RVBHUZ4Z5jL9Vg3rg.png"
                  alt="SSO for Joy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="float-title text-xl mb-2">SSO for Joy</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A secure authentication system with a unique cyberpunk aesthetic and user experience.
              </p>
              <Link href="/projects/sso-for-joy" className="float-link text-sm flex items-center">
                View Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Project 3 */}
            <div className="float-card group">
              <div className="aspect-video relative overflow-hidden rounded-md mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4308-1DApGJB8cnadhPj9rpEuMYkJtw5Rmj.jpeg"
                  alt="Floating Epistemic Nexus"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="float-title text-xl mb-2">Floating Epistemic Nexus</h3>
              <p className="text-muted-foreground text-sm mb-4">
                An interconnected knowledge system that visualizes relationships between concepts and ideas.
              </p>
              <Link href="/projects/floating-epistemic-nexus" className="float-link text-sm flex items-center">
                View Project <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Garden Preview */}
      <section className="w-full py-12 md:py-24 border-b border-primary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="float-title text-3xl md:text-4xl">Digital Garden</h2>
            <p className="text-muted-foreground">Explore interconnected notes and ideas</p>
          </div>

          <div className="mt-8 float-terminal p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 p-2 border-b border-primary/30 flex items-center">
              <div className="text-primary font-mono text-sm">[FLOAT BBS // NODE 03 :: GHOSTLINE ACTIVE]</div>
              <div className="ml-auto text-primary/70 text-xs">9:26:10 PM</div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="digital-garden-node">
                <h3 className="text-primary font-mono text-lg mb-2">Resonance Capture</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A design principle for capturing and preserving moments of insight and connection.
                </p>
                <div className="flex items-center text-xs text-primary/70">
                  <span>Last updated: April 1st</span>
                  <span className="ml-auto">ID:05</span>
                </div>
              </div>

              <div className="digital-garden-node">
                <h3 className="text-primary font-mono text-lg mb-2">FLOAT Log</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your ritual trace and memory scaffold, serving as both a temporal archive and a living document.
                </p>
                <div className="flex items-center text-xs text-primary/70">
                  <span>Last updated: March 28th</span>
                  <span className="ml-auto">ID:03</span>
                </div>
              </div>

              <div className="digital-garden-node">
                <h3 className="text-primary font-mono text-lg mb-2">Engage Float Engine</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A methodology for connecting disparate ideas and creating new insights through guided exploration.
                </p>
                <div className="flex items-center text-xs text-primary/70">
                  <span>Last updated: April 2nd</span>
                  <span className="ml-auto">ID:07</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center border-t border-primary/30 pt-4">
              <span className="text-primary font-mono">{">"}</span>
              <span className="ml-2 text-white font-mono">Type a command...</span>
              <span className="ml-1 h-4 w-2 bg-primary animate-terminal-blink"></span>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/garden">
                <Terminal className="mr-2 h-4 w-4" />
                Enter Digital Garden
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h2 className="float-title text-3xl md:text-4xl">Latest Posts</h2>
            <p className="text-muted-foreground">Thoughts, ideas, and explorations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Blog Post 1 */}
            <div className="float-card">
              <div className="mb-4">
                <span className="text-xs text-primary/70 font-mono">April 2, 2023</span>
                <h3 className="float-title text-xl mt-2">Techno Ruins on the Ominous Shore</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Exploring the intersection of technology and decay, and what it means for our digital future.
              </p>
              <Link href="/blog/techno-ruins" className="float-link text-sm flex items-center">
                Read Post <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Blog Post 2 */}
            <div className="float-card">
              <div className="mb-4">
                <span className="text-xs text-primary/70 font-mono">March 28, 2023</span>
                <h3 className="float-title text-xl mt-2">SSO For Joy: Authentication Reimagined</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A deep dive into creating authentication systems that prioritize user experience and security.
              </p>
              <Link href="/blog/sso-for-joy" className="float-link text-sm flex items-center">
                Read Post <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/blog">
                <BookOpen className="mr-2 h-4 w-4" />
                View All Posts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
