'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const energyUpdates = [
  "Energy Redirection to High Demand Zones",
  "Battery Backup Engaged",
  "Peak Load Balancing Active",
  "Renewable Sources Optimized"
]

const buildingHeights = [60, 80, 100, 70, 90, 75, 85, 95]

export default function EnergyDistribution() {
  const [activeUpdate, setActiveUpdate] = useState(0)
  const [energyFlow, setEnergyFlow] = useState(0)
  const [savings, setSavings] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUpdate((prev) => (prev + 1) % energyUpdates.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyFlow((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings((prev) => {
        const target = 1000000
        const increment = target / 100
        return prev >= target ? 0 : prev + increment
      })
    }, 50)
    return () => clearInterval(interval)
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
        {/* Power Grid */}
        <motion.circle
          cx="150"
          cy="40"
          r="20"
          fill="rgba(0, 255, 255, 0.1)"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* City Buildings */}
        {buildingHeights.map((height, i) => (
          <g key={`building-${i}`}>
            <motion.rect
              x={70 + i * 20}
              y={220 - height}
              width="15"
              height={height}
              fill="rgba(0, 255, 255, 0.1)"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1,
                height: height,
                fill: `rgba(0, 255, 255, ${0.1 + (energyFlow % 20) / 100})`
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: i * 0.1
              }}
            />
            {/* Building Windows */}
            {Array.from({ length: Math.floor(height / 20) }).map((_, j) => (
              <motion.rect
                key={`window-${i}-${j}`}
                x={73 + i * 20}
                y={210 - (j * 20)}
                width="9"
                height="3"
                fill="rgba(0, 255, 255, 0.3)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i + j) * 0.2
                }}
              />
            ))}
          </g>
        ))}

        {/* Energy Distribution Lines */}
        {buildingHeights.map((_, i) => (
          <motion.path
            key={`energy-line-${i}`}
            d={`M 150,60 Q ${110 + i * 20},150 ${77.5 + i * 20},${220 - buildingHeights[i]}`}
            stroke="rgba(0, 255, 255, 0.4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Central Holographic Display */}
        <motion.rect
          x="90"
          y="60"
          width="120"
          height="50"
          fill="rgba(0, 255, 255, 0.1)"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Savings Display */}
        <motion.text
          x="100"
          y="85"
          fill="rgba(0, 255, 255, 0.8)"
          fontSize="8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Energy Cost Savings:
        </motion.text>
        <motion.text
          x="100"
          y="97"
          fill="rgba(0, 255, 255, 1)"
          fontSize="10"
          fontWeight="bold"
        >
          ${Math.floor(savings).toLocaleString()}/Month
        </motion.text>

        {/* AI Updates */}
        <motion.text
          key={activeUpdate}
          x="150"
          y="125"
          fill="rgba(0, 255, 255, 0.8)"
          fontSize="8"
          textAnchor="middle"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5 }}
        >
          {energyUpdates[activeUpdate]}
        </motion.text>

        {/* Status Text - Moved inside SVG above buildings */}
        <motion.text
          x="150"
          y="250"
          fill="rgba(0, 255, 255, 0.8)"
          fontSize="12"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Smart Grid Management
        </motion.text>
      </svg>
    </div>
  )
} 