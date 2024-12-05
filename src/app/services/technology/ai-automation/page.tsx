'use client'

import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import NeuralNetwork from '@/components/Effects/NeuralNetwork'
import ServicesGrid from '@/components/Home/ServicesGrid'

export default function AIAutomation() {
  return (
    <ServicePageLayout
      title="Transform Your Business with AI & Automation"
      subtitle="Harness the power of artificial intelligence and drive innovation"
      animation={
        <div className="absolute left-1/2 -top-80 -translate-x-1/2">
          <div className="scale-125">
            <NeuralNetwork />
          </div>
        </div>
      }
      buttonText="Get Started"
    >
      {/* Services Grid Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Machine Learning</h3>
              <p className="mt-3 text-cyan-100/90">Custom ML models for prediction, classification, and data analysis</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Process Automation</h3>
              <p className="mt-3 text-cyan-100/90">Streamline workflows and eliminate repetitive tasks</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Natural Language Processing</h3>
              <p className="mt-3 text-cyan-100/90">Advanced text analysis and chatbot solutions</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Computer Vision</h3>
              <p className="mt-3 text-cyan-100/90">Image and video analysis for quality control and insights</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">Intelligent Analytics</h3>
              <p className="mt-3 text-cyan-100/90">AI-powered insights from your business data</p>
            </div>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">AI Integration</h3>
              <p className="mt-3 text-cyan-100/90">Seamlessly integrate AI into your existing systems</p>
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
              See how we've helped organizations achieve their AI transformation goals
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 