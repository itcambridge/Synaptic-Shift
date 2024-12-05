'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const insights = [
  "Market Trends Analysis",
  "Risk Factors Evaluation",
  "AI-Driven Insights",
  "Portfolio Optimization",
  "Global Market Intelligence"
]

// Generate points on a sphere
const generateSpherePoints = (count: number, radius: number) => {
  const points = []
  const phi = Math.PI * (3 - Math.sqrt(5)) // golden angle
  
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2 // y goes from 1 to -1
    const r = Math.sqrt(1 - y * y) // radius at y
    const theta = phi * i // golden angle increment

    const x = Math.cos(theta) * r
    const z = Math.sin(theta) * r

    points.push({
      x: x * radius + 150, // Center at 150
      y: y * radius + 150,
      z: z * radius
    })
  }
  return points
}

const dataPoints = generateSpherePoints(50, 80)
const connectionPoints = generateSpherePoints(8, 100)

export default function FinancialUniverse() {
  const [activeInsight, setActiveInsight] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(rotationInterval)
  }, [])

  return (
    <div className="relative h-96 w-96">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
        {/* Central Orb Glow */}
        <motion.circle
          cx="150"
          cy="150"
          r="85"
          fill="url(#glowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Data Points */}
        {dataPoints.map((point, index) => {
          const rotatedX = 150 + (point.x - 150) * Math.cos(rotation * Math.PI / 180) - (point.z) * Math.sin(rotation * Math.PI / 180)
          const rotatedZ = (point.x - 150) * Math.sin(rotation * Math.PI / 180) + (point.z) * Math.cos(rotation * Math.PI / 180)
          const scale = (rotatedZ + 100) / 200 // Scale based on Z position

          return (
            <motion.circle
              key={index}
              cx={rotatedX}
              cy={point.y}
              r={2 * scale}
              fill="rgba(0, 255, 255, 0.8)"
              initial={{ opacity: 0 }}
              animate={{ opacity: scale }}
              transition={{ duration: 0.1 }}
            />
          )
        })}

        {/* Connection Lines */}
        {connectionPoints.map((point, index) => {
          const rotatedX = 150 + (point.x - 150) * Math.cos(rotation * Math.PI / 180) - (point.z) * Math.sin(rotation * Math.PI / 180)
          const rotatedZ = (point.x - 150) * Math.sin(rotation * Math.PI / 180) + (point.z) * Math.cos(rotation * Math.PI / 180)
          const scale = (rotatedZ + 100) / 200

          return (
            <g key={`connection-${index}`}>
              <motion.line
                x1="150"
                y1="150"
                x2={rotatedX}
                y2={point.y}
                stroke="rgba(0, 255, 255, 0.6)"
                strokeWidth={scale}
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0.4 * scale, 0.8 * scale, 0.4 * scale]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx={rotatedX}
                cy={point.y}
                r={4 * scale}
                fill="rgba(0, 255, 255, 0.6)"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5 * scale, 0.9 * scale, 0.5 * scale]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </g>
          )
        })}

        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Insights Text */}
      <motion.div
        className="absolute inset-x-0 top-1/2 mt-40 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          key={activeInsight}
          className="text-sm font-mono text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {insights[activeInsight]}
        </motion.p>
      </motion.div>
    </div>
  )
} 