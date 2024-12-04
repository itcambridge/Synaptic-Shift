'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import GridPattern from '@/components/Background/GridPattern'
import GradientButton from '@/components/UI/GradientButton'
import NeuralNetwork from '@/components/Effects/NeuralNetwork'

export default function AIAutomation() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <GridPattern />
      <NeuralNetwork />
      
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
            AI & Automation Solutions
          </h1>
          
          <div className="mt-6 space-y-2">
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl">
              Transform your business with cutting-edge AI.
            </p>
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl whitespace-nowrap">
              Harness the power of intelligent automation.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Machine Learning</h3>
              <p className="mt-3 text-cyan-100/90">Custom ML models for prediction, classification, and data analysis</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Process Automation</h3>
              <p className="mt-3 text-cyan-100/90">Streamline workflows and eliminate repetitive tasks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Natural Language Processing</h3>
              <p className="mt-3 text-cyan-100/90">Advanced text analysis and chatbot solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Computer Vision</h3>
              <p className="mt-3 text-cyan-100/90">Image and video analysis for quality control and insights</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Intelligent Analytics</h3>
              <p className="mt-3 text-cyan-100/90">AI-powered insights from your business data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">AI Integration</h3>
              <p className="mt-3 text-cyan-100/90">Seamlessly integrate AI into your existing systems</p>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <GradientButton href="/contact">
              Start Your AI Journey
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 