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
    initial: { opacity: 0 },
    animate: { 
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
      {/* Main SVG viewBox - adjust 400 height to change overall scaling */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
      >
        {/* Background glow effect - adjust cy="200" to move up/down */}
        <motion.circle
          cx="250"
          cy="300" // Vertical position of the glow circle
          r="180"
          fill="none"
          stroke="rgba(0, 255, 255, 0.1)"
          strokeWidth="40"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />

        {/* Process nodes - adjust all cy values to move nodes up/down */}
        <g>
          {/* Input Node - adjust cy="200" and y="240" together to move up/down */}
          <motion.circle
            cx="150"
            cy="300" // Vertical position of input node
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
          />
          <text x="150" y="340" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Input</text>

          {/* Process Node - adjust cy="200" and y="240" together to move up/down */}
          <motion.circle
            cx="250"
            cy="300" // Vertical position of process node
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
          <text x="250" y="340" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Process</text>

          {/* Output Node - adjust cy="200" and y="240" together to move up/down */}
          <motion.circle
            cx="350"
            cy="300" // Vertical position of output node
            r="20"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={nodeVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          />
          <text x="350" y="340" textAnchor="middle" fill="rgba(0, 255, 255, 0.8)" fontSize="14">Output</text>
        </g>

        {/* Animated flow paths - adjust path coordinates to match node positions */}
        <g>
          {/* Path from Input to Process - adjust the y coordinates in the path */}
          <motion.path
            ref={pathRef}
            d="M170 300 C260 300, 210 300, 230 300" // All "200" values control vertical position
            fill="none"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={flowVariants}
            initial="initial"
            animate="animate"
          />
          
          {/* Path from Process to Output - adjust the y coordinates in the path */}
          <motion.path
            d="M270 300 C310 300, 310 300, 330 300" // All "200" values control vertical position
            fill="none"
            stroke="rgba(0, 255, 255, 0.8)"
            strokeWidth="2"
            variants={flowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </g>

        {/* Animated particles - adjust cy values to match path positions */}
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill="rgba(0, 255, 255, 0.8)"
          animate={{
            cx: [150, 200, 250],
            cy: [300, 300, 300], // Adjust these values to match node heights
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
            cx: [250, 300, 350],
            cy: [300, 300, 300], // Adjust these values to match node heights
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  )
} 