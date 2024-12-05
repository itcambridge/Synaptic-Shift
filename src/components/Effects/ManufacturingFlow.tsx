'use client'

import { motion } from 'framer-motion'

export default function ManufacturingFlow() {
  const productionPath = "M 50,200 C 100,200 150,100 200,100 S 300,200 350,200"

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

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        {/* Production Line Path */}
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

        {/* Production Nodes */}
        {[
          { x: 50, y: 200 },
          { x: 200, y: 100 },
          { x: 350, y: 200 }
        ].map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="6"
            fill="rgba(0, 255, 255, 0.2)"
            stroke="rgba(0, 255, 255, 0.6)"
            strokeWidth="1"
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
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