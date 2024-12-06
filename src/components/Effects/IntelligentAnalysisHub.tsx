'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const messages = [
  "Fraud Detection Algorithm Activated",
  "Risk Assessment: Optimal",
  "Portfolio Rebalancing in Progress",
  "Market Analysis Complete",
  "Security Protocols Verified"
]

export default function IntelligentAnalysisHub() {
  const [activeMessage, setActiveMessage] = useState(0)
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 150 + Math.cos(i * (Math.PI * 2) / 12) * 100,
    y: 120 + Math.sin(i * (Math.PI * 2) / 12) * 100,
  }))

  const centerNode = { x: 150, y: 120 }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
        {/* Central Hub */}
        <motion.circle
          cx={centerNode.x}
          cy={centerNode.y}
          r={20}
          fill="rgba(0, 255, 255, 0.2)"
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="2"
          initial={{ scale: 0.8, opacity: 0 }}
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

        {/* Outer Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Connection Line */}
            <motion.line
              x1={centerNode.x}
              y1={centerNode.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(0, 255, 255, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                pathLength: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Node Circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={6}
              fill="rgba(0, 255, 255, 0.2)"
              stroke="rgba(0, 255, 255, 0.6)"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Pulse Effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={6}
              fill="none"
              stroke="rgba(0, 255, 255, 0.4)"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 2],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </g>
        ))}

        {/* Data Flow Particles */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`particle-${index}`}
            cx={centerNode.x}
            cy={centerNode.y}
            r={2}
            fill="rgba(0, 255, 255, 0.8)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [centerNode.x, node.x, centerNode.x],
              cy: [centerNode.y, node.y, centerNode.y],
              opacity: [0, 1, 0]
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

      {/* Analysis Text */}
      <motion.div
        className="absolute inset-x-0 top-3/4 mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          key={activeMessage}
          className="text-sm font-mono text-cyan-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {messages[activeMessage]}
        </motion.p>
      </motion.div>
    </div>
  )
} 