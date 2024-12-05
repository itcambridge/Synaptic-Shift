'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const inventoryItems = [
  "Smart Watch: 85% in stock",
  "Headphones: 92% in stock",
  "Tablets: 78% in stock",
  "Laptops: 64% in stock"
]

const personalizedDeals = [
  "30% off Smart Home Devices",
  "Buy 1 Get 1 on Accessories",
  "Special Bundle Offers",
  "Member Exclusive Deals"
]

export default function RetailEngagement() {
  const [activeInventory, setActiveInventory] = useState(0)
  const [activeDeal, setActiveDeal] = useState(0)
  const [dataFlowProgress, setDataFlowProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInventory((prev) => (prev + 1) % inventoryItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDeal((prev) => (prev + 1) % personalizedDeals.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlowProgress((prev) => (prev + 1) % 100)
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
        {/* Store Layout - Floor */}
        <motion.rect
          x="50"
          y="50"
          width="200"
          height="200"
          fill="none"
          stroke="rgba(0, 255, 255, 0.3)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Smart Shelves */}
        {Array.from({ length: 3 }).map((_, i) => (
          <g key={`shelf-${i}`}>
            <motion.rect
              x="60"
              y={80 + i * 50}
              width="80"
              height="20"
              fill="rgba(0, 255, 255, 0.1)"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
            {/* Shelf Display */}
            <motion.text
              x="65"
              y={93 + i * 50}
              fill="rgba(0, 255, 255, 0.8)"
              fontSize="6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {inventoryItems[activeInventory]}
            </motion.text>
          </g>
        ))}

        {/* Digital Kiosks */}
        {Array.from({ length: 2 }).map((_, i) => (
          <g key={`kiosk-${i}`}>
            <motion.rect
              x={170}
              y={80 + i * 80}
              width="30"
              height="40"
              fill="rgba(0, 255, 255, 0.15)"
              stroke="rgba(0, 255, 255, 0.6)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
            {/* Kiosk Screen */}
            <motion.text
              x={175}
              y={100 + i * 80}
              fill="rgba(0, 255, 255, 0.8)"
              fontSize="6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {personalizedDeals[activeDeal]}
            </motion.text>
          </g>
        ))}

        {/* Holographic Assistant */}
        <motion.circle
          cx="220"
          cy="150"
          r="15"
          fill="none"
          stroke="rgba(0, 255, 255, 0.4)"
          strokeWidth="1"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1, 0.8],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 220,140 L 220,160 M 210,150 L 230,150"
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Data Streams */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={`stream-${i}`}
            d={`M ${60 + i * 40},${80 + (i % 3) * 50} C ${120 + i * 20},${150} ${180},${150} ${250},${150}`}
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

        {/* Analytics Dashboard */}
        <motion.rect
          x="220"
          y="200"
          width="60"
          height="40"
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
        
        {/* Dashboard Data Visualization */}
        <motion.path
          d={`M 225,230 Q ${225 + dataFlowProgress * 0.5},${230 - dataFlowProgress * 0.2} ${275},220`}
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Status Text */}
      <motion.div
        className="absolute inset-x-0 bottom-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-sm font-mono text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real-time Store Analytics
        </motion.p>
      </motion.div>
    </div>
  )
} 