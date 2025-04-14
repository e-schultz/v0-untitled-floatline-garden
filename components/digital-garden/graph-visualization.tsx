"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

type Node = {
  id: string
  title: string
  group: number
}

type Link = {
  source: string
  target: string
  value: number
}

type GraphData = {
  nodes: Node[]
  links: Link[]
}

interface GraphVisualizationProps {
  data: GraphData
  onNodeClick?: (nodeId: string) => void
}

export default function GraphVisualization({ data, onNodeClick }: GraphVisualizationProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length) return

    const width = svgRef.current.clientWidth
    const height = 500

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove()

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])

    // Create a simulation with forces
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
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1))

    // Create links
    const link = svg
      .append("g")
      .attr("stroke", "rgba(236, 72, 153, 0.3)")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value))

    // Create nodes
    const node = svg
      .append("g")
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        if (onNodeClick) onNodeClick(d.id)
      })

    // Add circles to nodes
    node
      .append("circle")
      .attr("r", 10)
      .attr("fill", "rgb(236, 72, 153)")
      .attr("stroke", "#000")
      .attr("stroke-width", 1.5)

    // Add labels to nodes
    node
      .append("text")
      .attr("x", 12)
      .attr("y", 4)
      .text((d) => d.title)
      .attr("fill", "white")
      .attr("font-family", "var(--font-space-mono)")
      .attr("font-size", "10px")

    // Add title for hover
    node.append("title").text((d) => d.title)

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`)
    })

    // Drag behavior
    const drag = d3
      .drag<SVGGElement, Node>()
      .on("start", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on("drag", (event, d: any) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on("end", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })

    node.call(drag as any)

    return () => {
      simulation.stop()
    }
  }, [data, onNodeClick])

  return (
    <div className="w-full overflow-hidden border border-primary/30 rounded-md bg-black/50 p-4">
      <svg ref={svgRef} className="w-full" />
    </div>
  )
}
