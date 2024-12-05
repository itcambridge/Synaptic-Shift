'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'

const values = [
  {
    title: "Innovation",
    description: "We constantly seek new ways to push boundaries and deliver forward-thinking solutions."
  },
  {
    title: "Integrity",
    description: "Trust and transparency are the cornerstones of our relationships with clients."
  },
  {
    title: "Collaboration",
    description: "The best solutions come from working together, combining your expertise with our technological insights."
  },
  {
    title: "Excellence",
    description: "From strategy to execution, we are committed to delivering unmatched quality in every project."
  }
]

const services = [
  {
    title: "AI Integration",
    description: "Embedding artificial intelligence into your processes to enhance decision-making and efficiency."
  },
  {
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights that drive growth and innovation."
  },
  {
    title: "Automation Solutions",
    description: "Streamlining workflows to save time, reduce costs, and increase productivity."
  },
  {
    title: "Custom IT Services",
    description: "Designing and implementing technology solutions tailored to your business needs."
  }
]

const strengths = [
  {
    title: "Industry Expertise",
    description: "Deep knowledge across sectors, understanding unique challenges and opportunities."
  },
  {
    title: "Tailored Solutions",
    description: "Every solution is crafted to align with your goals and vision."
  },
  {
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest innovations to keep you ahead of the curve."
  },
  {
    title: "Proven Track Record",
    description: "Our clients trust us to deliver transformative results repeatedly."
  }
]

export default function About() {
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
        <div className="relative z-10 px-4 pt-24 pb-16">
          <div className="mx-auto max-w-7xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24 text-center"
            >
              <h1 className="mb-6 text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                About Synaptic Shift
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
                We are revolutionizing industries by merging innovation with intelligence. Founded with a vision to transform businesses through cutting-edge technology, we specialize in delivering AI-driven solutions tailored to your unique challenges.
              </p>
            </motion.div>

            {/* Who We Are Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-24"
            >
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-12 backdrop-blur-sm">
                <h2 className="mb-6 text-4xl font-bold text-white">Who We Are</h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  We are a team of seasoned IT consultants, engineers, and data scientists passionate about pushing the boundaries of technology. With decades of experience and a focus on emerging trends, we partner with our clients to deliver scalable, impactful solutions. Synaptic Shift operates at the intersection of innovation and reliability, ensuring that every solution we provide is built for the challenges of today and the opportunities of tomorrow.
                </p>
              </div>
            </motion.section>

            {/* What We Do Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-24"
            >
              <h2 className="mb-8 text-4xl font-bold text-white">What We Do</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                  >
                    <h3 className="mb-4 text-2xl font-semibold text-cyan-300">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Our Values Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-24"
            >
              <h2 className="mb-8 text-4xl font-bold text-white">Our Values</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                  >
                    <h3 className="mb-4 text-xl font-semibold text-cyan-300">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-24"
            >
              <h2 className="mb-8 text-4xl font-bold text-white">Why Choose Us?</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
                  >
                    <h3 className="mb-4 text-2xl font-semibold text-cyan-300">{strength.title}</h3>
                    <p className="text-gray-300">{strength.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Vision & CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-12 backdrop-blur-sm">
                <h2 className="mb-6 text-4xl font-bold text-white">Our Vision</h2>
                <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-300">
                  To be the trusted partner that empowers businesses to innovate fearlessly and thrive in a rapidly evolving digital landscape. At Synaptic Shift, we are not just adapting to the future but creating it.
                </p>
                <div className="flex justify-center">
                  <GradientButton href="/contact">
                    Let's Create the Future Together
                  </GradientButton>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </PageTransition>
  )
} 