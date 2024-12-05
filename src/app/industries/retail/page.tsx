'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import RetailEngagement from '@/components/Effects/RetailEngagement'

export default function Retail() {
  return (
    <ServicePageLayout
      title="Retail Innovation"
      subtitle="Transform retail experiences with intelligent digital solutions"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <RetailEngagement />
          </div>
        </div>
      }
      buttonText="Revolutionize Your Retail"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">E-commerce Solutions</h3>
              <p className="mt-3 text-cyan-100/90">Modern platforms for seamless online shopping</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Omnichannel Retail</h3>
              <p className="mt-3 text-cyan-100/90">Unified experiences across all customer touchpoints</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Inventory Management</h3>
              <p className="mt-3 text-cyan-100/90">Smart systems for optimal stock control and forecasting</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Customer Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Data-driven insights for personalized experiences</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Digital Payments</h3>
              <p className="mt-3 text-cyan-100/90">Secure and flexible payment solutions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Smart Store Solutions</h3>
              <p className="mt-3 text-cyan-100/90">IoT and AI-powered retail environments</p>
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
              See how we've helped retailers transform their business
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 