'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ArticleCardProps {
  title: string
  description: string
  category: string
  readTime: string
  date: string
  slug: string
}

export default function ArticleCard({
  title,
  description,
  category,
  readTime,
  date,
  slug
}: ArticleCardProps) {
  return (
    <Link href={`/insights/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-lg border border-cyan-800/20 bg-black/30 p-6 backdrop-blur-sm hover:border-cyan-800/40 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm text-cyan-300">
            <span>{category}</span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400">{description}</p>
          
          <div className="mt-auto pt-4 text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  )
} 