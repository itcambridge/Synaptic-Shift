'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import GridPattern from '@/components/Background/GridPattern'
import GradientButton from '@/components/UI/GradientButton'
import CloudEffect from '@/components/Effects/CloudEffect'

export default function CloudServices() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <GridPattern />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="relative mb-12">
            {/* Cloud with particle effect */}
            <div className="absolute -left-96 top-1/3 -translate-y-1/2">
              <CloudEffect />
            </div>
            
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
            Transform Your Business with Cloud Innovation
          </h1>
          
          <div className="mt-6 space-y-2">
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl">
              Accelerate your digital transformation.
            </p>
            <p className="text-lg leading-8 text-cyan-100 sm:text-xl whitespace-nowrap">
              Leverage cutting-edge cloud solutions and expert consulting services.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Cloud Migration</h3>
              <p className="mt-3 text-cyan-100/90">Seamless transition of your infrastructure to the cloud</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Cloud Architecture</h3>
              <p className="mt-3 text-cyan-100/90">Design scalable and resilient cloud infrastructure</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Cloud Security</h3>
              <p className="mt-3 text-cyan-100/90">Protect your cloud assets with advanced security measures</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">DevOps</h3>
              <p className="mt-3 text-cyan-100/90">Streamline development and operations with cloud-native practices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Cost Optimization</h3>
              <p className="mt-3 text-cyan-100/90">Maximize cloud efficiency while minimizing expenses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Managed Services</h3>
              <p className="mt-3 text-cyan-100/90">24/7 monitoring and management of your cloud infrastructure</p>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <GradientButton href="/contact">
              Start Your Cloud Journey
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 