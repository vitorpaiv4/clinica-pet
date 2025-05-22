"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className={`h-2 ${color}`} />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}>
            <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} />
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <button className={`mt-4 ${color} text-white px-4 py-2 rounded-md text-sm font-medium`}>Saiba mais</button>
      </div>
    </motion.div>
  )
}
