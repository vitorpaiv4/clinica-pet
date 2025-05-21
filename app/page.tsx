"use client"

import { ResponsiveHeader } from "@/components/ResponsiveHeader"
import { Footer } from "@/components/Footer"
import Hero from "@/components/sections/Hero"
import VeterinaryCare from "@/components/sections/VeterinaryCare"
import PetShop from "@/components/sections/PetShop"
import FAQ from "@/components/sections/FAQ"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LoadingScreen />
      <ResponsiveHeader />
      <main className="flex-grow">
        <Hero />
        <VeterinaryCare />
        <PetShop />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  )
}
