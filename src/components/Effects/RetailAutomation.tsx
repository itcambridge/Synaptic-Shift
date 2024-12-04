'use client'

import { motion } from 'framer-motion'

// Shelf coordinates
const shelves = [
  { x: 50, y: 100, label: "Electronics" },
  { x: 50, y: 200, label: "Fashion" },
  { x: 50, y: 300, label: "Home" }
]

// Robot arm path
const robotPath = "M 150,200 C 200,200 200,100 250,100 C 300,100 300,300 350,300"

export default function RetailAutomation() {
  // Generate inventory items
  const inventoryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    shelf: Math.floor(i / 2)
  }))

  // Data metrics
  const metrics = [
    { x: 300, y: 80, text: "Stock 98%", trend: "+2%" },
    { x: 300, y: 140, text: "Demand ↑", trend: "15%" },
    { x: 300, y: 200, text: "Delivery 24h", trend: "-30min" }
  ]

  return (
    <div className="relative h-96 w-96">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        {/* Warehouse Shelves */}
        {shelves.map((shelf, i) => (
          <g key={i}>
            {/* Shelf Structure */}
            <motion.rect
              x={shelf.x}
              y={shelf.y - 20}
              width="80"
              height="40"
              fill="none"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                strokeWidth: [2, 3, 2]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Shelf Label */}
            <motion.text
              x={shelf.x + 40}
              y={shelf.y + 30}
              fontSize="10"
              fill="rgba(0, 255, 255, 0.6)"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {shelf.label}
            </motion.text>
          </g>
        ))}

        {/* Robot Arm Track */}
        <path
          d={robotPath}
          stroke="rgba(0, 255, 255, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />

        {/* Moving Robot */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d="M -15,-15 L 15,-15 L 15,15 L -15,15 Z"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.6)"
            strokeWidth="2"
          >
            <motion.animateMotion
              path={robotPath}
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </motion.path>
        </motion.g>

        {/* Inventory Items */}
        {inventoryItems.map((item) => (
          <motion.circle
            key={item.id}
            r="4"
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5]
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.animateMotion
              path={`M ${shelves[item.shelf].x + 40},${shelves[item.shelf].y} L ${shelves[item.shelf].x + 120},${shelves[item.shelf].y}`}
              dur="4s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </motion.circle>
        ))}

        {/* Data Metrics */}
        {metrics.map((metric, i) => (
          <g key={i}>
            {/* Metric Box */}
            <motion.rect
              x={metric.x - 40}
              y={metric.y - 15}
              width="80"
              height="30"
              rx="5"
              fill="rgba(0, 255, 255, 0.1)"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Metric Text */}
            <motion.text
              x={metric.x}
              y={metric.y}
              fontSize="10"
              fill="rgba(0, 255, 255, 0.8)"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {metric.text}
            </motion.text>
            {/* Trend Indicator */}
            <motion.text
              x={metric.x + 45}
              y={metric.y}
              fontSize="8"
              fill="rgba(0, 255, 255, 0.6)"
              textAnchor="end"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {metric.trend}
            </motion.text>
          </g>
        ))}

        {/* Data Flow Lines */}
        {shelves.map((shelf, i) => (
          <motion.path
            key={i}
            d={`M ${shelf.x + 80},${shelf.y} Q ${200},${shelf.y} ${300},${80 + i * 60}`}
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="4,4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  )
} 