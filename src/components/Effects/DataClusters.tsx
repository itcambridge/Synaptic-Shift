'use client'

import { motion } from 'framer-motion'

const generateClusters = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 15,
    initialX: Math.random() * 300,
    initialY: Math.random() * 300,
  }))
}

export default function DataClusters() {
  const clusters = generateClusters(15)
  const smallClusters = generateClusters(25)

  return (
    <div className="relative h-96 w-96">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.3) 0%, transparent 70%)'
        }}
      />

      {/* Large clusters */}
      {clusters.map((cluster) => (
        <motion.div
          key={cluster.id}
          className="absolute"
          initial={{
            x: cluster.initialX,
            y: cluster.initialY,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: [cluster.initialX, cluster.initialX + 50, cluster.initialX - 30, cluster.initialX],
            y: [cluster.initialY, cluster.initialY - 30, cluster.initialY + 50, cluster.initialY],
            opacity: [0.9, 1, 0.9],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: cluster.duration,
            repeat: Infinity,
            delay: cluster.delay,
            ease: "easeInOut"
          }}
        >
          <div
            className="rounded-full bg-cyan-500/40"
            style={{
              width: cluster.size,
              height: cluster.size,
              filter: 'blur(4px)',
              boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)'
            }}
          />
        </motion.div>
      ))}

      {/* Small clusters */}
      {smallClusters.map((cluster) => (
        <motion.div
          key={`small-${cluster.id}`}
          className="absolute"
          initial={{
            x: cluster.initialX,
            y: cluster.initialY,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: [cluster.initialX, cluster.initialX + 30, cluster.initialX - 20, cluster.initialX],
            y: [cluster.initialY, cluster.initialY - 20, cluster.initialY + 30, cluster.initialY],
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: cluster.duration * 0.8,
            repeat: Infinity,
            delay: cluster.delay,
            ease: "easeInOut"
          }}
        >
          <div
            className="rounded-full bg-cyan-400/30"
            style={{
              width: cluster.size * 0.5,
              height: cluster.size * 0.5,
              filter: 'blur(2px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
            }}
          />
        </motion.div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full">
        <motion.path
          stroke="rgba(0, 255, 255, 0.3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4,6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          d="M50,150 Q150,50 250,150 T450,150"
        />
        <motion.path
          stroke="rgba(0, 255, 255, 0.3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4,6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          d="M100,100 Q200,200 300,100 T500,100"
        />
      </svg>
    </div>
  )
} 