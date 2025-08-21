"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export function AnimatedName() {
  const mountRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const animationIdRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(true)

  // Typing animation state
  const fullText = "Muhammad Hassaan Abrar"
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const handleTyping = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1)

      setDisplayedText(updatedText)

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }

      setTypingSpeed(isDeleting ? 50 : 100)
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting])

  // Responsive show/hide logic
  useEffect(() => {
    const checkVisibility = () => {
      if (typeof window !== "undefined") {
        setIsVisible(window.innerWidth >= 768) // only show animation if ≥768px
      }
    }

    checkVisibility()
    window.addEventListener("resize", checkVisibility)
    return () => window.removeEventListener("resize", checkVisibility)
  }, [])

  // THREE.js Animation
  useEffect(() => {
    if (!isVisible || !mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight || 200

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    rendererRef.current = renderer

    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 50
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: "#FF6B47",
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    const ringGeometry = new THREE.RingGeometry(2, 2.1, 32)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#FF6B47",
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    scene.add(ring)

    camera.position.z = 5

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.01
      particlesMesh.rotation.x += 0.005
      ring.rotation.z += 0.02
      ring.scale.setScalar(1 + Math.sin(Date.now() * 0.001) * 0.1)
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      const newWidth = mountRef.current?.clientWidth || 300
      const newHeight = mountRef.current?.clientHeight || 200
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isVisible])

  return (
    <div className="relative w-full sm:h-[200px] overflow-hidden">
      {/* Conditionally render background animation on md+ */}
      {isVisible && (
        <div
          ref={mountRef}
          className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Animated Text */}
      <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight relative z-10 text-white">
        I'm{" "}
        <span className="bg-gradient-to-r from-[#FF6B47] via-[#ffffff] to-[#FF6B47] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          {displayedText}
          <span className="inline-block w-[1ch] animate-blink">|</span>
        </span>
      </h1>

      {/* Blink Animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  )
}