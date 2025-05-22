"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/TestimonialCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)

  const testimonials = [
    {
      name: "Ana Silva",
      petName: "Max",
      petType: "Golden Retriever",
      image: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "A PetLife transformou a vida do meu cachorro! Após anos de problemas de saúde, a Dra. Vivian diagnosticou corretamente e agora ele está cheio de energia novamente. Atendimento excepcional!",
    },
    {
      name: "Carlos Mendes",
      petName: "Luna",
      petType: "Persa",
      image: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "Minha gata idosa recebe um tratamento VIP na PetLife. A equipe é extremamente atenciosa e carinhosa. Os serviços de farmácia também são ótimos, sempre encontro tudo o que preciso para ela.",
    },
    {
      name: "Juliana Costa",
      petName: "Thor",
      petType: "Bulldog Francês",
      image: "/placeholder.svg?height=48&width=48",
      rating: 4,
      text: "Excelente atendimento de emergência quando meu filhote teve uma reação alérgica. Rápidos, eficientes e muito profissionais. Recomendo a todos os donos de pets!",
    },
    {
      name: "Roberto Almeida",
      petName: "Nina",
      petType: "Shih Tzu",
      image: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "O serviço de banho e tosa é impecável! Minha Nina sempre volta cheirosa e linda. Os profissionais são muito cuidadosos e carinhosos com ela.",
    },
    {
      name: "Fernanda Lima",
      petName: "Simba",
      petType: "Maine Coon",
      image: "/placeholder.svg?height=48&width=48",
      rating: 5,
      text: "Meu gato tinha problemas dentários sérios e a equipe da PetLife cuidou dele com muita competência. Agora ele está saudável e comendo normalmente. Muito obrigada!",
    },
    {
      name: "Marcelo Santos",
      petName: "Pipoca",
      petType: "Coelho",
      image: "/placeholder.svg?height=48&width=48",
      rating: 4,
      text: "Encontrei na PetLife veterinários especializados em animais exóticos, o que é raro. Minha coelha recebeu um tratamento excelente e personalizado.",
    },
  ]

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de tutores que confiam na PetLife para cuidar de seus amados pets.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index + currentPage * itemsPerPage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  petName={testimonial.petName}
                  petType={testimonial.petType}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  text={testimonial.text}
                />
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100"
                aria-label="Página anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPage === i ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                  aria-label={`Página ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100"
                aria-label="Próxima página"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
