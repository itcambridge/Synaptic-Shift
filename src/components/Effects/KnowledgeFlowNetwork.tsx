'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export default function KnowledgeFlowNetwork() {
  const [points, setPoints] = useState<Point[]>([])
  const [activeText, setActiveText] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    // Initialize points
    const initialPoints: Point[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      connections: []
    }))
    setPoints(initialPoints)

    // Alternate texts
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % 2)
    }, 4000)

    return () => {
      clearInterval(interval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      const updatedPoints = points.map(point => {
        // Update position
        let x = point.x + point.vx
        let y = point.y + point.vy

        // Bounce off edges
        if (x < 0 || x > canvas.width) point.vx *= -1
        if (y < 0 || y > canvas.height) point.vy *= -1

        // Keep point in bounds
        x = Math.max(0, Math.min(canvas.width, x))
        y = Math.max(0, Math.min(canvas.height, y))

        return { ...point, x, y }
      })

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 1

      updatedPoints.forEach((point, i) => {
        updatedPoints.forEach((otherPoint, j) => {
          if (i === j) return

          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
          }
        })
      })

      // Draw points
      updatedPoints.forEach(point => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8)
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)')
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      setPoints(updatedPoints)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [points])

  return (
    <div className="relative h-[600px] w-[600px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      
      {/* Text Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: activeText === 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <p className="text-xl text-cyan-300/80">Stay ahead with</p>
        <p className="text-2xl font-bold text-cyan-300">insights that matter...</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: activeText === 1 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <p className="max-w-md text-lg text-cyan-300/80">
          Be the first to know about AI trends, innovations, and opportunities
        </p>
      </motion.div>
    </div>
  )
} 