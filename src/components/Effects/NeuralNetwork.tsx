'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  connections: number[]
}

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(384, 384)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 50
    const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff })
    
    for (let i = 0; i < nodeCount; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      nodes.push({
        position,
        connections: []
      })

      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial)
      mesh.position.copy(position)
      scene.add(mesh)

      // Connect to nearest nodes
      for (let j = 0; j < i; j++) {
        const distance = position.distanceTo(nodes[j].position)
        if (distance < 3) {
          nodes[i].connections.push(j)
          nodes[j].connections.push(i)

          const lineGeometry = new THREE.BufferGeometry().setFromPoints([
            position,
            nodes[j].position
          ])
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0.2
          })
          const line = new THREE.Line(lineGeometry, lineMaterial)
          scene.add(line)
        }
      }
    }

    // Add particles
    const particleCount = 100
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleSpeeds = new Float32Array(particleCount)
    const particlePaths = new Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const startNode = Math.floor(Math.random() * nodeCount)
      const endNode = nodes[startNode].connections[
        Math.floor(Math.random() * nodes[startNode].connections.length)
      ]
      
      if (endNode !== undefined) {
        particlePaths[i] = {
          start: nodes[startNode].position,
          end: nodes[endNode].position,
          progress: 0
        }
        particleSpeeds[i] = 0.01 + Math.random() * 0.02
      }
    }

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Camera position
    camera.position.z = 15

    // Animation
    let frame = 0
    const animate = () => {
      frame++
      
      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        if (particlePaths[i]) {
          particlePaths[i].progress += particleSpeeds[i]
          
          if (particlePaths[i].progress >= 1) {
            const currentNode = nodes.findIndex(
              node => node.position === particlePaths[i].end
            )
            const nextNode = nodes[currentNode].connections[
              Math.floor(Math.random() * nodes[currentNode].connections.length)
            ]
            
            if (nextNode !== undefined) {
              particlePaths[i] = {
                start: nodes[currentNode].position,
                end: nodes[nextNode].position,
                progress: 0
              }
            }
          }

          const position = new THREE.Vector3().lerpVectors(
            particlePaths[i].start,
            particlePaths[i].end,
            particlePaths[i].progress
          )

          particlePositions[i * 3] = position.x
          particlePositions[i * 3 + 1] = position.y
          particlePositions[i * 3 + 2] = position.z
        }
      }

      particleGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(particlePositions, 3)
      )

      // Rotate scene slowly
      scene.rotation.y = frame * 0.001
      scene.rotation.x = Math.sin(frame * 0.001) * 0.2

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      containerRef.current?.removeChild(renderer.domElement)
      scene.clear()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative h-96 w-96"
      style={{ opacity: 0.7 }}
    />
  )
} 