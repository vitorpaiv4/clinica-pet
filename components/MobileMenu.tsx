"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#b5d8eb] z-50 flex flex-col p-4"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end">
            <button onClick={onClose} className="text-white p-2" aria-label="Fechar menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6">
            <Link
              href="#"
              className="text-white text-xl hover:underline transition-all duration-300 hover:text-[#f8f9fa]"
              onClick={onClose}
            >
              Início
            </Link>
            <Link
              href="#"
              className="text-white text-xl hover:underline transition-all duration-300 hover:text-[#f8f9fa]"
              onClick={onClose}
            >
              Clínica
            </Link>
            <Link
              href="#"
              className="text-white text-xl hover:underline transition-all duration-300 hover:text-[#f8f9fa]"
              onClick={onClose}
            >
              Farmácia
            </Link>
            <Link
              href="#"
              className="text-white text-xl hover:underline transition-all duration-300 hover:text-[#f8f9fa]"
              onClick={onClose}
            >
              Doações
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
