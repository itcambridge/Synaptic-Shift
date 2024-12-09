'use client'

import Navbar from '@/components/Navigation/Navbar'
import GradientButton from '@/components/UI/GradientButton'
import ParticleBackground from '@/components/Background/ParticleBackground'
import GridPattern from '@/components/Background/GridPattern'
import { ReactNode } from 'react'

interface ServiceItem {
  title: string
  description: string
}

interface IndustryPageLayoutProps {
  title: string
  subtitle: string
  animation: ReactNode
  buttonText: string
  children: ReactNode
  services?: ServiceItem[]
}

export default function IndustryPageLayout({
  title,
  subtitle,
  animation,
  buttonText,
  children,
  services = [
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that reduce manual intervention and increase efficiency."
    },
    {
      title: "Quality Control",
      description: "Implement AI-powered quality control systems that ensure consistent product quality and reduce defects."
    },
    {
      title: "Predictive Maintenance",
      description: "Utilize IoT sensors and machine learning to predict equipment failures before they occur."
    },
    {
      title: "Supply Chain Optimization",
      description: "Enhance supply chain visibility and efficiency with real-time tracking and intelligent forecasting."
    },
    {
      title: "Energy Management",
      description: "Optimize energy consumption with smart monitoring and automated control systems."
    },
    {
      title: "Workforce Empowerment",
      description: "Equip your workforce with digital tools and insights for improved decision-making."
    }
  ]
}: IndustryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <GridPattern />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),rgba(0,0,0,0))]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-104px)] pt-[104px]">
          {/* Animation Container */}
          <div className="relative mx-auto h-[400px] max-w-[600px]">
            {animation}
          </div>
          
          {/* Content */}
          <div className="text-center mt-8">
            <h1 className="text-5xl font-bold text-primary">{title}</h1>
            <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
            <GradientButton className="mt-8">
              {buttonText}
            </GradientButton>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-24 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-16">Our Services</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="rounded-lg border border-cyan-800/20 bg-black/30 p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Content */}
        {children}
      </div>
    </div>
  )
} 