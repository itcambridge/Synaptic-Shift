'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface CloudEffectProps {
  className?: string
}

export default function CloudEffect({ className = '' }: CloudEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    if (!showParticles) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      life: number
      hue: number
    }> = []

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2
      const radius = 60 + Math.random() * 40
      const hue = Math.random() * 30 + 180
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4 + 0.1,
        life: Math.random() * 1 + 0.5,
        hue,
      }
    }

    for (let i = 0; i < 30; i++) {
      particles.push(createParticle())
    }

    let lastTime = performance.now()
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const baseGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 30,
        canvas.width / 2, canvas.height / 2, 150
      )
      baseGlow.addColorStop(0, 'rgba(0, 255, 255, 0.08)')
      baseGlow.addColorStop(1, 'rgba(0, 255, 255, 0)')
      
      ctx.globalCompositeOperation = 'screen'
      ctx.fillStyle = baseGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        
        const dx = canvas.width / 2 - particle.x
        const dy = canvas.height / 2 - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance > 100) {
          particle.speedX += (dx / distance) * 0.01
          particle.speedY += (dy / distance) * 0.01
        }
        
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        particle.speedX += (Math.random() - 0.5) * 0.03
        particle.speedY += (Math.random() - 0.5) * 0.03
        
        particle.speedX *= 0.99
        particle.speedY *= 0.99
        
        particle.life -= deltaTime
        
        if (particle.life <= 0) {
          particles.splice(i, 1)
          particles.push(createParticle())
          continue
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        const opacity = (particle.opacity * particle.life * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 75%, ${opacity})`
        ctx.fill()
        
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 50) {
              ctx.beginPath()
              ctx.strokeStyle = `hsla(${particle.hue}, 90%, 75%, ${0.05 * (1 - distance / 50)})`
              ctx.lineWidth = 0.3
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [showParticles])

  return (
    <div className={`relative ${className}`}>
      <motion.canvas
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: showParticles ? 0.8 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '400px', height: '400px' }}
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
        onAnimationComplete={() => {
          setTimeout(() => setShowParticles(true), 200)
        }}
      >
        <Image
          src="/Cloud-removebg-preview.png"
          alt="Cloud Effect"
          width={200}
          height={200}
          className="relative z-10 h-auto w-auto"
          priority
        />
      </motion.div>
    </div>
  )
} 