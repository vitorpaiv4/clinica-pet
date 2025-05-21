"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { MobileMenu } from "./MobileMenu"

export function ResponsiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#b5d8eb] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          PetLife
        </Link>
        <nav className="hidden md:flex space-x-6" aria-label="Menu principal">
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Início
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Clínica
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Farmácia
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Doações
          </Link>
        </nav>
        <button className="md:hidden text-white" aria-label="Abrir menu" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
