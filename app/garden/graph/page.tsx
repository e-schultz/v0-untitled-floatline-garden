"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import GraphVisualization from "@/components/digital-garden/graph-visualization"

export default function GardenGraphPage() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  // Sample graph data
  const graphData = {
    nodes: [
      { id: "node-01", title: "FLOAT Log", group: 1 },
      { id: "node-02", title: "Resonance Capture", group: 1 },
      { id: "node-03", title: "Engage Float Engine", group: 2 },
      { id: "node-04", title: "Ghostline Active", group: 2 },
      { id: "node-05", title: "SSO For Joy", group: 3 },
      { id: "node-06", title: "Memory Systems", group: 1 },
      { id: "node-07", title: "Digital Gardens", group: 1 },
      { id: "node-08", title: "Authentication", group: 3 },
      { id: "node-09", title: "User Experience", group: 3 },
      { id: "node-10", title: "Techno Ruins", group: 2 },
    ],
    links: [
      { source: "node-01", target: "node-02", value: 2 },
      { source: "node-01", target: "node-06", value: 3 },
      { source: "node-01", target: "node-07", value: 2 },
      { source: "node-02", target: "node-03", value: 2 },
      { source: "node-02", target: "node-04", value: 1 },
      { source: "node-03", target: "node-04", value: 3 },
      { source: "node-03", target: "node-10", value: 1 },
      { source: "node-04", target: "node-10", value: 2 },
      { source: "node-05", target: "node-08", value: 3 },
      { source: "node-05", target: "node-09", value: 2 },
      { source: "node-07", target: "node-06", value: 1 },
      { source: "node-08", target: "node-09", value: 2 },
    ],
  }

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId)
  }

  const selectedNodeData = graphData.nodes.find((node) => node.id === selectedNode)

  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
          <Link href="/garden">
            <ArrowLeft size={18} />
          </Link>
        </Button>
        <h1 className="float-title text-3xl md:text-4xl">Garden Graph</h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
        Visualize the connections between different nodes in the digital garden. Click on a node to see more details and
        navigate to the full content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <GraphVisualization data={graphData} onNodeClick={handleNodeClick} />
          <p className="text-xs text-muted-foreground mt-2">
            Drag nodes to rearrange. Click on a node to view details.
          </p>
        </div>

        <div>
          {selectedNode ? (
            <div className="float-terminal h-full">
              <h2 className="float-title text-xl mb-4">{selectedNodeData?.title || "Node Details"}</h2>

              <div className="text-sm text-muted-foreground mb-4">
                <p>Node ID: {selectedNode}</p>
                <p>Group: {selectedNodeData?.group}</p>
                <p>
                  Connections:{" "}
                  {
                    graphData.links.filter((link) => link.source === selectedNode || link.target === selectedNode)
                      .length
                  }
                </p>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <Link href={`/garden/${selectedNode}`}>View Full Node</Link>
              </Button>
            </div>
          ) : (
            <div className="float-terminal h-full flex flex-col items-center justify-center text-center p-8">
              <p className="text-muted-foreground mb-4">Click on a node in the graph to view its details.</p>
              <div className="w-4 h-4 bg-primary animate-pulse rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
