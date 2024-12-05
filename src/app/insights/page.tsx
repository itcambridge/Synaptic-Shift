'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import PageTransition from '@/components/Layout/PageTransition'
import GradientButton from '@/components/UI/GradientButton'
import Navbar from '@/components/Navigation/Navbar'

const insights = [
  {
    category: "Digital Transformation",
    title: "The Future of Business",
    description: "Explore how AI and emerging technologies are reshaping industries and creating new opportunities for growth.",
    tags: ["AI", "Innovation", "Digital Strategy"],
    readTime: "5 min read"
  },
  {
    category: "Customer Experience",
    title: "Reimagining Customer Engagement",
    description: "Discover how brands are creating meaningful connections through personalized digital experiences.",
    tags: ["CX", "Personalization", "Digital Marketing"],
    readTime: "4 min read"
  },
  {
    category: "Technology & Innovation",
    title: "The Metaverse Revolution",
    description: "Understanding the impact of virtual worlds on business, entertainment, and social interaction.",
    tags: ["Metaverse", "Virtual Reality", "Web3"],
    readTime: "6 min read"
  },
  {
    category: "Sustainability",
    title: "Green Technology Solutions",
    description: "How businesses are leveraging technology to build sustainable futures and reduce environmental impact.",
    tags: ["Sustainability", "Green Tech", "ESG"],
    readTime: "5 min read"
  },
  {
    category: "Industry Trends",
    title: "The Rise of Digital Health",
    description: "Exploring the transformation of healthcare through digital innovation and patient-centered solutions.",
    tags: ["Healthcare", "Digital Health", "Innovation"],
    readTime: "7 min read"
  },
  {
    category: "Future of Work",
    title: "Hybrid Workplace Evolution",
    description: "Navigating the challenges and opportunities of remote and hybrid work environments.",
    tags: ["Remote Work", "Culture", "Productivity"],
    readTime: "4 min read"
  }
]

export default function Insights() {
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
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h1 className="mb-6 text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                Insights
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-300">
                Explore our latest thinking on business transformation, technology innovation, and industry trends.
              </p>
            </motion.div>

            {/* Insights Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-600/30 hover:bg-black/60"
                >
                  {/* Category */}
                  <div className="mb-4 text-sm font-medium text-cyan-400">
                    {insight.category}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                    {insight.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-gray-300">
                    {insight.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {insight.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-cyan-900/20 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Time */}
                  <div className="text-sm text-gray-400">
                    {insight.readTime}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-24 rounded-2xl border border-cyan-800/20 bg-black/50 p-12 text-center backdrop-blur-sm"
            >
              <h2 className="mb-4 text-3xl font-bold text-white">
                Stay Informed
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-300">
                Subscribe to our newsletter for the latest insights on technology, business transformation, and industry trends.
              </p>
              <GradientButton href="/contact">
                Subscribe Now
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
} 