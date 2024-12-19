'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ManufacturingFlow from '@/components/Effects/ManufacturingFlow'

export default function Manufacturing() {
  return (
    <ServicePageLayout
      title="Manufacturing Excellence"
      subtitle="Transform manufacturing with smart automation and data-driven optimization"
      animation={
        <div className="absolute left-1/2 md:-top-80 -top-60 -translate-x-1/2">
          <div className="relative h-[400px] w-[600px] scale-85">
            <ManufacturingFlow />
          </div>
        </div>
      }
      buttonText="Explore Manufacturing Solutions"
    >
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
              <h3 className="text-xl font-semibold text-cyan-300">Industrial IoT</h3>
              <p className="mt-3 text-cyan-100/90">Connected sensors and real-time monitoring systems</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Predictive Maintenance</h3>
              <p className="mt-3 text-cyan-100/90">AI-powered equipment maintenance optimization</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-cyan-300">Process Automation</h3>
              <p className="mt-3 text-cyan-100/90">Smart robotics and automated production lines</p>
            </motion.div>

            <Link href="/insights/smart-manufacturing-industry-4" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/40"
              >
                <h3 className="text-xl font-semibold text-cyan-300">Smart Manufacturing: Industry 4.0</h3>
                <p className="mt-3 text-cyan-100/90">Discover how IoT and automation are transforming manufacturing processes</p>
              </motion.div>
            </Link>

            <Link href="/insights/process-automation" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/40"
              >
                <h3 className="text-xl font-semibold text-cyan-300">Process Automation Excellence</h3>
                <p className="mt-3 text-cyan-100/90">How smart automation is revolutionizing manufacturing workflows</p>
              </motion.div>
            </Link>

            <Link href="/insights/digital-twins-manufacturing" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/40"
              >
                <h3 className="text-xl font-semibold text-cyan-300">Digital Twins in Manufacturing</h3>
                <p className="mt-3 text-cyan-100/90">Virtual replicas revolutionizing production and maintenance</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 