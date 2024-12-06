'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

            {/* Desktop Navigation */}
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
                      <div className="absolute -left-4 top-0 z-10 pt-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="w-screen max-w-md rounded-lg border border-cyan-800/20 bg-black/50 p-4 backdrop-blur-md"
                        >
                          <div className="grid grid-cols-2 gap-8">
                            {item.megaMenu.map((section) => (
                              <div key={section.title}>
                                <h3 className="text-sm font-semibold text-cyan-300">
                                  {section.title}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {section.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="group relative text-sm text-gray-300 hover:text-white"
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
              <Link href="/assessment">
                <GradientButton>
                  Get Started
                </GradientButton>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black/50 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navigation.main.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-300 hover:text-white"
                    >
                      <span>{item.name}</span>
                      {item.megaMenu && (
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform duration-200 ${
                            openMenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {item.megaMenu && openMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-2"
                      >
                        {item.megaMenu.map((section) => (
                          <div key={section.title} className="pt-2">
                            <h3 className="text-sm font-semibold text-cyan-300">
                              {section.title}
                            </h3>
                            <ul className="mt-2 space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    className="block text-sm text-gray-400 hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/assessment" onClick={() => setIsMobileMenuOpen(false)}>
                    <GradientButton className="w-full">
                      Get Started
                    </GradientButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 