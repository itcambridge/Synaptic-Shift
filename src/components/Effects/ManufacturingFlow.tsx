'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const insights = [
  "Production Efficiency: +35%",
  "Energy Usage Optimized",
  "Quality Control: 99.9%",
  "Downtime Reduced: -40%",
  "Cost Savings: $2.5M/Year"
]

// Machine positions for the production line
const machines = [
  { x: 30, y: 120, width: 45, height: 60 },  // Raw material intake
  { x: 95, y: 120, width: 45, height: 60 }, // Processing
  { x: 160, y: 120, width: 45, height: 60 }, // Assembly
  { x: 225, y: 120, width: 45, height: 60 }  // Final product
]

// Particle paths through the machines
const particlePath = [
  { x: 30, y: 150 },   // Start
  { x: 80, y: 150 },   // Into first machine
  { x: 145, y: 150 },  // Into second machine
  { x: 212, y: 150 },  // Into third machine
  { x: 270, y: 150 },  // Final position
]

export default function ManufacturingFlow() {
  const [activeInsight, setActiveInsight] = useState(0)
  const [efficiency, setEfficiency] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setEfficiency((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Animation content */}
      <div className="relative h-full">
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
          {/* Dashboard Display */}
          <motion.rect
            x="50"
            y="30"
            width="200"
            height="60"
            fill="rgba(0, 255, 255, 0.1)"
            stroke="rgba(0, 255, 255, 0.4)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Efficiency Graph in Dashboard */}
          <motion.path
            d="M 80,50 L 90,48 L 100,52 L 110,48 L 120,52 L 130,48 L 140,52 L 150,48 L 160,52 L 170,48 L 180,52 L 190,48 L 200,52"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            fill="none"
            animate={{
              x: [-20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Production Line Base */}
          <motion.rect
            x="30"
            y="170"
            width="240"
            height="4"
            fill="rgba(0, 255, 255, 0.3)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

          {/* Manufacturing Machines */}
          {machines.map((machine, index) => (
            <g key={index}>
              <motion.rect
                x={machine.x}
                y={machine.y}
                width={machine.width}
                height={machine.height}
                fill="rgba(0, 255, 255, 0.1)"
                stroke="rgba(0, 255, 255, 0.4)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  fill: `rgba(0, 255, 255, ${0.1 + (efficiency % 20) / 100})`
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
              {/* Machine Processing Indicators */}
              <motion.circle
                cx={machine.x + machine.width / 2}
                cy={machine.y + 15}
                r="4"
                fill="rgba(0, 255, 255, 0.8)"
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
            </g>
          ))}

          {/* Moving Particles */}
          {[0, 1, 2].map((particleIndex) => (
            <motion.circle
              key={`particle-${particleIndex}`}
              r="4"
              fill="rgba(0, 255, 255, 0.8)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: particlePath.map(p => p.x),
                y: particlePath.map(p => p.y),
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: particleIndex * 1.3,
                times: [0, 0.2, 0.8, 1]
              }}
            />
          ))}

          {/* Connection Lines */}
          {machines.slice(0, -1).map((machine, index) => (
            <motion.line
              key={`connection-${index}`}
              x1={machine.x + machine.width}
              y1={machine.y + machine.height / 2}
              x2={machines[index + 1].x}
              y2={machines[index + 1].y + machines[index + 1].height / 2}
              stroke="rgba(0, 255, 255, 0.3)"
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            />
          ))}
        </svg>

        {/* Insights Text */}
        <motion.div
          className="absolute bottom-8 inset-x-0 text-center"
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
    </div>
  )
} 