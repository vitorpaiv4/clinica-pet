"use client"

import { motion } from "framer-motion"
import { BlogPostCard } from "@/components/BlogPostCard"

export default function Blog() {
  const posts = [
    {
      title: "Cuidados essenciais com filhotes nos primeiros meses",
      excerpt:
        "Descubra os cuidados fundamentais para garantir a saúde e o desenvolvimento adequado do seu filhote nos primeiros meses de vida, desde a alimentação até a socialização.",
      image: "/placeholder.svg?height=192&width=384&text=Filhotes",
      date: "10/05/2023",
      author: "Dra. Vivian",
      category: "Cuidados",
      categoryColor: "bg-blue-500",
    },
    {
      title: "Alimentação natural para cães: benefícios e cuidados",
      excerpt:
        "A alimentação natural pode trazer diversos benefícios para a saúde do seu cão, mas é importante conhecer os cuidados necessários e como fazer a transição corretamente.",
      image: "/placeholder.svg?height=192&width=384&text=Alimentação",
      date: "22/04/2023",
      author: "Dr. Ricardo",
      category: "Nutrição",
      categoryColor: "bg-green-500",
    },
    {
      title: "Sinais de que seu pet pode estar com dor",
      excerpt:
        "Os animais tendem a esconder sinais de dor como mecanismo de defesa. Aprenda a identificar comportamentos sutis que podem indicar que seu pet está sofrendo.",
      image: "/placeholder.svg?height=192&width=384&text=Saúde",
      date: "05/04/2023",
      author: "Dra. Camila",
      category: "Saúde",
      categoryColor: "bg-red-500",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog PetLife</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dicas, informações e novidades sobre cuidados com pets para ajudar você a proporcionar a melhor qualidade de
            vida para seu amigo de quatro patas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogPostCard
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
                categoryColor={post.categoryColor}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            Ver todos os artigos
          </button>
        </motion.div>
      </div>
    </section>
  )
}
