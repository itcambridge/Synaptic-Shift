'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'
import ResponsiveContainer from '@/components/Layout/ResponsiveContainer'

const offerings = [
  {
    title: "AI-Powered Solutions",
    description: "Harness the potential of artificial intelligence to revolutionize your processes."
  },
  {
    title: "Data-Driven Insights",
    description: "Transform raw data into actionable strategies for success."
  },
  {
    title: "Custom IT Services",
    description: "Tailored technology solutions that align with your goals."
  },
  {
    title: "Automation & Efficiency",
    description: "Streamline workflows to unlock new levels of productivity."
  }
]

const advantages = [
  {
    title: "Proven Expertise",
    description: "A track record of delivering results across multiple industries."
  },
  {
    title: "Innovative Solutions",
    description: "Staying ahead with the latest in AI, IoT, and data technologies."
  },
  {
    title: "Collaborative Approach",
    description: "Partnering with you to craft tailored solutions."
  },
  {
    title: "Commitment to Excellence",
    description: "Delivering quality and value at every step."
  }
]

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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mb-8"
                >
                  <img
                    src="/logo.png"
                    alt="Synaptic Shift Logo"
                    className="h-40 w-auto brightness-150 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] sm:h-48 md:h-56 lg:h-64"
                  />
                </motion.div>
                <motion.h1 
                  className="text-4xl font-bold text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Welcome to Synaptic Shift
                </motion.h1>
                <motion.h2
                  className="text-2xl font-semibold text-cyan-100 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] sm:text-3xl md:text-4xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Transforming Industries. Empowering Innovation.
                </motion.h2>
                <motion.p
                  className="max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  At Synaptic Shift, we redefine possibilities with AI-driven solutions that empower businesses to thrive in an ever-evolving world. With expertise across diverse industries, we combine cutting-edge technology and strategic insight to deliver transformative outcomes for your organization.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <GradientButton href="/about">
                    Learn More
                  </GradientButton>
                  <GradientButton href="/contact">
                    Contact Us
                  </GradientButton>
                </motion.div>
              </motion.div>
            </ResponsiveContainer>
          </section>

          {/* Mission Section */}
          <section className="py-24">
            <ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="mb-8 text-4xl font-bold text-white">Our Mission</h2>
                <p className="mx-auto max-w-3xl text-xl text-gray-300">
                  To revolutionize the way businesses operate by integrating intelligent solutions that optimize performance, enhance customer experiences, and drive sustainable growth.
                </p>
              </motion.div>
            </ResponsiveContainer>
          </section>

          {/* What We Offer Section */}
          <section className="bg-black/50 py-24 backdrop-blur-sm">
            <ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="mb-16 text-4xl font-bold text-white">What We Offer</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {offerings.map((offering, index) => (
                    <motion.div
                      key={offering.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg border border-cyan-800/20 bg-black/30 p-6 backdrop-blur-sm"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-cyan-300">{offering.title}</h3>
                      <p className="text-gray-300">{offering.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ResponsiveContainer>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-black/50 py-24 backdrop-blur-sm">
            <ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="mb-16 text-4xl font-bold text-white">Why Synaptic Shift?</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg border border-cyan-800/20 bg-black/30 p-6 backdrop-blur-sm"
                    >
                      <h3 className="mb-4 text-xl font-semibold text-cyan-300">{advantage.title}</h3>
                      <p className="text-gray-300">{advantage.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ResponsiveContainer>
          </section>

          {/* CTA Section */}
          <section className="py-24">
            <ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="mb-8 text-4xl font-bold text-white">Ready to Transform?</h2>
                <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
                  Let's work together to bring your vision to life. Contact us today to start your journey with Synaptic Shift.
                </p>
                <div className="flex justify-center gap-4">
                  <GradientButton href="/about">Learn More</GradientButton>
                  <GradientButton href="/contact">Contact Us</GradientButton>
                </div>
              </motion.div>
            </ResponsiveContainer>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}