'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import GradientButton from '@/components/UI/GradientButton'

const navigation = {
  main: [
    {
      name: 'Services',
      href: '#',
      megaMenu: [
        {
          title: 'Technology Services',
          items: [
            { name: 'Cloud Transformation', href: '/services/technology/cloud-transformation' },
            { name: 'AI & Automation', href: '/services/technology/ai-automation' },
            { name: 'Digital Engineering', href: '/services/technology/digital-engineering' },
            { name: 'Data Analytics', href: '/services/technology/data-analytics' },
          ],
        },
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Financial Services', href: '/services/industry/financial-services' },
            { name: 'Healthcare', href: '/services/industry/healthcare' },
            { name: 'Manufacturing', href: '/services/industry/manufacturing' },
            { name: 'Retail', href: '/services/industry/retail' },
          ],
        },
      ],
    },
    {
      name: 'Industries',
      href: '#',
      megaMenu: [
        {
          title: 'Financial Services',
          items: [
            { name: 'Banking & Capital Markets', href: '/industries/banking' },
            { name: 'Insurance', href: '/industries/insurance' },
            { name: 'Investment Management', href: '/industries/investment-management' },
          ],
        },
        {
          title: 'Other Industries',
          items: [
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Manufacturing', href: '/industries/manufacturing' },
            { name: 'Retail', href: '/industries/retail' },
            { name: 'Energy', href: '/industries/energy' },
          ],
        },
      ],
    },
    {
      name: 'Insights',
      href: '/insights',
    },
    {
      name: 'About',
      href: '/about',
    },
  ],
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Top Banner */}
      <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-black">
        <p>
          Discover how AI is transforming business{' '}
          <Link href="/services/technology/ai-automation" className="underline hover:opacity-80">
            Learn More →
          </Link>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-white transition-colors duration-200 hover:text-primary"
              >
                <Image
                  src="/logo.png"
                  alt="Synaptic Shift Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span>Synaptic Shift</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.main.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => setOpenMenu(item.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="group relative flex items-center text-gray-300 transition-colors duration-200 hover:text-white"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                      </span>
                      {item.megaMenu && (
                        <ChevronDownIcon
                          className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {item.megaMenu && openMenu === item.name && (
                      <div className="absolute -left-4 top-0 pt-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="w-screen max-w-md rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5"
                        >
                          <div className="grid grid-cols-2 gap-8">
                            {item.megaMenu.map((section) => (
                              <div key={section.title}>
                                <h3 className="text-sm font-semibold text-gray-900">
                                  {section.title}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="group relative text-sm text-gray-500"
                                      >
                                        <span className="relative">
                                          {subItem.name}
                                          <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-200 group-hover:w-full" />
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden space-x-4 md:flex">
              <Link href="/contact">
                <GradientButton className="text-sm">
                  Get Started
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 