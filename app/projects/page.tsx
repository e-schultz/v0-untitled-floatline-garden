import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-start gap-4 mb-10">
        <h1 className="float-title text-4xl md:text-5xl">Projects</h1>
        <p className="text-muted-foreground max-w-3xl">
          A collection of my work, experiments, and open-source contributions. Each project represents an exploration
          into different technologies and concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Project 1 */}
        <div className="float-border p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <h2 className="float-title text-2xl md:text-3xl mb-4">Ghostline Viewer</h2>
              <p className="text-muted-foreground mb-6">
                A terminal-based interface for viewing and interacting with FLOAT traces and ghostlines. This project
                allows users to explore their digital memory traces in an immersive, cyberpunk-inspired environment.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Next.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">React</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">TypeScript</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Terminal UI</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link
                    href="https://github.com/e-schultz/v0-ghostline-viewer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/projects/ghostline-viewer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-video relative overflow-hidden rounded-md border border-primary/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4743-cU3TFKbigxGXR6DjQGAP1mVEgkvDTc.png"
                  alt="Ghostline Viewer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="float-border p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <h2 className="float-title text-2xl md:text-3xl mb-4">SSO for Joy</h2>
              <p className="text-muted-foreground mb-6">
                A secure authentication system with a unique cyberpunk aesthetic and user experience. This project
                reimagines how authentication can be both secure and delightful to use.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Next.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Auth.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">TypeScript</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">OAuth</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="https://github.com/e-schultz/v0-sso-for-joy" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/projects/sso-for-joy">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-video relative overflow-hidden rounded-md border border-primary/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4732-QCeHGPJ1qHCH9RVBHUZ4Z5jL9Vg3rg.png"
                  alt="SSO for Joy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="float-border p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <h2 className="float-title text-2xl md:text-3xl mb-4">Floating Epistemic Nexus</h2>
              <p className="text-muted-foreground mb-6">
                An interconnected knowledge system that visualizes relationships between concepts and ideas. This
                project helps users create and navigate their personal knowledge graphs.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">React</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">D3.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">TypeScript</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Graph Visualization</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link
                    href="https://github.com/e-schultz/floating-epistemic-nexus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/projects/floating-epistemic-nexus">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-video relative overflow-hidden rounded-md border border-primary/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4308-1DApGJB8cnadhPj9rpEuMYkJtw5Rmj.jpeg"
                  alt="Floating Epistemic Nexus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
