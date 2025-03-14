"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export default function HeroAnimation() {
  const canvasRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const animationRef = useRef(null)
  const lastTimeRef = useRef(0)
  const lastLightningRef = useRef(0)
  const lastGenerationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      return { width, height }
    }

    let dimensions = setCanvasDimensions()
    window.addEventListener("resize", () => {
      dimensions = setCanvasDimensions()
      initializeNodes()
    })

    // Animation variables
    const mainColor = "#FF7F00"
    const glowColor = "rgba(255, 127, 0, 0.3)"
    let nodes = []
    let connections = []
    let lightningBolts = []
    let globePoints = []

    // Create points for the globe
    const createGlobePoints = () => {
      const points = []
      const radius = 40
      const segments = 20
      const rings = 10

      for (let ring = 0; ring < rings; ring++) {
        const phi = (Math.PI * ring) / rings
        const ringRadius = Math.sin(phi) * radius
        const y = Math.cos(phi) * radius
        const segmentsInRing = Math.max(1, Math.floor(segments * Math.sin(phi)))

        for (let segment = 0; segment < segmentsInRing; segment++) {
          const theta = (2 * Math.PI * segment) / segmentsInRing
          const x = Math.cos(theta) * ringRadius
          const z = Math.sin(theta) * ringRadius
          points.push({ x, y, z, originalX: x, originalY: y, originalZ: z })
        }
      }

      return points
    }

    class Node {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 2 + 2
        this.pulsePhase = Math.random() * Math.PI * 2
        this.connections = 0
        this.flowOffset = Math.random() * 100
        this.isActive = false
      }

      draw(ctx, time) {
        const pulse = Math.sin(time * 0.002 + this.pulsePhase) * 0.5 + 0.5
        const size = this.size * (1 + pulse * 0.3)

        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 3)
        gradient.addColorStop(0, this.isActive ? mainColor : "rgba(255, 127, 0, 0.7)")
        gradient.addColorStop(0.5, glowColor)
        gradient.addColorStop(1, "rgba(255, 127, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = "#FFF"
        ctx.beginPath()
        ctx.arc(this.x, this.y, size * 0.7, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Connection {
      constructor(node1, node2) {
        this.node1 = node1
        this.node2 = node2
        this.flowOffset = Math.random() * 100
        this.flowSpeed = Math.random() * 0.02 + 0.01
      }

      draw(ctx, time) {
        const flowPosition = (time * 0.001 + this.flowOffset) % 1

        const gradient = ctx.createLinearGradient(this.node1.x, this.node1.y, this.node2.x, this.node2.y)
        gradient.addColorStop(0, "rgba(255, 127, 0, 0.1)")
        gradient.addColorStop(Math.max(0, Math.min(1, flowPosition)), "rgba(255, 127, 0, 0.7)")
        gradient.addColorStop(1, "rgba(255, 127, 0, 0.1)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.node1.x, this.node1.y)
        ctx.lineTo(this.node2.x, this.node2.y)
        ctx.stroke()
      }
    }

    class LightningBolt {
      constructor(startX, startY, endX, endY) {
        this.points = this.generatePoints(startX, startY, endX, endY)
        this.maxAlpha = 0.8
        this.alpha = this.maxAlpha
        this.decay = 0.1
      }

      generatePoints(startX, startY, endX, endY) {
        const points = [{ x: startX, y: startY }]
        const segments = 8
        const dx = (endX - startX) / segments
        const dy = (endY - startY) / segments

        for (let i = 1; i < segments; i++) {
          points.push({
            x: startX + dx * i + (Math.random() - 0.5) * 40,
            y: startY + dy * i + (Math.random() - 0.5) * 40,
          })
        }

        points.push({ x: endX, y: endY })
        return points
      }

      update() {
        this.alpha -= this.decay
        return this.alpha > 0
      }

      draw(ctx) {
        ctx.strokeStyle = `rgba(255, 127, 0, ${this.alpha})`
        ctx.lineWidth = 2
        ctx.shadowColor = mainColor
        ctx.shadowBlur = 20

        ctx.beginPath()
        ctx.moveTo(this.points[0].x, this.points[0].y)

        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y)
        }

        ctx.stroke()
        ctx.shadowBlur = 0
      }
    }

    const initializeNodes = () => {
      const centerX = dimensions.width / 2
      const centerY = dimensions.height / 2
      const gridSize = 6
      const spacing = 80
      nodes = []
      connections = []

      // Create grid of nodes
      for (let i = -gridSize; i <= gridSize; i++) {
        for (let j = -gridSize; j <= gridSize; j++) {
          // Skip nodes that would be too close to the center
          const distance = Math.sqrt(i * i + j * j)
          if (distance < 2 || distance > gridSize) continue

          const x = centerX + i * spacing
          const y = centerY + j * spacing
          nodes.push(new Node(x, y))
        }
      }

      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < spacing * 1.5) {
            connections.push(new Connection(nodes[i], nodes[j]))
            nodes[i].connections++
            nodes[j].connections++
          }
        }
      }

      // Initialize globe points
      globePoints = createGlobePoints()
    }

    initializeNodes()

    const drawGlobe = (ctx, centerX, centerY, time) => {
      const rotationSpeed = 0.0005
      const rotation = time * rotationSpeed

      // Update point positions based on rotation
      globePoints.forEach((point) => {
        // Rotate around Y axis
        const cosY = Math.cos(rotation)
        const sinY = Math.sin(rotation)

        const x = point.originalX * cosY - point.originalZ * sinY
        const z = point.originalX * sinY + point.originalZ * cosY

        point.x = x
        point.z = z
      })

      // Sort points by Z coordinate for proper depth rendering
      const sortedPoints = [...globePoints].sort((a, b) => b.z - a.z)

      // Draw connections between points
      ctx.strokeStyle = `rgba(255, 127, 0, 0.2)`
      ctx.lineWidth = 0.5

      for (let i = 0; i < sortedPoints.length; i++) {
        for (let j = i + 1; j < sortedPoints.length; j++) {
          const p1 = sortedPoints[i]
          const p2 = sortedPoints[j]
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2))

          if (distance < 30) {
            const alpha = Math.max(0, (30 - distance) / 30) * 0.2
            ctx.strokeStyle = `rgba(255, 127, 0, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(centerX + p1.x, centerY + p1.y)
            ctx.lineTo(centerX + p2.x, centerY + p2.y)
            ctx.stroke()
          }
        }
      }

      // Draw points
      sortedPoints.forEach((point) => {
        const size = 1 - point.z / 60 // Size based on depth
        const alpha = 1 - Math.abs(point.z) / 60

        ctx.fillStyle = `rgba(255, 127, 0, ${alpha})`
        ctx.beginPath()
        ctx.arc(centerX + point.x, centerY + point.y, size * 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const deltaTime = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)
      ctx.fillStyle = "#0A0A14"
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Draw connections
      connections.forEach((connection) => connection.draw(ctx, timestamp))

      // Draw nodes
      nodes.forEach((node) => node.draw(ctx, timestamp))

      // Draw globe in the center
      drawGlobe(ctx, dimensions.width / 2, dimensions.height / 2, timestamp)

      // Generate lightning every 2 seconds
      if (timestamp - lastLightningRef.current > 2000) {
        const randomNode1 = nodes[Math.floor(Math.random() * nodes.length)]
        const randomNode2 = nodes[Math.floor(Math.random() * nodes.length)]
        lightningBolts.push(new LightningBolt(randomNode1.x, randomNode1.y, randomNode2.x, randomNode2.y))
        lastLightningRef.current = timestamp
      }

      // Update and draw lightning
      lightningBolts = lightningBolts.filter((bolt) => {
        const isAlive = bolt.update()
        if (isAlive) bolt.draw(ctx)
        return isAlive
      })

      // Auto-trigger generation every 10 seconds if not already generating
      if (!isGenerating && timestamp - lastGenerationRef.current > 10000) {
        setIsGenerating(true)
        setProgress(0)
        lastGenerationRef.current = timestamp
      }

      // Update progress if generating
      if (isGenerating) {
        setProgress((prev) => {
          const newProgress = prev + 0.0002 * deltaTime
          if (newProgress >= 1) {
            setIsGenerating(false)
            return 1
          }
          return newProgress
        })
      }

      // Draw generation overlay
      if (isGenerating) {
        const centerX = dimensions.width / 2
        const centerY = dimensions.height / 2
        const radius = 100

        ctx.fillStyle = "rgba(10, 10, 20, 0.8)"
        ctx.fillRect(centerX - radius, centerY - 30, radius * 2, 60)

        ctx.fillStyle = "#FFF"
        ctx.font = "20px Arial"
        ctx.textAlign = "center"
        ctx.fillText(`Generating: ${Math.floor(progress * 100)}%`, centerX, centerY)

        // Progress bar
        ctx.fillStyle = "rgba(80, 80, 100, 0.5)"
        ctx.fillRect(centerX - 80, centerY + 10, 160, 4)

        ctx.fillStyle = mainColor
        ctx.fillRect(centerX - 80, centerY + 10, 160 * progress, 4)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [isGenerating, progress])

  return (
    <motion.div
      className="relative h-[500px] md:h-[600px] w-full rounded-lg overflow-hidden border bg-[#0A0A14] shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <motion.button
        className={`absolute bottom-4 right-4 flex items-center justify-center px-4 py-2 rounded-full ${
          isGenerating ? "bg-[#FF7F00]" : "bg-[#FF7F00]/20 hover:bg-[#FF7F00]/40"
        } transition-colors z-10`}
        onClick={() => {
          if (!isGenerating) {
            setIsGenerating(true)
            setProgress(0)
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Zap className="w-5 h-5 text-white mr-2" />
        <span className="text-white font-medium">{isGenerating ? "Generating..." : "Generate AI Video"}</span>
      </motion.button>
    </motion.div>
  )
}

