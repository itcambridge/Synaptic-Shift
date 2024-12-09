'use client'

import Link from 'next/link'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import NeuralNetwork from '@/components/Effects/NeuralNetwork'
import ServicesGrid from '@/components/Home/ServicesGrid'
import ArticleCard from '@/components/UI/ArticleCard'

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
            <Link href="/insights/future-of-ai-in-financial-services" className="group">
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-black/70">
                <h3 className="text-xl font-semibold text-cyan-300">Machine Learning</h3>
                <p className="mt-3 text-cyan-100/90">Custom ML models for prediction, classification, and data analysis</p>
                <div className="mt-4 text-sm text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </Link>

            <Link href="/insights/process-automation" className="group">
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-black/70">
                <h3 className="text-xl font-semibold text-cyan-300">Process Automation</h3>
                <p className="mt-3 text-cyan-100/90">Streamline workflows and eliminate repetitive tasks</p>
                <div className="mt-4 text-sm text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </Link>

            <Link href="/insights/natural-language-processing" className="group">
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-black/70">
                <h3 className="text-xl font-semibold text-cyan-300">Natural Language Processing</h3>
                <p className="mt-3 text-cyan-100/90">Advanced text analysis and chatbot solutions</p>
                <div className="mt-4 text-sm text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </Link>

            <Link href="/insights/computer-vision" className="group">
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-black/70">
                <h3 className="text-xl font-semibold text-cyan-300">Computer Vision</h3>
                <p className="mt-3 text-cyan-100/90">Image and video analysis for quality control and insights</p>
                <div className="mt-4 text-sm text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </Link>

            <Link href="/insights/intelligent-analytics" className="group">
              <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-black/70">
                <h3 className="text-xl font-semibold text-cyan-300">Intelligent Analytics</h3>
                <p className="mt-3 text-cyan-100/90">AI-powered insights from your business data</p>
                <div className="mt-4 text-sm text-cyan-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read article →
                </div>
              </div>
            </Link>

            <div className="rounded-2xl border border-cyan-800/20 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-cyan-300">AI Integration</h3>
              <p className="mt-3 text-cyan-100/90">Seamlessly integrate AI into your existing systems</p>
              <div className="mt-4 text-sm text-cyan-500/50">
                Article coming soon
              </div>
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

      {/* Related Articles Section */}
      <section className="bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ArticleCard
                title="Natural Language Processing"
                description="Explore how NLP is revolutionizing human-computer interaction and enabling more natural, context-aware communication systems."
                link="/insights/natural-language-processing"
                date="2024-03-14"
                readTime="7 min read"
              />
              <ArticleCard
                title="Machine Learning for Smarter Decisions"
                description="Discover how Machine Learning is transforming businesses by enabling data-driven decisions and intelligent automation."
                link="/insights/machine-learning"
                date="2024-03-15"
                readTime="8 min read"
              />
              <ArticleCard
                title="Empowering Insights with Computer Vision"
                description="Explore how Computer Vision technology bridges the gap between digital images and actionable insights across industries."
                link="/insights/computer-vision"
                date="2024-03-15"
                readTime="8 min read"
              />
              <ArticleCard
                title="Intelligent Analytics: Turning Data into Decisions"
                description="Discover how AI-powered analytics can transform your business data into actionable insights and smarter decisions."
                link="/insights/intelligent-analytics"
                date="2024-03-15"
                readTime="8 min read"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 