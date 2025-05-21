"use client"

import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5522987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg z-10"
      aria-label="Contato via WhatsApp"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-circle"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    </motion.a>
  )
}
