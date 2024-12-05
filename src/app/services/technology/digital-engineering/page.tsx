'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ProcessFlow from '@/components/Effects/ProcessFlow'

export default function DigitalEngineering() {
  return (
    <ServicePageLayout
      title="Digital Engineering Excellence"
      subtitle="Build robust, scalable software solutions that transform ideas into reality"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-75">
            <ProcessFlow />
          </div>
        </div>
      }
      buttonText="Start Engineering"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Software Development</h3>
              <p className="mt-3 text-cyan-100/90">Custom software solutions tailored to your business needs</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Web Applications</h3>
              <p className="mt-3 text-cyan-100/90">Modern, responsive web applications with cutting-edge technology</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Mobile Development</h3>
              <p className="mt-3 text-cyan-100/90">Native and cross-platform mobile applications</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Quality Assurance</h3>
              <p className="mt-3 text-cyan-100/90">Comprehensive testing and quality assurance processes</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">DevOps Integration</h3>
              <p className="mt-3 text-cyan-100/90">Streamlined development and deployment pipelines</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">API Development</h3>
              <p className="mt-3 text-cyan-100/90">Robust and scalable API solutions for seamless integration</p>
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
              See how we've helped organizations achieve their digital engineering goals
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 