"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface PetSelectorProps {
  onSelect: (pet: string) => void
}

export function PetSelector({ onSelect }: PetSelectorProps) {
  const [hoveredPet, setHoveredPet] = useState<string | null>(null)

  const pets = [
    { id: "dog", name: "Cachorro", description: "Leal e brincalhão, será seu companheiro fiel" },
    { id: "cat", name: "Gato", description: "Curioso e independente, com momentos de carinho" },
    { id: "bird", name: "Pássaro", description: "Alegre e musical, trazendo vida ao ambiente" },
    { id: "rabbit", name: "Coelho", description: "Calmo e fofo, perfeito para momentos tranquilos" },
  ]

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Escolha seu companheiro virtual</h2>
      <p className="text-center text-gray-600 mb-8">
        Seu pet virtual irá acompanhá-lo durante toda a sua jornada no PetVerse
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <motion.div
            key={pet.id}
            className="relative bg-gradient-to-b from-purple-50 to-blue-50 rounded-xl p-4 cursor-pointer flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredPet(pet.id)}
            onHoverEnd={() => setHoveredPet(null)}
            onClick={() => onSelect(pet.id)}
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={`/placeholder.svg?height=128&width=128&text=${pet.name}`}
                alt={pet.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-700">{pet.name}</h3>

            <AnimatePresence>
              {hoveredPet === pet.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-purple-600/90 to-blue-600/90 rounded-xl p-4 flex flex-col items-center justify-center text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
                  <p className="text-center text-sm">{pet.description}</p>
                  <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-full font-medium">
                    Selecionar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        Você poderá mudar seu companheiro virtual a qualquer momento nas configurações
      </p>
    </motion.div>
  )
}
