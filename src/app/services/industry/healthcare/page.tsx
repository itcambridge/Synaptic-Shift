'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import HealthcareNetwork from '@/components/Effects/HealthcareNetwork'

export default function Healthcare() {
  return (
    <ServicePageLayout
      title="Healthcare Innovation"
      subtitle="Transform patient care with intelligent digital health solutions"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <HealthcareNetwork />
          </div>
        </div>
      }
      buttonText="Start Your Healthcare Journey"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Patient Care Analytics</h3>
              <p className="mt-3 text-cyan-100/90">AI-driven insights for improved patient outcomes</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Telemedicine Solutions</h3>
              <p className="mt-3 text-cyan-100/90">Secure platforms for remote healthcare delivery</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Clinical Decision Support</h3>
              <p className="mt-3 text-cyan-100/90">Advanced analytics for informed medical decisions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Healthcare Operations</h3>
              <p className="mt-3 text-cyan-100/90">Streamlined workflows and resource optimization</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Data Security</h3>
              <p className="mt-3 text-cyan-100/90">HIPAA-compliant security and privacy solutions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Patient Engagement</h3>
              <p className="mt-3 text-cyan-100/90">Digital tools for enhanced patient experience</p>
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
              See how we've helped healthcare providers enhance patient care through technology
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 