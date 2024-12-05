'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import FinancialGlobe from '@/components/Effects/FinancialGlobe'

export default function FinancialServices() {
  return (
    <ServicePageLayout
      title="Financial Services Solutions"
      subtitle="Accelerate digital transformation in banking, insurance, and investment management"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <FinancialGlobe />
          </div>
        </div>
      }
      buttonText="Transform Your Business"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Digital Banking</h3>
              <p className="mt-3 text-cyan-100/90">Modern banking platforms and mobile-first solutions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Risk Management</h3>
              <p className="mt-3 text-cyan-100/90">Advanced analytics for risk assessment and compliance</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Investment Technology</h3>
              <p className="mt-3 text-cyan-100/90">Cutting-edge solutions for portfolio management</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Insurance Innovation</h3>
              <p className="mt-3 text-cyan-100/90">Digital transformation for insurance operations</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Payment Solutions</h3>
              <p className="mt-3 text-cyan-100/90">Secure and efficient payment processing systems</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Regulatory Compliance</h3>
              <p className="mt-3 text-cyan-100/90">Automated compliance monitoring and reporting</p>
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
              See how we've helped financial institutions embrace digital transformation
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 