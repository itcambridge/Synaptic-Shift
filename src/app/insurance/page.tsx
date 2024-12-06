'use client'

import ServicePageLayout from '@/components/ServicePageLayout'
import InsuranceIconography from '@/components/Effects/InsuranceIconography'

export default function InsurancePage() {
  return (
    <ServicePageLayout
      title="Insurance"
      subtitle="Transforming Insurance Operations"
      description="Revolutionize your insurance processes with AI-driven automation and intelligent decision support systems. Our solutions streamline claims processing, risk assessment, and customer service while ensuring compliance and reducing operational costs."
      animationComponent={<InsuranceIconography />}
    />
  )
} 