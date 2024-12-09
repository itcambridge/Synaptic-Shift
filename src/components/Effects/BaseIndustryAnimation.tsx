'use client'

interface BaseIndustryAnimationProps {
  height?: string
  width?: string
  className?: string
  children: React.ReactNode
}

export default function BaseIndustryAnimation({
  height = 'h-[400px]',
  width = 'w-[600px]',
  className = '',
  children
}: BaseIndustryAnimationProps) {
  return (
    <div className="absolute left-1/2 -top-80 -translate-x-1/2">
      <div className="scale-75">
        <div className={`relative ${height} ${width} ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
} 