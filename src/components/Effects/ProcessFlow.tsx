'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function ProcessFlow() {
  const pathRef = useRef<SVGPathElement>(null)
  const pathLength = useRef(0)

  useEffect(() => {
    if (pathRef.current) {
      pathLength.current = pathRef.current.getTotalLength()
    }
  }, [])

  const flowVariants = {
    initial: {
      opacity: 0,
      pathLength: 0
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  }

  const nodeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative h-96 w-96">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
      >
        {/* Background glow effect */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="rgba(0, 255, 255, 0.1)"
          strokeWidth="40"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />

        {/* Process nodes */}
        <g>
          {/* Input Node */}
          <motion.circle
            cx="100"
            cy="200"
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
          />
          <text x="100" y="240" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Input</text>

          {/* Process Node */}
          <motion.circle
            cx="200"
            cy="200"
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
          <text x="200" y="240" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Process</text>

          {/* Output Node */}
          <motion.circle
            cx="300"
            cy="200"
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          />
          <text x="300" y="240" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Output</text>
        </g>

        {/* Animated flow paths */}
        <g>
          {/* Path from Input to Process */}
          <motion.path
            ref={pathRef}
            d="M120 200 C160 200, 160 200, 180 200"
            fill="none"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={flowVariants}
            initial="initial"
            animate="animate"
          />
          
          {/* Path from Process to Output */}
          <motion.path
            d="M220 200 C260 200, 260 200, 280 200"
            fill="none"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={flowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </g>

        {/* Animated particles */}
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="rgba(0, 255, 255, 0.8)"
          animate={{
            cx: [100, 200, 300],
            cy: [200, 200, 200],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="rgba(0, 255, 255, 0.8)"
          animate={{
            cx: [100, 200, 300],
            cy: [200, 200, 200],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </svg>
    </div>
  )
} 