'use client'

import { motion } from 'framer-motion'

export default function EnergyGrid() {
  return (
    <div className="relative h-96 w-96">
      {/* Power Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center',
        }}
      />

      {/* Energy Nodes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center',
          animation: 'energyPulse 4s ease-in-out infinite',
        }}
      />

      {/* Energy Flow Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 25%, transparent 25%)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center',
          animation: 'energyFlow 20s linear infinite',
        }}
      />

      {/* Power Surges */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 2, 2.5],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes energyFlow {
          0% {
            backgroundPosition: 0 0;
          }
          100% {
            backgroundPosition: 60px 60px;
          }
        }
        @keyframes energyPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
} 