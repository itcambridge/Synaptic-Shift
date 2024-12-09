'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import EnergyDistribution from '@/components/Effects/EnergyDistribution'

export default function Energy() {
  return (
    <ServicePageLayout
      title="Smart Energy Solutions"
      subtitle="Powering the future with intelligent grid technology"
      animation={
        <div className="absolute left-1/2 md:-top-80 -top-30 -translate-x-1/2">
          <div className="scale-75">
            <EnergyDistribution />
          </div>
        </div>
      }
      buttonText="Power Your Innovation"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Smart Grid Solutions</h3>
              <p className="mt-3 text-cyan-100/90">Intelligent power distribution and management</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Renewable Integration</h3>
              <p className="mt-3 text-cyan-100/90">Seamless integration of renewable energy sources</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Energy Analytics</h3>
              <p className="mt-3 text-cyan-100/90">AI-driven insights for optimal energy usage</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Grid Automation</h3>
              <p className="mt-3 text-cyan-100/90">Automated control and monitoring systems</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Demand Response</h3>
              <p className="mt-3 text-cyan-100/90">Smart load balancing and consumption optimization</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Energy Storage</h3>
              <p className="mt-3 text-cyan-100/90">Advanced battery and storage solutions</p>
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
              See how we've helped energy providers transform their operations
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 