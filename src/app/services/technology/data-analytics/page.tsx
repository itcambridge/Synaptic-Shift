'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import DataClusters from '@/components/Effects/DataClusters'

export default function DataAnalytics() {
  return (
    <ServicePageLayout
      title="Data Analytics & Insights"
      subtitle="Transform raw data into actionable insights for confident decision-making"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <DataClusters />
          </div>
        </div>
      }
      buttonText="Start Your Analytics Journey"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Data Strategy</h3>
              <p className="mt-3 text-cyan-100/90">Develop a comprehensive data strategy aligned with your goals</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Predictive Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Forecast trends and make data-driven decisions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Data Visualization</h3>
              <p className="mt-3 text-cyan-100/90">Create compelling visual stories from your data</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Real-time Analytics</h3>
              <p className="mt-3 text-cyan-100/90">Monitor and analyze data as it happens</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Data Integration</h3>
              <p className="mt-3 text-cyan-100/90">Unify data from multiple sources for comprehensive analysis</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Custom Dashboards</h3>
              <p className="mt-3 text-cyan-100/90">Tailored reporting solutions for your specific needs</p>
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
              See how we've helped organizations unlock the power of their data
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 