'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'
import HealthcareNetwork from '@/components/Effects/HealthcareNetwork'

export default function Healthcare() {
  return (
    <PageTransition>
      <main className="relative bg-black">
        <Navbar />
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
          <GridPattern />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0))]" />
          
          {/* DNA Helix Animation */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg,
                    rgba(0, 255, 255, 0.1) 0px,
                    rgba(0, 255, 255, 0.1) 2px,
                    transparent 2px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(-45deg,
                    rgba(0, 255, 255, 0.1) 0px,
                    rgba(0, 255, 255, 0.1) 2px,
                    transparent 2px,
                    transparent 8px
                  )
                `,
                backgroundSize: '24px 24px',
                animation: 'dnaFlow 20s linear infinite',
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
              @keyframes dnaFlow {
                0% {
                  background-position: 0 0;
                }
                100% {
                  background-position: 24px 24px;
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
                    {/* Healthcare Network Animation */}
                    <div className="absolute right-96 -top-8">
                      <HealthcareNetwork />
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
                    Healthcare Innovation
                  </motion.h1>
                  <motion.div 
                    className="flex max-w-3xl flex-col gap-4 text-center text-xl leading-relaxed text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <p className="tracking-wide">Transform patient care with digital solutions.</p>
                    <p className="whitespace-nowrap tracking-wide">Leverage technology to enhance healthcare delivery.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <GradientButton>
                      Start Your Healthcare Journey
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
                  <h3 className="text-xl font-semibold text-cyan-300">Electronic Health Records</h3>
                  <p className="mt-3 text-cyan-100/90">Modern EHR systems for seamless patient data management</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Telemedicine Solutions</h3>
                  <p className="mt-3 text-cyan-100/90">Virtual care platforms for remote patient engagement</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Clinical Analytics</h3>
                  <p className="mt-3 text-cyan-100/90">Data-driven insights for improved patient outcomes</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Patient Engagement</h3>
                  <p className="mt-3 text-cyan-100/90">Digital tools for enhanced patient communication</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Healthcare IoT</h3>
                  <p className="mt-3 text-cyan-100/90">Connected devices for real-time patient monitoring</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Medical AI</h3>
                  <p className="mt-3 text-cyan-100/90">AI-powered diagnostics and treatment planning</p>
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
                  See how we've helped healthcare providers transform patient care
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
} 