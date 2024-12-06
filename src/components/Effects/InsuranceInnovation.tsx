'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, DocumentTextIcon, FolderIcon } from '@heroicons/react/24/outline'

export default function InsuranceInnovation() {
  return (
    <div className="relative h-96 w-96">
      {/* Background Grid */}
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
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
          backgroundSize: '20px 20px',
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`
        }}
      />

      {/* Shield Icon */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -15 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ShieldCheckIcon className="h-24 w-24 text-cyan-300" />
      </motion.div>

      {/* Document Icon */}
      <motion.div
        className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 15 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [-5, 0, -5],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DocumentTextIcon className="h-20 w-20 text-cyan-300" />
      </motion.div>

      {/* Folder Icon */}
      <motion.div
        className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -15 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [5, 0, 5],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FolderIcon className="h-20 w-20 text-cyan-300" />
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <motion.path
          d="M 150,120 L 96,192"
          stroke="rgba(0, 255, 255, 0.3)"
          strokeWidth="2"
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
            ease: "linear"
          }}
        />
        <motion.path
          d="M 150,120 L 288,192"
          stroke="rgba(0, 255, 255, 0.3)"
          strokeWidth="2"
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
            ease: "linear"
          }}
        />
      </svg>

      {/* Data Points */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
} 