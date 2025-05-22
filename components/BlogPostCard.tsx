"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"

interface BlogPostCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  categoryColor: string
}

export function BlogPostCard({ title, excerpt, image, date, author, category, categoryColor }: BlogPostCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className={`absolute top-4 left-4 ${categoryColor} text-white text-xs font-medium px-2 py-1 rounded-full`}>
          {category}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button className="text-blue-500 font-medium hover:text-blue-700 transition-colors">Ler mais →</button>
      </div>
    </motion.div>
  )
}
