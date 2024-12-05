'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ManufacturingFlow from '@/components/Effects/ManufacturingFlow'

export default function Manufacturing() {
  return (
    <ServicePageLayout
      title="Smart Manufacturing"
      subtitle="Transform your production with Industry 4.0 solutions"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <ManufacturingFlow />
          </div>
        </div>
      }
      buttonText="Modernize Your Factory"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Industrial IoT</h3>
              <p className="mt-3 text-cyan-100/90">Connected sensors and real-time monitoring systems</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Predictive Maintenance</h3>
              <p className="mt-3 text-cyan-100/90">AI-powered equipment maintenance optimization</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Process Automation</h3>
              <p className="mt-3 text-cyan-100/90">Smart robotics and automated production lines</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Quality Control</h3>
              <p className="mt-3 text-cyan-100/90">Computer vision and ML-based quality assurance</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Supply Chain Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Real-time visibility and optimization solutions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Digital Twin</h3>
              <p className="mt-3 text-cyan-100/90">Virtual replicas for simulation and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-300">
              See how we've helped manufacturers embrace digital transformation
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 