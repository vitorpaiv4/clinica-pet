"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  petName: string
  petType: string
  image: string
  rating: number
  text: string
}

export function TestimonialCard({ name, petName, petType, image, rating, text }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">
              {petName}, {petType}
            </p>
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
          ))}
        </div>

        <p className="text-gray-600 italic">{text}</p>
      </div>
    </motion.div>
  )
}
