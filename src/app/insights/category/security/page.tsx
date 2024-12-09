'use client'

import { motion } from 'framer-motion'
import ServicePageLayout from '@/components/Layout/ServicePageLayout'
import ArticleCard from '@/components/UI/ArticleCard'

const articles = [
  {
    title: "Cybersecurity in Banking",
    description: "Learn about the latest trends in financial cybersecurity and threat prevention.",
    category: "Finance",
    readTime: "6 min read",
    date: "2024-03-05",
    slug: "cybersecurity-in-banking"
  },
  {
    title: "Zero Trust Architecture",
    description: "Understanding the principles and implementation of zero trust security models.",
    category: "Architecture",
    readTime: "7 min read",
    date: "2024-03-15",
    slug: "zero-trust-architecture"
  },
  {
    title: "AI in Threat Detection",
    description: "How artificial intelligence is revolutionizing cybersecurity threat detection.",
    category: "AI Security",
    readTime: "8 min read",
    date: "2024-03-15",
    slug: "ai-threat-detection"
  },
  {
    title: "Cloud Security Best Practices",
    description: "Essential security measures for protecting cloud-based infrastructure and data.",
    category: "Cloud",
    readTime: "8 min read",
    date: "2024-02-25",
    slug: "cloud-security-practices"
  },
  {
    title: "Blockchain Security",
    description: "Exploring security considerations in blockchain implementations and smart contracts.",
    category: "Blockchain",
    readTime: "6 min read",
    date: "2024-02-20",
    slug: "blockchain-security"
  },
  {
    title: "IoT Security Challenges",
    description: "Addressing security risks in the growing Internet of Things ecosystem.",
    category: "IoT",
    readTime: "5 min read",
    date: "2024-02-15",
    slug: "iot-security-challenges"
  }
]

export default function SecurityInsights() {
  return (
    <ServicePageLayout
      title="Security Insights"
      subtitle="Stay informed about the latest cybersecurity trends, threats, and best practices"
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