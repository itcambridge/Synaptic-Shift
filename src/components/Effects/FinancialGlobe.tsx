'use client'

import { motion } from 'framer-motion'

const generateNodes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    radius: Math.random() * 120 + 60, // Distance from center
    angle: (Math.PI * 2 * i) / count, // Initial angle
    speed: Math.random() * 0.0002 + 0.0001, // Rotation speed
    size: Math.random() * 4 + 2,
    pulseDelay: Math.random() * 2
  }))
}

const generateConnections = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    startAngle: (Math.PI * 2 * i) / count,
    endAngle: (Math.PI * 2 * (i + Math.floor(count / 3))) / count,
    radius: Math.random() * 100 + 40,
    speed: Math.random() * 0.0003 + 0.0001
  }))
}

export default function FinancialGlobe() {
  const nodes = generateNodes(20)
  const connections = generateConnections(15)
  const ripples = Array.from({ length: 3 }, (_, i) => i)

  return (
    <div className="relative h-96 w-96">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Globe outline */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <motion.circle
            key={ripple}
            cx="200"
            cy="200"
            r="0"
            fill="none"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="1"
            initial={{ r: 0, opacity: 0.8 }}
            animate={{
              r: [0, 180],
              opacity: [0.8, 0],
              strokeWidth: [2, 0.5]
            }}
            transition={{
              duration: 4,
              delay: ripple * 1.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Globe circles */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="30"
            fill="none"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="30"
            fill="none"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="1"
            transform="rotate(60 200 200)"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="30"
            fill="none"
            stroke="rgba(0, 255, 255, 0.1)"
            strokeWidth="1"
            transform="rotate(-60 200 200)"
          />
        </motion.g>

        {/* Nodes */}
        {nodes.map((node) => {
          const x = 200 + Math.cos(node.angle) * node.radius
          const y = 200 + Math.sin(node.angle) * node.radius * 0.25

          return (
            <motion.g key={node.id}>
              <motion.circle
                cx={x}
                cy={y}
                r={node.size}
                fill="rgba(0, 255, 255, 0.6)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  delay: node.pulseDelay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'blur(1px)',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                }}
              />
              <motion.circle
                cx={x}
                cy={y}
                r={node.size * 2}
                fill="none"
                stroke="rgba(0, 255, 255, 0.2)"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: [0.5, 1.5],
                  opacity: [0.5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: node.pulseDelay,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.g>
          )
        })}

        {/* Connections */}
        {connections.map((connection) => {
          const startX = 200 + Math.cos(connection.startAngle) * connection.radius
          const startY = 200 + Math.sin(connection.startAngle) * connection.radius * 0.25
          const endX = 200 + Math.cos(connection.endAngle) * connection.radius
          const endY = 200 + Math.sin(connection.endAngle) * connection.radius * 0.25
          const midX = (startX + endX) / 2
          const midY = ((startY + endY) / 2) - 20

          return (
            <motion.path
              key={connection.id}
              d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
              fill="none"
              stroke="rgba(0, 255, 255, 0.3)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )
        })}
      </svg>
    </div>
  )
} 