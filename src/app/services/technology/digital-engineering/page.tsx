'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'
import ProcessFlow from '@/components/Effects/ProcessFlow'

export default function DigitalEngineering() {
  return (
    <PageTransition>
      <main className="relative bg-black">
        <Navbar />
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
          <GridPattern />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0))]" />
          
          {/* Circuit Pattern Animation */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)
                `,
              }}
            />
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
                    {/* Process Flow Animation */}
                    <div className="absolute right-96 -top-20 scale-75">
                      <ProcessFlow />
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
                    Digital Engineering Excellence
                  </motion.h1>
                  <motion.div 
                    className="flex max-w-3xl flex-col gap-4 text-center text-xl leading-relaxed text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <p className="tracking-wide">Build robust, scalable software solutions.</p>
                    <p className="whitespace-nowrap tracking-wide">Transform your ideas into powerful digital experiences.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <GradientButton>
                      Start Engineering
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
                  <h3 className="text-xl font-semibold text-cyan-300">Custom Software Development</h3>
                  <p className="mt-3 text-cyan-100/90">Tailored solutions that perfectly match your business needs</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">API Development</h3>
                  <p className="mt-3 text-cyan-100/90">Create robust APIs for seamless system integration</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Web Applications</h3>
                  <p className="mt-3 text-cyan-100/90">Modern, responsive web applications with cutting-edge technology</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Mobile Development</h3>
                  <p className="mt-3 text-cyan-100/90">Native and cross-platform mobile applications</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">Quality Assurance</h3>
                  <p className="mt-3 text-cyan-100/90">Comprehensive testing and quality assurance processes</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold text-cyan-300">DevOps Integration</h3>
                  <p className="mt-3 text-cyan-100/90">Streamlined development and deployment pipelines</p>
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
                  See how we've helped organizations achieve their digital engineering goals
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
} 