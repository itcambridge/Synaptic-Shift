'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const insights = [
  "Genetic Risk Analysis: Complete",
  "AI Diagnosis Accuracy: +40%",
  "Recommended Tests: Processing",
  "Treatment Plan: Optimizing",
  "Patient Data: Analyzing"
]

// Generate DNA helix points
const generateDNAPoints = (count: number) => {
  const points = []
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 4 // 2 full rotations
    const x = Math.sin(angle) * 40
    const y = (i / count) * 200 - 100 // Vertical position
    points.push({
      x1: x + 150,
      y: y + 120,
      x2: -x + 150,
      angle
    })
  }
  return points
}

const dnaPoints = generateDNAPoints(20)

export default function DiagnosticLab() {
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
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
        {/* DNA Helix */}
        <g style={{ transform: `rotateY(${rotation}deg)`, transformOrigin: 'center' }}>
          {dnaPoints.map((point, index) => (
            <g key={index}>
              {/* DNA Strands */}
              <motion.line
                x1={point.x1}
                y1={point.y}
                x2={point.x2}
                y2={point.y}
                stroke="rgba(0, 255, 255, 0.6)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />

              {/* Connection Points */}
              <motion.circle
                cx={point.x1}
                cy={point.y}
                r="3"
                fill="rgba(0, 255, 255, 0.8)"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />
              <motion.circle
                cx={point.x2}
                cy={point.y}
                r="3"
                fill="rgba(0, 255, 255, 0.8)"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />
            </g>
          ))}
        </g>

        {/* Diagnostic Graph */}
        <motion.path
          d="M 50,250 L 100,200 L 150,180 L 200,140 L 250,120"
          fill="none"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
        />

        {/* Graph Points */}
        {[
          { x: 50, y: 250 },
          { x: 100, y: 200 },
          { x: 150, y: 180 },
          { x: 200, y: 140 },
          { x: 250, y: 120 }
        ].map((point, index) => (
          <motion.circle
            key={`graph-${index}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ scale: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        ))}

        {/* Accuracy Indicator */}
        <motion.text
          x="260"
          y="120"
          fill="rgba(0, 255, 255, 0.8)"
          fontSize="12"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          +40%
        </motion.text>
      </svg>

      {/* Insights Text */}
      <motion.div
        className="absolute inset-x-0 top-3/4 mt-8 text-center"
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