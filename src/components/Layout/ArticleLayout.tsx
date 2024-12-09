'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  category: string
  readTime: string
  date: string
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  subtitle,
  category,
  readTime,
  date,
  children
}: ArticleLayoutProps) {
  const [copied, setCopied] = useState(false)
  const pathname = usePathname()

  const handleShare = async () => {
    // Get the full URL
    const url = `${window.location.origin}${pathname}`
    
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  return (
    <ServicePageLayout
      title={title}
      subtitle={subtitle || ""}
      buttonText={copied ? "Copied!" : "Share Article"}
      onButtonClick={handleShare}
      animation={null}
    >
      <article className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between text-sm text-cyan-300 font-medium">
            <span>{category}</span>
            <span>{readTime}</span>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-[#EAEAEA] leading-relaxed [&>p]:text-lg [&>p]:leading-[1.8]">
              {children}
            </div>
          </div>
          
          <div className="mt-16 border-t border-cyan-800/20 pt-8 text-sm text-gray-400">
            Published on {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </article>
    </ServicePageLayout>
  )
} 