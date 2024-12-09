'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import CloudEffect from '@/components/Effects/CloudEffect'
import ServicesGrid from '@/components/Home/ServicesGrid'

export default function CloudTransformation() {
  return (
    <ServicePageLayout
      title="Transform Your Business with Cloud Innovation"
      subtitle="Accelerate your digital transformation with cutting-edge cloud solutions"
      animation={
        <div className="absolute left-1/2 md:-top-32 -top-20 -translate-x-1/2">
          <div className="scale-150">
            <CloudEffect />
          </div>
        </div>
      }
      buttonText="Get Started"
    >
      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Case Studies Section */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Success Stories</h2>
            <p className="mt-4 text-xl text-gray-300">
              See how we've helped organizations achieve their digital transformation goals
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 