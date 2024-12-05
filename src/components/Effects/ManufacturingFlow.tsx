'use client'

import { motion } from 'framer-motion'

export default function ManufacturingFlow() {
  // Adjusted production line path to be more centered
  const productionPath = "M 50,190 L 150,190 L 150,190 L 250,190 L 250,190 L 350,190"

  // Generate particles for the production flow
  const particles = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    delay: i * 1
  }))

  // Data insight points
  const dataPoints = [
    { x: 150, y: 120, text: "Efficiency +40%", delay: 0 },
    { x: 250, y: 100, text: "Quality 99.9%", delay: 0.3 },
    { x: 350, y: 130, text: "Output +25%", delay: 0.6 }
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
        {/* Production Line Base */}
        <motion.path
          d={productionPath}
          stroke="rgba(0, 255, 255, 0.4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Machine Nodes */}
        {[150, 250, 350].map((x, i) => (
          <g key={i}>
            <motion.rect
              x={x - 20}
              y={160}
              width="40"
              height="60"
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
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.rect
              x={x - 15}
              y={165}
              width="30"
              height="50"
              fill="rgba(0, 255, 255, 0.1)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}

        {/* Moving Products */}
        {[0, 1, 2].map((index) => (
          <motion.circle
            key={index}
            cx="0"
            cy="0"
            r="4"
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4],
              offsetDistance: ["0%", "100%"]
            }}
            style={{
              offsetPath: `path("${productionPath}")`,
              offsetRotate: "auto"
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2
            }}
          />
        ))}

        {/* Data Insights */}
        {dataPoints.map((point, i) => (
          <g key={i}>
            <motion.line
              x1={point.x}
              y1={point.y + 20}
              x2={point.x}
              y2={160}
              stroke="rgba(0, 255, 255, 0.2)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.rect
              x={point.x - 40}
              y={point.y - 15}
              width="80"
              height="30"
              rx="5"
              fill="rgba(0, 255, 255, 0.1)"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: [0.6, 1, 0.6],
                y: [point.y - 20, point.y - 15, point.y - 20]
              }}
              transition={{
                duration: 3,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.text
              x={point.x}
              y={point.y}
              fontSize="10"
              fill="rgba(0, 255, 255, 0.8)"
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 3,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {point.text}
            </motion.text>
          </g>
        ))}

        {/* Glow Effects */}
        {[150, 250, 350].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={190}
            r="30"
            fill="none"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.5],
              opacity: [0.3, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
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
          Production Line Optimization
        </motion.p>
      </motion.div>
    </div>
  )
} 