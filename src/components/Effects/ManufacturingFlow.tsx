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
  { x: 30, y: 220, width: 45, height: 60 },  // Raw material intake
  { x: 95, y: 220, width: 45, height: 60 }, // Processing
  { x: 160, y: 220, width: 45, height: 60 }, // Assembly
  { x: 225, y: 220, width: 45, height: 60 }  // Final product
]

// Particle paths through the machines
const particlePath = [
  { x: 60, y: 180 },   // Start
  { x: 80, y: 180 },   // Into first machine
  { x: 145, y: 180 },  // Into second machine
  { x: 212, y: 180 },  // Into third machine
  { x: 270, y: 180 },  // Final position
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

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 350">
          {/* Dashboard Display */}
          <motion.rect
            x="50"
            y="80"
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
            d="M 80,102 L 90,104 L 100,102 L 110,98 L 120,104 L 130,100 L 140,102 L 150,100 L 160,102 L 170,100 L 180,100 L 190,98 L 200,96"
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
            y="190"
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
          className="absolute top-32 inset-x-0 text-center"
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