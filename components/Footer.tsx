"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#b5d8eb] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PetLife</h3>
            <p>
              Cuidando com amor, vivendo com alegria.
              <br />
              PetLife, onde o seu pet é mais feliz!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Clínica", "Farmácia", "Doações"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Encontre-nos</h3>
            <ul className="space-y-2">
              <li>WhatsApp: (22) 98765-4321</li>
              <li>Email: contato@petlife.com.br</li>
              <li>Endereço: Av. 7 de Setembro, nº 42, Centro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-4 text-sm text-center">Desenvolvido por Vitor Paiva</div>
      </div>
    </footer>
  )
}
