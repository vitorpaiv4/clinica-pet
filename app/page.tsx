"use client"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Hero } from "./components/sections/Hero"
import { VeterinaryCare } from "./components/sections/VeterinaryCare"
import { PetShop } from "./components/sections/PetShop"
import { FAQ } from "./components/sections/FAQ"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <VeterinaryCare />
        <PetShop />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
