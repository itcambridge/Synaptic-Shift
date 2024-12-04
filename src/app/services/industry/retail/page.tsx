'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'
import RetailAutomation from '@/components/Effects/RetailAutomation'

export default function Retail() {
  return (
    <PageTransition>
      <main className="relative bg-black">
        <Navbar />
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
          <GridPattern />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0))]" />
          
          {/* Retail Grid Animation */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px, 40px 40px, 40px 40px',
                animation: 'retailFlow 30s linear infinite',
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 70% 60%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, transparent 100%)
                `,
              }}
            />
            <style jsx global>{`
              @keyframes retailFlow {
                0% {
                  background-position: 0 0, 0 0, 0 0;
                }
                100% {
                  background-position: 40px 40px, 40px 40px, 40px 40px;
                }
              }
            `}</style>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-[calc(100vh-104px)]">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl flex-col items-center justify-center px-4">
              <div className="w-full max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center space-y-8"
                >
                  <div className="relative">
                    {/* Retail Automation Animation */}
                    <div className="absolute -left-[30rem] -top-20">
                      <RetailAutomation />
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

                  <motion.h1 
                    className="text-center text-7xl font-bold text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Retail Innovation
                  </motion.h1>
                  <motion.div 
                    className="flex max-w-3xl flex-col gap-4 text-center text-xl leading-relaxed text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <p className="tracking-wide">Transform retail experiences with digital solutions.</p>
                    <p className="whitespace-nowrap tracking-wide">Empower your business with next-generation technology.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <GradientButton>
                      Start Your Retail Journey
                    </GradientButton>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Grid Section */}
          <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">E-commerce Solutions</h3>
                  <p className="mt-3 text-cyan-100/90">Modern platforms for seamless online shopping experiences</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Omnichannel Retail</h3>
                  <p className="mt-3 text-cyan-100/90">Unified experiences across all customer touchpoints</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Inventory Management</h3>
                  <p className="mt-3 text-cyan-100/90">Smart systems for optimal stock control and forecasting</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Customer Analytics</h3>
                  <p className="mt-3 text-cyan-100/90">Data-driven insights for personalized experiences</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Digital Payments</h3>
                  <p className="mt-3 text-cyan-100/90">Secure and flexible payment solutions</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Smart Store Solutions</h3>
                  <p className="mt-3 text-cyan-100/90">IoT and AI-powered retail environments</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="bg-gray-900 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-white">Success Stories</h2>
                <p className="mt-4 text-xl text-gray-300">
                  See how we've helped retailers transform their business
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
} 