'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import GridPattern from '@/components/Background/GridPattern'
import GradientButton from '@/components/UI/GradientButton'

export default function DataAnalytics() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <GridPattern />
      
      {/* Data Visualization Effect */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'top',
          opacity: 0.5
        }} />
      </div>
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="relative mb-12">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="Synaptic Shift Logo"
                width={150}
                height={150}
                className="h-auto w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                priority
              />
            </motion.div>
          </div>

          <h1 className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Data Analytics & Insights
          </h1>
          
          <div className="mt-6 space-y-2">
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl">
              Transform raw data into actionable insights.
            </p>
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl whitespace-nowrap">
              Make data-driven decisions with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Business Intelligence</h3>
              <p className="mt-3 text-cyan-100/90">Transform complex data into clear, actionable insights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Predictive Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Forecast trends and make data-driven decisions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Data Visualization</h3>
              <p className="mt-3 text-cyan-100/90">Create compelling visual stories from your data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Real-time Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Monitor and analyze data as it happens</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Data Integration</h3>
              <p className="mt-3 text-cyan-100/90">Unify data from multiple sources for comprehensive analysis</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Custom Dashboards</h3>
              <p className="mt-3 text-cyan-100/90">Tailored reporting solutions for your specific needs</p>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <GradientButton href="/contact">
              Start Your Analytics Journey
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 