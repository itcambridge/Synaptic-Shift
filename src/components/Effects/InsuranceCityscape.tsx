'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ShieldCheckIcon, HomeIcon, TruckIcon, CloudIcon } from '@heroicons/react/24/outline'

const weatherData = [
  "Risk Analysis: Weather Pattern Detected",
  "Storm Probability: 28%",
  "AI Prevention Systems Active",
  "Claims Prevention Rate: 92%",
  "Smart City Monitoring Active"
]

// HEIGHT: Building heights affect overall vertical space
const buildings = [
  { x: 45, width: 30, height: 100 },  // HEIGHT: 120px tall
  { x: 80, width: 40, height: 160 },  // HEIGHT: 180px tall
  { x: 125, width: 50, height: 130 }, // HEIGHT: 150px tall
  { x: 180, width: 45, height: 180 }, // HEIGHT: 200px tall - tallest building
  { x: 230, width: 35, height: 140 }  // HEIGHT: 160px tall
]

// Car paths along the "roads"
const carPaths = [
  "M 30,340 L 270,340"  // Keep only one path for a single truck
]

export default function InsuranceCityscape() {
  const [activeData, setActiveData] = useState(0)
  const [cloudPosition, setCloudPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveData((prev) => (prev + 1) % weatherData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cloudInterval = setInterval(() => {
      setCloudPosition(prev => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(cloudInterval)
  }, [])

  return (
    <div className="relative h-96 w-96 md:mt-0 mt-20">
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

      {/* HEIGHT: Weather text position from top */}
      <motion.div
        className="absolute inset-x-0 top-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          key={activeData}
          className="text-sm font-mono text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {weatherData[activeData]}
        </motion.p>
      </motion.div>

      {/* HEIGHT: SVG viewBox height of 300 defines coordinate space */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
        {/* HEIGHT: Cloud path Y positions */}
        <motion.path
          d="M 50,50 Q 100,30 150,50 T 250,50"
          fill="none"
          stroke="rgba(0, 255, 255, 0.2)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            d: [
              "M 50,50 Q 100,30 150,50 T 250,50",    // HEIGHT: Cloud at y=50
              "M 50,50 Q 100,70 150,50 T 250,50",    // HEIGHT: Cloud moves to y=70
              "M 50,50 Q 100,30 150,50 T 250,50"     // HEIGHT: Cloud back to y=50
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
            {/* HEIGHT: Building position and height */}
            <motion.rect
              x={building.x}
              y={240 - building.height}  // HEIGHT: Buildings start at y=240 and go up by their height
              width={building.width}
              height={building.height}   // HEIGHT: Actual building height
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

            {/* HEIGHT: Window positions */}
            {Array.from({ length: Math.floor(building.height / 20) }).map((_, windowIndex) => (
              <motion.rect
                key={windowIndex}
                x={building.x + 5}
                y={220 - windowIndex * 20}  // HEIGHT: Windows start at y=220 and go up by 20px each
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

            {/* HEIGHT: Icon positions above buildings */}
            {index % 2 === 0 && (
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <foreignObject
                  x={building.x}
                  y={240 - building.height - 40}  // HEIGHT: Icons 40px above buildings
                  width={building.width}
                  height={30}
                >
                  {index === 0 && <HomeIcon className="h-8 w-8 text-cyan-300" />}
                  {index === 2 && <ShieldCheckIcon className="h-8 w-8 text-cyan-300" />}
                  {index === 4 && <CloudIcon className="h-8 w-8 text-cyan-300" />}
                </foreignObject>
              </motion.g>
            )}
          </g>
        ))}

        {/* Moving Cars with AI Detection Fields */}
        {carPaths.map((path, index) => (
          <g key={`car-${index}`}>
            {/* Car */}
            <motion.g
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
              {/* HEIGHT: Car vertical positions */}
              <foreignObject
                width={20}
                height={20}
                style={{
                  transform: `translate(${index % 2 === 0 ? '0' : '270'}px, ${238 + index * 20}px)`  // HEIGHT: Cars at y=230 and y=250
                }}
              >
                <TruckIcon className="h-5 w-5 text-cyan-300" />
              </foreignObject>
            </motion.g>

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
                path={path}  // HEIGHT: Uses carPaths y-positions (240 and 260)
              />
            </motion.circle>
          </g>
        ))}

        {/* HEIGHT: Logo position */}
        <motion.path
          d="M 150,150 L 170,130 L 130,130 Z"  // HEIGHT: Logo at y=10-150
          fill="none"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* HEIGHT: Tagline position from bottom */}
      <motion.div
        className="absolute inset-x-0 bottom-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <p className="text-sm font-semibold text-cyan-300">
          Revolutionize Insurance with Data-Driven Insights
        </p>
      </motion.div>
    </div>
  )
} 