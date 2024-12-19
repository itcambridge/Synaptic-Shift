'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const puzzlePieces = [
  { id: 'operations', label: 'Operations' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'costs', label: 'Costs' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'efficiency', label: 'Efficiency' },
  { id: 'growth', label: 'Growth' }
]

export default function BusinessPotentialCube() {
  const [activePiece, setActivePiece] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePiece((prev) => (prev + 1) % puzzlePieces.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] w-[600px]">
      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl text-cyan-300/80"
      >
        <p>Every business has</p>
        <p className="text-2xl font-bold text-cyan-300">untapped potential...</p>
      </motion.div>

      {/* 3D Rotating Cube */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Front Face */}
        <motion.div
          className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-sm"
          style={{ transform: 'translateZ(32px)' }}
        >
          {puzzlePieces.slice(0, 2).map((piece, index) => (
            <motion.div
              key={piece.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              animate={{
                opacity: activePiece === index ? 1 : 0.3,
                scale: activePiece === index ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg border border-cyan-500/20 bg-cyan-900/20 p-4">
                <p className="text-lg font-semibold text-cyan-300">{piece.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Face */}
        <motion.div
          className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-sm"
          style={{ transform: 'translateZ(-32px) rotateY(180deg)' }}
        >
          {puzzlePieces.slice(2, 4).map((piece, index) => (
            <motion.div
              key={piece.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              animate={{
                opacity: activePiece === index + 2 ? 1 : 0.3,
                scale: activePiece === index + 2 ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg border border-cyan-500/20 bg-cyan-900/20 p-4">
                <p className="text-lg font-semibold text-cyan-300">{piece.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Face */}
        <motion.div
          className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-sm"
          style={{ transform: 'translateX(32px) rotateY(90deg)' }}
        >
          {puzzlePieces.slice(4).map((piece, index) => (
            <motion.div
              key={piece.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
              animate={{
                opacity: activePiece === index + 4 ? 1 : 0.3,
                scale: activePiece === index + 4 ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg border border-cyan-500/20 bg-cyan-900/20 p-4">
                <p className="text-lg font-semibold text-cyan-300">{piece.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Glowing Effects */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-72 w-72 animate-pulse rounded-full bg-cyan-500/5 blur-xl" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-500/10 blur-lg" />
        </div>
      </motion.div>
    </div>
  )
} 