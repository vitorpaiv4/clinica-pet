"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface PetCompanionProps {
  petType: string
}

export function PetCompanion({ petType }: PetCompanionProps) {
  const controls = useAnimation()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isFollowing, setIsFollowing] = useState(false)
  const [mood, setMood] = useState("happy") // happy, sleepy, excited, hungry
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  const containerRef = useRef<HTMLDivElement>(null)

  // Configurações específicas para cada tipo de pet
  const petConfig = {
    dog: {
      color: "#8d6e63",
      size: 60,
      speed: 0.1,
      animations: {
        idle: {
          y: [0, -5, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
        },
        excited: {
          rotate: [-5, 5, -5],
          scale: [1, 1.1, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.5 },
        },
        sleepy: {
          opacity: [1, 0.7, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 3 },
        },
      },
    },
    cat: {
      color: "#78909c",
      size: 50,
      speed: 0.08,
      animations: {
        idle: {
          y: [0, -3, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 3 },
        },
        excited: {
          rotate: [-3, 3, -3],
          scale: [1, 1.05, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.7 },
        },
        sleepy: {
          opacity: [1, 0.8, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 4 },
        },
      },
    },
    bird: {
      color: "#4fc3f7",
      size: 40,
      speed: 0.15,
      animations: {
        idle: {
          y: [0, -8, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
        },
        excited: {
          rotate: [-10, 10, -10],
          scale: [1, 1.15, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.4 },
        },
        sleepy: {
          opacity: [1, 0.7, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2.5 },
        },
      },
    },
    rabbit: {
      color: "#bcaaa4",
      size: 45,
      speed: 0.07,
      animations: {
        idle: {
          y: [0, -2, 0],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2.5 },
        },
        excited: {
          rotate: [-2, 2, -2],
          scale: [1, 1.08, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.6 },
        },
        sleepy: {
          opacity: [1, 0.85, 1],
          transition: { repeat: Number.POSITIVE_INFINITY, duration: 3.5 },
        },
      },
    },
  }

  const config = petConfig[petType as keyof typeof petConfig]

  // Seguir o cursor quando clicado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isFollowing || !containerRef.current) return

      const container = containerRef.current.getBoundingClientRect()
      const targetX = e.clientX - container.left - config.size / 2
      const targetY = e.clientY - container.top - config.size / 2

      setPosition((prev) => ({
        x: prev.x + (targetX - prev.x) * config.speed,
        y: prev.y + (targetY - prev.y) * config.speed,
      }))
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isFollowing, config.size, config.speed])

  // Alternar seguimento com clique
  const toggleFollowing = () => {
    setIsFollowing(!isFollowing)
    setMood(isFollowing ? "happy" : "excited")
    setLastInteraction(Date.now())
  }

  // Mudar humor com base no tempo desde a última interação
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const timeSinceInteraction = now - lastInteraction

      if (timeSinceInteraction > 30000) {
        // 30 segundos
        setMood("sleepy")
      } else if (timeSinceInteraction > 15000) {
        // 15 segundos
        setMood("happy")
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [lastInteraction])

  // Aplicar animações com base no humor
  useEffect(() => {
    if (mood === "excited") {
      controls.start(config.animations.excited)
    } else if (mood === "sleepy") {
      controls.start(config.animations.sleepy)
    } else {
      controls.start(config.animations.idle)
    }
  }, [mood, controls, config.animations])

  // Renderizar o pet de acordo com o tipo
  const renderPet = () => {
    switch (petType) {
      case "dog":
        return (
          <svg width={config.size} height={config.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M4,10.5 C4,8.5 5.5,7 8,7 C9,7 10,7.5 10.5,8 L13.5,8 C14,7.5 15,7 16,7 C18.5,7 20,8.5 20,10.5 C20,12 19,13 18,13.5 L18,19 C18,20.5 16.5,22 15,22 L9,22 C7.5,22 6,20.5 6,19 L6,13.5 C5,13 4,12 4,10.5 Z"
              fill={config.color}
            />
            <circle cx="9" cy="11" r="1" fill="black" />
            <circle cx="15" cy="11" r="1" fill="black" />
            <path
              d="M12,16 C13,16 14,15.5 14,15 C14,14.5 13,14 12,14 C11,14 10,14.5 10,15 C10,15.5 11,16 12,16 Z"
              fill="black"
            />
            <path d="M8,7 C8,4 9,2 12,2 C15,2 16,4 16,7" stroke={config.color} strokeWidth="2" />
          </svg>
        )
      case "cat":
        return (
          <svg width={config.size} height={config.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12,22 C7,22 4,19 4,14 C4,11 5,8 7,6 C8,5 9,4 12,4 C15,4 16,5 17,6 C19,8 20,11 20,14 C20,19 17,22 12,22 Z"
              fill={config.color}
            />
            <path d="M8,13 L8,14" stroke="black" strokeWidth="1" strokeLinecap="round" />
            <path d="M16,13 L16,14" stroke="black" strokeWidth="1" strokeLinecap="round" />
            <path
              d="M12,16 C13,16 14,15.5 14,15 C14,14.5 13,14 12,14 C11,14 10,14.5 10,15 C10,15.5 11,16 12,16 Z"
              fill="black"
            />
            <path d="M6,8 L3,5" stroke={config.color} strokeWidth="1" />
            <path d="M18,8 L21,5" stroke={config.color} strokeWidth="1" />
            <path d="M12,4 C12,4 13,2 12,1" stroke={config.color} strokeWidth="1" />
          </svg>
        )
      case "bird":
        return (
          <svg width={config.size} height={config.size} viewBox="0 0 24 24" fill="none">
            <path d="M12,20 C8,20 5,17 5,13 C5,9 8,6 12,6 C16,6 19,9 19,13 C19,17 16,20 12,20 Z" fill={config.color} />
            <path d="M12,6 C12,6 12,4 12,3 C12,2 14,1 16,2 C18,3 16,6 16,6" fill={config.color} />
            <path
              d="M10,11 C10.5,11 11,11.5 11,12 C11,12.5 10.5,13 10,13 C9.5,13 9,12.5 9,12 C9,11.5 9.5,11 10,11 Z"
              fill="black"
            />
            <path d="M14,15 C14,15 13,16 12,16 C11,16 10,15 10,15" stroke="black" strokeWidth="0.5" />
            <path d="M12,20 L12,22" stroke={config.color} strokeWidth="1" />
            <path d="M10,20 L8,22" stroke={config.color} strokeWidth="1" />
            <path d="M14,20 L16,22" stroke={config.color} strokeWidth="1" />
          </svg>
        )
      case "rabbit":
        return (
          <svg width={config.size} height={config.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12,22 C8,22 5,19 5,15 C5,11 8,8 12,8 C16,8 19,11 19,15 C19,19 16,22 12,22 Z"
              fill={config.color}
            />
            <path d="M8,3 C8,3 8,8 12,8 C16,8 16,3 16,3 C16,3 16,1 12,1 C8,1 8,3 8,3 Z" fill={config.color} />
            <path
              d="M9,12 C9.5,12 10,12.5 10,13 C10,13.5 9.5,14 9,14 C8.5,14 8,13.5 8,13 C8,12.5 8.5,12 9,12 Z"
              fill="black"
            />
            <path
              d="M15,12 C15.5,12 16,12.5 16,13 C16,13.5 15.5,14 15,14 C14.5,14 14,13.5 14,13 C14,12.5 14.5,12 15,12 Z"
              fill="black"
            />
            <path
              d="M12,16 C13,16 14,15.5 14,15 C14,14.5 13,14 12,14 C11,14 10,14.5 10,15 C10,15.5 11,16 12,16 Z"
              fill="black"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute cursor-pointer pointer-events-auto"
        style={{
          x: position.x,
          y: position.y,
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
        }}
        animate={controls}
        onClick={toggleFollowing}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {renderPet()}

        {/* Balão de humor */}
        <motion.div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-2 py-1 text-xs whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isFollowing ? 1 : 0,
            scale: isFollowing ? 1 : 0,
          }}
        >
          {mood === "happy" && "Estou feliz! 😊"}
          {mood === "excited" && "Vamos brincar! 🎾"}
          {mood === "sleepy" && "Estou com sono... 😴"}
        </motion.div>
      </motion.div>
    </div>
  )
}
