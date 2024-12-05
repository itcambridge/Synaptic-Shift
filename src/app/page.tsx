'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'
import ResponsiveContainer from '@/components/Layout/ResponsiveContainer'

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-black">
        <Navbar />
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
          <GridPattern />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0))]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-[calc(100vh-104px)]">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />
            </div>

            <ResponsiveContainer className="flex min-h-[calc(100vh-104px)] flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center space-y-8 text-center"
              >
                <motion.h1 
                  className="text-4xl font-bold text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Transform Your Business
                </motion.h1>
                <motion.div
                  className="flex max-w-3xl flex-col gap-4 text-center text-base leading-relaxed text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] sm:text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <p className="tracking-wide">Harness the power of AI and automation.</p>
                  <p className="tracking-wide">Drive innovation with cutting-edge technology solutions.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <GradientButton href="/contact">
                    Get Started
                  </GradientButton>
                  <GradientButton href="/services">
                    Explore Solutions
                  </GradientButton>
                </motion.div>
              </motion.div>
            </ResponsiveContainer>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}