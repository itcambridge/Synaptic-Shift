'use client'

import { motion } from 'framer-motion'

// Simplified EKG path data
const ekgPath = "M 0,50 L 40,50 L 45,20 L 50,80 L 55,50 L 100,50"

export default function HealthcareNetwork() {
  // Reduced number of connection points
  const connections = [
    { x1: 150, y1: 150, x2: 250, y2: 150, delay: 0 },
    { x1: 250, y1: 150, x2: 250, y2: 250, delay: 0.3 },
    { x1: 250, y1: 250, x2: 150, y2: 250, delay: 0.6 }
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
        {/* Main EKG Line */}
        <motion.path
          d={ekgPath}
          fill="none"
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          transform="translate(100, 150) scale(1.5)"
        />

        {/* Heart Symbol */}
        <motion.path
          d="M 200,150 C 180,130 150,130 150,160 C 150,180 180,200 200,220 C 220,200 250,180 250,160 C 250,130 220,130 200,150"
          fill="none"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Network Connections */}
        {connections.map((conn, i) => (
          <motion.path
            key={i}
            d={`M ${conn.x1} ${conn.y1} L ${conn.x2} ${conn.y2}`}
            stroke="rgba(0, 255, 255, 0.4)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 2,
              delay: conn.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Pulse Ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="60"
          fill="none"
          stroke="rgba(0, 255, 255, 0.2)"
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.4, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </svg>
    </div>
  )
} 