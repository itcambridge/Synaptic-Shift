'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BaseIndustryAnimation from './BaseIndustryAnimation'

const energyUpdates = [
  "Energy Redirection to High Demand Zones",
  "Battery Backup Engaged",
  "Peak Load Balancing Active",
  "Renewable Sources Optimized"
]

// HEIGHT: Building heights define how tall each building appears
// Taller buildings = more vertical space used
const buildingHeights = [120, 160, 200, 140, 180, 150, 170, 190]

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
    <BaseIndustryAnimation>
      {/* HEIGHT: Main container height - controls overall animation size */}
      <div className="relative h-[400px] w-[600px]">
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

        {/* HEIGHT: SVG viewBox height (800) defines coordinate space for all elements */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600">
          {/* HEIGHT: Power Grid circle position (cy=200) affects vertical layout */}
          <motion.circle
            cx="300"
            cy="160"
            r="40"
            fill="rgba(0, 255, 255, 0.1)"
            stroke="rgba(0, 255, 255, 0.6)"
            strokeWidth="2"
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

          {/* HEIGHT: Buildings and their positions affect bottom section height */}
          {buildingHeights.map((height, i) => (
            <g key={`building-${i}`}>
              {/* HEIGHT: Building rectangle - y=500-height determines where building starts */}
              <motion.rect
                x={140 + i * 40}
                y={500 - height} // HEIGHT: Buildings are positioned from bottom (500) minus their height
                width="30"
                height={height} // HEIGHT: Actual building height
                fill="rgba(0, 255, 255, 0.1)"
                stroke="rgba(0, 255, 255, 0.4)"
                strokeWidth="2"
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
              {/* HEIGHT: Windows are spaced vertically every 40px */}
              {Array.from({ length: Math.floor(height / 40) }).map((_, j) => (
                <motion.rect
                  key={`window-${i}-${j}`}
                  x={146 + i * 40}
                  y={480 - (j * 40)} // HEIGHT: Windows start at y=480 and go up by 40px each
                  width="18"
                  height="6"
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

          {/* HEIGHT: Energy lines - path coordinates affect vertical space */}
          {buildingHeights.map((_, i) => (
            <motion.path
              key={`energy-line-${i}`}
              d={`M 300,200 Q ${220 + i * 40},350 ${155 + i * 40},${500 - buildingHeights[i]}`} // HEIGHT: Lines connect from y=230 to buildings
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
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

          {/* HEIGHT: Holographic display position (y=260) and height (100) */}
          <motion.rect
            x="140"
            y="200"
            width="320"
            height="90"
            fill="rgba(0, 255, 255, 0.1)"
            stroke="rgba(0, 255, 255, 0.6)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* HEIGHT: Text positions affect vertical layout */}
          {/* Savings text at y=310 and y=235 */}
          <motion.text
            x="200"
            y="90"
            fill="rgba(0, 255, 255, 0.8)"
            fontSize="16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Energy Cost Savings:
          </motion.text>
          <motion.text
            x="220"
            y="265"
            fill="rgba(0, 255, 255, 1)"
            fontSize="20"
            fontWeight="bold"
          >
            ${Math.floor(savings).toLocaleString()}/Month
          </motion.text>

          {/* HEIGHT: AI Updates text position (y=390) */}
          <motion.text
            key={activeUpdate}
            x="300"
            y="230"
            fill="rgba(0, 255, 255, 0.8)"
            fontSize="16"
            textAnchor="middle"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
          >
            {energyUpdates[activeUpdate]}
          </motion.text>

          {/* HEIGHT: Status text at bottom (y=550) */}
          <motion.text
            x="300"
            y="550"
            fill="rgba(0, 255, 255, 0.8)"
            fontSize="24"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Smart Grid Management
          </motion.text>
        </svg>
      </div>
    </BaseIndustryAnimation>
  )
} 