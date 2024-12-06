'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import IntelligentAnalysisHub from '@/components/Effects/IntelligentAnalysisHub'

export default function Insurance() {
  return (
    <ServicePageLayout
      title="Insurance Innovation"
      subtitle="Modernize insurance operations with AI-driven solutions and digital transformation"
      animation={
        <div className="absolute left-1/2 -top-32 -translate-x-1/2">
          <div className="scale-150">
            <IntelligentAnalysisHub />
          </div>
        </div>
      }
      buttonText="Explore Insurance Solutions"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Digital Claims Processing</h3>
              <p className="mt-3 text-cyan-100/90">Streamline claims with AI-powered automation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Risk Assessment</h3>
              <p className="mt-3 text-cyan-100/90">Advanced analytics for accurate risk evaluation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Customer Experience</h3>
              <p className="mt-3 text-cyan-100/90">Personalized insurance solutions and service</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Fraud Detection</h3>
              <p className="mt-3 text-cyan-100/90">AI-powered fraud prevention and detection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Policy Management</h3>
              <p className="mt-3 text-cyan-100/90">Digital policy administration and servicing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Data Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Insights-driven decision making and pricing</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              See how we've helped insurers transform their operations
            </p>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 