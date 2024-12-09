'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ArticleCard from '@/components/UI/ArticleCard'

const articles = [
  {
    title: "From Frankencoders to Code Evolutionaries",
    description: "Learn how to evolve from a struggling coder to a tech innovator using AI tools like Cursor.",
    category: "AI & Development",
    readTime: "8 min read",
    date: "2024-03-15",
    slug: "frankencoder-to-evolutionary"
  },
  {
    title: "Unlocking Efficiency: The Power of Process Automation",
    description: "Discover how process automation streamlines workflows and transforms business operations.",
    category: "Automation",
    readTime: "8 min read",
    date: "2024-03-15",
    slug: "process-automation"
  },
  {
    title: "The Future of AI in Financial Services",
    description: "Explore how artificial intelligence is revolutionizing banking, investment, and risk management.",
    category: "AI & Finance",
    readTime: "5 min read",
    date: "2024-03-15",
    slug: "future-of-ai-in-financial-services"
  },
  {
    title: "Smart Manufacturing: Industry 4.0",
    description: "Discover how IoT and automation are transforming manufacturing processes.",
    category: "Manufacturing",
    readTime: "4 min read",
    date: "2024-03-10",
    slug: "smart-manufacturing-industry-4"
  },
  {
    title: "Cybersecurity in Banking",
    description: "Learn about the latest trends in financial cybersecurity and threat prevention.",
    category: "Security",
    readTime: "6 min read",
    date: "2024-03-05",
    slug: "cybersecurity-in-banking"
  }
]

export default function InsightsPage() {
  return (
    <ServicePageLayout
      title="Industry Insights"
      subtitle="Expert analysis and thought leadership on digital transformation"
      buttonText="Subscribe to Updates"
      animation={null}
    >
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}