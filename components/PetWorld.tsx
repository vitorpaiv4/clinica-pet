"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./SeasonalThemeProvider"

export function PetWorld() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { currentTheme } = useTheme()
  const [currentLocation, setCurrentLocation] = useState("clinic")

  // Elementos interativos no mundo
  const locations = {
    clinic: { name: "Clínica", color: "#e0f7fa" },
    petshop: { name: "Pet Shop", color: "#fff8e1" },
    park: { name: "Parque Pet", color: "#e8f5e9" },
    grooming: { name: "Banho & Tosa", color: "#f3e5f5" },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamanho do canvas
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawWorld()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Desenhar o mundo pet
    function drawWorld() {
      if (!ctx) return

      // Limpar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Cor de fundo baseada na localização atual
      const location = locations[currentLocation as keyof typeof locations]
      ctx.fillStyle = location.color
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Desenhar elementos do mundo de acordo com a localização
      switch (currentLocation) {
        case "clinic":
          drawClinic(ctx, canvas.width, canvas.height)
          break
        case "petshop":
          drawPetshop(ctx, canvas.width, canvas.height)
          break
        case "park":
          drawPark(ctx, canvas.width, canvas.height)
          break
        case "grooming":
          drawGrooming(ctx, canvas.width, canvas.height)
          break
      }

      // Aplicar efeito de tema sazonal
      applySeasonalEffect(ctx, canvas.width, canvas.height)
    }

    // Funções para desenhar cada localização
    function drawClinic(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Desenhar elementos da clínica
      // Piso
      ctx.fillStyle = "#f5f5f5"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Balcão de recepção
      ctx.fillStyle = "#a1887f"
      ctx.fillRect(width * 0.1, height * 0.5, width * 0.3, height * 0.2)

      // Computador na recepção
      ctx.fillStyle = "#263238"
      ctx.fillRect(width * 0.15, height * 0.45, width * 0.1, height * 0.05)

      // Cadeiras de espera
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = "#90a4ae"
        ctx.fillRect(width * (0.6 + i * 0.1), height * 0.6, width * 0.08, height * 0.05)
      }

      // Porta do consultório
      ctx.fillStyle = "#5d4037"
      ctx.fillRect(width * 0.8, height * 0.4, width * 0.1, height * 0.3)

      // Janelas
      ctx.fillStyle = "#bbdefb"
      ctx.fillRect(width * 0.2, height * 0.2, width * 0.15, height * 0.15)
      ctx.fillRect(width * 0.5, height * 0.2, width * 0.15, height * 0.15)
    }

    function drawPetshop(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Desenhar elementos do pet shop
      // Piso
      ctx.fillStyle = "#ffe0b2"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Prateleiras
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = "#8d6e63"
        ctx.fillRect(width * 0.1, height * (0.2 + i * 0.15), width * 0.8, height * 0.03)

        // Produtos nas prateleiras
        for (let j = 0; j < 8; j++) {
          ctx.fillStyle = ["#ef9a9a", "#ce93d8", "#90caf9", "#a5d6a7"][Math.floor(Math.random() * 4)]
          ctx.fillRect(width * (0.12 + j * 0.1), height * (0.15 + i * 0.15), width * 0.06, height * 0.05)
        }
      }

      // Balcão de caixa
      ctx.fillStyle = "#bcaaa4"
      ctx.fillRect(width * 0.7, height * 0.5, width * 0.2, height * 0.2)
    }

    function drawPark(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Desenhar elementos do parque pet
      // Grama
      ctx.fillStyle = "#81c784"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Céu
      ctx.fillStyle = "#bbdefb"
      ctx.fillRect(0, 0, width, height * 0.7)

      // Sol
      ctx.fillStyle = "#ffeb3b"
      ctx.beginPath()
      ctx.arc(width * 0.8, height * 0.2, width * 0.05, 0, Math.PI * 2)
      ctx.fill()

      // Árvores
      for (let i = 0; i < 3; i++) {
        // Tronco
        ctx.fillStyle = "#8d6e63"
        ctx.fillRect(width * (0.2 + i * 0.3), height * 0.5, width * 0.03, height * 0.2)

        // Copa
        ctx.fillStyle = "#66bb6a"
        ctx.beginPath()
        ctx.arc(width * (0.215 + i * 0.3), height * 0.45, width * 0.08, 0, Math.PI * 2)
        ctx.fill()
      }

      // Brinquedos para pets
      ctx.fillStyle = "#f06292"
      ctx.beginPath()
      ctx.arc(width * 0.3, height * 0.65, width * 0.02, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#4fc3f7"
      ctx.fillRect(width * 0.5, height * 0.65, width * 0.1, height * 0.05)
    }

    function drawGrooming(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Desenhar elementos do banho & tosa
      // Piso
      ctx.fillStyle = "#e1bee7"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Banheiras
      for (let i = 0; i < 2; i++) {
        ctx.fillStyle = "#b2ebf2"
        ctx.beginPath()
        ctx.ellipse(width * (0.3 + i * 0.4), height * 0.5, width * 0.1, height * 0.07, 0, 0, Math.PI * 2)
        ctx.fill()

        // Água
        ctx.fillStyle = "#4dd0e1"
        ctx.beginPath()
        ctx.ellipse(width * (0.3 + i * 0.4), height * 0.5, width * 0.08, height * 0.05, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      // Mesa de tosa
      ctx.fillStyle = "#9e9e9e"
      ctx.fillRect(width * 0.7, height * 0.5, width * 0.2, height * 0.1)

      // Espelhos
      ctx.fillStyle = "#e0f7fa"
      ctx.fillRect(width * 0.2, height * 0.2, width * 0.2, height * 0.2)
      ctx.fillRect(width * 0.6, height * 0.2, width * 0.2, height * 0.2)

      // Produtos de higiene
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = ["#ce93d8", "#9fa8da", "#80deea"][Math.floor(Math.random() * 3)]
        ctx.fillRect(width * (0.1 + i * 0.05), height * 0.3, width * 0.03, height * 0.05)
      }
    }

    function applySeasonalEffect(ctx: CanvasRenderingContext2D, width: number, height: number) {
      // Aplicar efeitos visuais baseados no tema sazonal
      switch (currentTheme) {
        case "spring":
          // Adicionar flores flutuantes
          for (let i = 0; i < 15; i++) {
            const x = Math.random() * width
            const y = Math.random() * height * 0.5
            const size = width * 0.01

            ctx.fillStyle = ["#f8bbd0", "#c5e1a5", "#fff59d"][Math.floor(Math.random() * 3)]
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()
          }
          break

        case "summer":
          // Adicionar efeito de calor/brilho
          ctx.fillStyle = "rgba(255, 236, 179, 0.2)"
          ctx.fillRect(0, 0, width, height)
          break

        case "autumn":
          // Adicionar folhas caindo
          for (let i = 0; i < 20; i++) {
            const x = Math.random() * width
            const y = Math.random() * height
            const size = width * 0.01

            ctx.fillStyle = ["#ffab91", "#ffcc80", "#e6ee9c"][Math.floor(Math.random() * 3)]
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + size, y + size)
            ctx.lineTo(x, y + size * 2)
            ctx.lineTo(x - size, y + size)
            ctx.closePath()
            ctx.fill()
          }
          break

        case "winter":
          // Adicionar flocos de neve
          for (let i = 0; i < 30; i++) {
            const x = Math.random() * width
            const y = Math.random() * height
            const size = width * 0.005

            ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()
          }

          // Adicionar efeito de névoa
          ctx.fillStyle = "rgba(236, 239, 241, 0.3)"
          ctx.fillRect(0, 0, width, height)
          break
      }
    }

    // Animação
    let animationFrame: number

    function animate() {
      drawWorld()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [currentLocation, currentTheme])

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location)
  }

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {Object.entries(locations).map(([key, location]) => (
          <motion.button
            key={key}
            className={`px-4 py-2 rounded-full font-medium ${
              currentLocation === key ? "bg-purple-600 text-white" : "bg-white/80 text-purple-700 hover:bg-purple-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLocationChange(key)}
          >
            {location.name}
          </motion.button>
        ))}
      </div>
    </>
  )
}
