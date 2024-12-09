'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ArticleCard from '@/components/UI/ArticleCard'

const articles = [
  {
    title: "The Future of AI in Financial Services",
    description: "Explore how artificial intelligence is revolutionizing banking, investment, and risk management.",
    category: "AI & Finance",
    readTime: "5 min read",
    date: "2024-03-15",
    slug: "future-of-ai-in-financial-services"
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
    title: "AI-Powered Risk Assessment in Banking",
    description: "How machine learning is transforming credit scoring and risk evaluation in modern banking.",
    category: "Risk Management",
    readTime: "8 min read",
    date: "2024-03-15",
    slug: "ai-risk-assessment-banking"
  },
  {
    title: "Algorithmic Trading: The Next Generation",
    description: "Discover how AI is reshaping trading strategies and market analysis.",
    category: "Trading",
    readTime: "7 min read",
    date: "2024-03-08",
    slug: "algorithmic-trading-next-gen"
  },
  {
    title: "AI in Fraud Detection and Prevention",
    description: "Learn how financial institutions are using AI to combat fraud and enhance security.",
    category: "Security",
    readTime: "4 min read",
    date: "2024-03-05",
    slug: "ai-fraud-detection"
  },
  {
    title: "The Rise of AI Financial Advisors",
    description: "Exploring the impact of robo-advisors and AI-driven wealth management solutions.",
    category: "Wealth Management",
    readTime: "5 min read",
    date: "2024-03-01",
    slug: "ai-financial-advisors"
  },
  {
    title: "Predictive Analytics in Financial Planning",
    description: "How AI is helping businesses and individuals make better financial decisions.",
    category: "Planning",
    readTime: "6 min read",
    date: "2024-02-28",
    slug: "predictive-analytics-finance"
  }
]

export default function AIFinanceInsights() {
  return (
    <ServicePageLayout
      title="AI in Finance Insights"
      subtitle="Exploring the intersection of artificial intelligence and financial services"
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