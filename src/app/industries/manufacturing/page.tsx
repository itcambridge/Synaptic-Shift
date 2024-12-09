'use client'

import ManufacturingFlow from '@/components/Effects/ManufacturingFlow'
import IndustryPageLayout from '@/components/Layout/IndustryPageLayout'

export default function ManufacturingPage() {
  return (
    <IndustryPageLayout
      title="Manufacturing Excellence"
      subtitle="Transform manufacturing with smart automation and data-driven optimization"
      buttonText="Explore Manufacturing Solutions"
      animation={<ManufacturingFlow />}
    >
      {/* Rest of the page content */}
    </IndustryPageLayout>
  )
} 