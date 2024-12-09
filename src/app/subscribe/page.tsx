'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/send-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'Mark.Austin@SynapticShift.net',
          subject: 'New Newsletter Subscription',
          text: `
New Newsletter Subscription

Email: ${email}

Please add this email to the newsletter distribution list.
`,
          replyTo: email
        }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending subscription:', error)
      setStatus('error')
    }
  }

  return (
    <ServicePageLayout
      title="Subscribe to Our Newsletter"
      subtitle="Stay updated with our latest insights, industry trends, and technology innovations"
      buttonText=""
      animation={null}
    >
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-2xl bg-black/50 p-8 backdrop-blur-sm border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/10 px-4 py-3 text-gray-100 shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-cyan-600 hover:to-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200`}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {status === 'success' && (
                <motion.p 
                  className="text-sm text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you for subscribing! We'll keep you updated with our latest insights.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p 
                  className="text-sm text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">What you'll receive:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly industry insights and analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Latest technology trends and innovations
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Case studies and success stories
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exclusive event invitations
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  )
} 