'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ArticleCard from '@/components/UI/ArticleCard'

const articles = [
  {
    title: "Smart Manufacturing: Industry 4.0",
    description: "Discover how IoT and automation are transforming manufacturing processes.",
    category: "Manufacturing",
    readTime: "4 min read",
    date: "2024-03-10",
    slug: "smart-manufacturing-industry-4"
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
    title: "Digital Twins in Modern Manufacturing",
    description: "How virtual replicas are revolutionizing production and maintenance.",
    category: "Technology",
    readTime: "8 min read",
    date: "2024-03-15",
    slug: "digital-twins-manufacturing"
  },
  {
    title: "AI-Powered Quality Control",
    description: "Leveraging machine learning for defect detection and quality assurance.",
    category: "Quality",
    readTime: "5 min read",
    date: "2024-03-05",
    slug: "ai-quality-control"
  },
  {
    title: "Sustainable Smart Factories",
    description: "Implementing eco-friendly practices in modern manufacturing facilities.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "2024-03-01",
    slug: "sustainable-smart-factories"
  },
  {
    title: "Predictive Maintenance Strategies",
    description: "Using data analytics to prevent equipment failures and optimize maintenance.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "2024-02-28",
    slug: "predictive-maintenance"
  },
  {
    title: "Supply Chain Optimization with AI",
    description: "How artificial intelligence is improving manufacturing supply chains.",
    category: "Supply Chain",
    readTime: "6 min read",
    date: "2024-02-25",
    slug: "supply-chain-ai"
  }
]

export default function ManufacturingInsights() {
  return (
    <ServicePageLayout
      title="Manufacturing Insights"
      subtitle="Exploring the latest trends and innovations in smart manufacturing"
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