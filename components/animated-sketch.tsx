"use client"

import { useEffect, useRef } from "react"

interface AnimatedSketchProps {
  className?: string
}

export default function AnimatedSketch({ className = "" }: AnimatedSketchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Sketch parameters
    const lines: { x: number; y: number; length: number; angle: number; speed: number }[] = []
    const lineCount = 20

    // Create random lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 20 + Math.random() * 50,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.8,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw lines
      lines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        const endX = line.x + Math.cos(line.angle) * line.length
        const endY = line.y + Math.sin(line.angle) * line.length
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
        ctx.lineWidth = 1 + Math.random() * 2
        ctx.stroke()

        // Update line position
        line.angle += line.speed * 0.01
        line.x += Math.cos(line.angle) * 0.5
        line.y += Math.sin(line.angle) * 0.5

        // Keep lines within canvas
        if (line.x < 0) line.x = canvas.width
        if (line.x > canvas.width) line.x = 0
        if (line.y < 0) line.y = canvas.height
        if (line.y > canvas.height) line.y = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full absolute top-0 left-0 z-0 ${className}`} />
}
