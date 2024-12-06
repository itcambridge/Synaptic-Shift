'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import FinancialUniverse from '@/components/Effects/FinancialUniverse'

export default function InvestmentManagement() {
  return (
    <ServicePageLayout
      title="Investment Management Innovation"
      subtitle="Transform investment strategies with AI-driven insights and automation"
      animation={
        <div className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center mt-4">
          <div className="scale-120 md:scale-90">
            <FinancialUniverse />
          </div>
        </div>
      }
      buttonText="Explore Investment Solutions"
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
              <h3 className="text-xl font-semibold text-cyan-300">Portfolio Optimization</h3>
              <p className="mt-3 text-cyan-100/90">AI-driven portfolio management and rebalancing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Risk Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Advanced risk assessment and monitoring</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Market Intelligence</h3>
              <p className="mt-3 text-cyan-100/90">Real-time market analysis and predictions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Automated Trading</h3>
              <p className="mt-3 text-cyan-100/90">Intelligent algorithmic trading solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Client Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Data-driven client insights and reporting</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Compliance Management</h3>
              <p className="mt-3 text-cyan-100/90">Automated regulatory compliance and reporting</p>
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
              See how we've helped investment managers transform their operations
            </p>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 