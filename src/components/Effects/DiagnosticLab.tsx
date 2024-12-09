'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Array of text messages that will cycle through in the animation
const insights = [
  "Genetic Risk Analysis: Complete",
  "AI Diagnosis Accuracy: +40%",
  "Recommended Tests: Processing",
  "Treatment Plan: Optimizing",
  "Patient Data: Analyzing"
]

// Function to create points for the DNA helix structure
// count: number of points to generate (more points = more detailed helix)
const generateDNAPoints = (count: number) => {
  const points = []
  for (let i = 0; i < count; i++) {
    // Calculate angle for current point (4 * PI = 2 full rotations)
    const angle = (i / count) * Math.PI * 4
    // Calculate x position using sine wave (creates the spiral effect)
    const x = Math.sin(angle) * 40 // 40 = radius of the helix
    // Calculate y position (vertical spacing of points)
    const y = (i / count) * 200 - 100 // Spreads points over 200px, centered at -100
    // Store point coordinates
    points.push({
      x1: x + 150,     // Left side of DNA strand (150 = center point)
      y: y + 120,      // Vertical position (120 = vertical center)
      x2: -x + 150,    // Right side of DNA strand (mirrored)
      angle            // Store angle for potential rotation effects
    })
  }
  return points
}

// Generate 20 points for the DNA helix
const dnaPoints = generateDNAPoints(20)

export default function DiagnosticLab() {
  // State for cycling through insight messages
  const [activeInsight, setActiveInsight] = useState(0)
  // State for DNA rotation animation
  const [rotation, setRotation] = useState(0)

  // Effect to cycle through insight messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Effect to rotate the DNA helix continuously
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360) // Increment rotation by 1 degree
    }, 50) // Update every 50ms for smooth animation
    return () => clearInterval(rotationInterval)
  }, [])

  return (
    // Main container with fixed dimensions
    <div className="relative h-96 w-96">
      {/* Cyan background glow effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1] }} // Pulsing opacity animation
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />

      {/* SVG container for all animated elements */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
        {/* DNA Helix group with 3D rotation */}
        <g style={{ transform: `rotateY(${rotation}deg)`, transformOrigin: 'center' }}>
          {/* Map through DNA points to create the double helix structure */}
          {dnaPoints.map((point, index) => (
            <g key={index}>
              {/* Horizontal connecting lines between DNA strands */}
              <motion.line
                x1={point.x1}
                y1={point.y}
                x2={point.x2}
                y2={point.y}
                stroke="rgba(0, 255, 255, 0.6)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4] // Pulsing opacity
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1 // Staggered animation
                }}
              />

              {/* Left DNA strand connection points */}
              <motion.circle
                cx={point.x1}
                cy={point.y}
                r="3"
                fill="rgba(0, 255, 255, 0.8)"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],   // Pulsing scale
                  opacity: [0.5, 1, 0.5]     // Pulsing opacity
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1
                }}
              />
              {/* Right DNA strand connection points */}
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

        {/* Diagnostic Graph - Line chart showing progress */}
        <motion.path
          d="M 50,200 L 100,150 L 150,130 L 200,90 L 250,70" // Path coordinates for graph line
          fill="none"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }} // Animate line drawing
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
        />

        {/* Graph data points */}
        {[
          { x: 50, y: 200 },  // Starting point
          { x: 100, y: 150 }, // Second point
          { x: 150, y: 130 }, // Middle point
          { x: 200, y: 90 }, // Fourth point
          { x: 250, y: 70 }  // End point
        ].map((point, index) => (
          <motion.circle
            key={`graph-${index}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ scale: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],   // Pulsing scale
              opacity: [0.5, 1, 0.5]     // Pulsing opacity
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2         // Staggered animation
            }}
          />
        ))}

        {/* Accuracy percentage indicator */}
        <motion.text
          x="200"
          y="150"
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
          
        </motion.text>
      </svg>

      {/* Insights text display at bottom */}
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
          animate={{ opacity: 1, y: 0 }}     // Fade in and move up
          exit={{ opacity: 0, y: -20 }}      // Fade out and move up
          transition={{ duration: 0.5 }}
        >
          {insights[activeInsight]}
        </motion.p>
      </motion.div>
    </div>
  )
} 