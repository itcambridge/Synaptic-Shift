'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const insights = [
  "AI Risk Analysis Active",
  "Weather Prediction: Optimal",
  "Smart City Monitoring",
  "Accident Prevention: 98%",
  "Revolutionizing Insurance with AI"
]

// Building definitions with different heights
const buildings = [
  { x: 40, width: 30, height: 120 },
  { x: 80, width: 40, height: 180 },
  { x: 130, width: 50, height: 150 },
  { x: 190, width: 45, height: 200 },
  { x: 245, width: 35, height: 160 }
]

// Car paths along the "road"
const carPaths = [
  "M 30,240 L 270,240",
  "M 270,260 L 30,260"
]

export default function InsuranceInnovation() {
  const [activeInsight, setActiveInsight] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-animation-md w-animation-md sm:h-animation-lg sm:w-animation-lg mx-auto">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 z-animation-bg"
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

      <svg 
        className="absolute inset-0 h-full w-full" 
        viewBox="0 0 300 300" 
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sky Background with moving clouds */}
        <motion.path
          d="M 50,50 Q 100,30 150,50 T 250,50"
          fill="none"
          stroke="rgba(0, 255, 255, 0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            d: [
              "M 50,50 Q 100,30 150,50 T 250,50",
              "M 50,50 Q 100,70 150,50 T 250,50",
              "M 50,50 Q 100,30 150,50 T 250,50"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Buildings with glowing windows */}
        {buildings.map((building, index) => (
          <g key={index}>
            {/* Building Structure */}
            <motion.rect
              x={building.x}
              y={300 - building.height}
              width={building.width}
              height={building.height}
              fill="rgba(0, 255, 255, 0.1)"
              stroke="rgba(0, 255, 255, 0.3)"
              strokeWidth="1"
              initial={{ height: 0 }}
              animate={{ height: building.height }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                ease: "easeOut"
              }}
            />

            {/* Glowing Windows */}
            {Array.from({ length: Math.floor(building.height / 20) }).map((_, windowIndex) => (
              <motion.rect
                key={windowIndex}
                x={building.x + 5}
                y={280 - windowIndex * 20}
                width={building.width - 10}
                height={10}
                fill="rgba(0, 255, 255, 0.2)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </g>
        ))}

        {/* Moving Cars with AI Detection Fields */}
        {carPaths.map((path, index) => (
          <g key={`car-${index}`}>
            {/* Car */}
            <motion.circle
              r={4}
              fill="rgba(0, 255, 255, 0.8)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                translateX: index % 2 === 0 ? [0, 270] : [270, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={path}
              />
            </motion.circle>

            {/* AI Detection Field */}
            <motion.circle
              r={12}
              fill="none"
              stroke="rgba(0, 255, 255, 0.2)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={path}
              />
            </motion.circle>
          </g>
        ))}

        {/* Data Streams */}
        {buildings.map((_, index) => (
          <motion.circle
            key={`data-${index}`}
            r={2}
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cy: [50, 250],
              cx: 150 + Math.sin(index * Math.PI / 3) * 50
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Insights Text */}
      <motion.div
        className="absolute inset-x-0 bottom-animation-sm sm:bottom-animation-md text-center"
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