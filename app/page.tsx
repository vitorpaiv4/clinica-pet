import Header from "@/components/Header"
import { Footer } from "@/components/Footer"
import Hero from "@/components/sections/Hero"
import VeterinaryCare from "@/components/sections/VeterinaryCare"
import PetShop from "@/components/sections/PetShop"
import Services from "@/components/sections/Services"
import Appointment from "@/components/sections/Appointment"
import Testimonials from "@/components/sections/Testimonials"
import Blog from "@/components/sections/Blog"
import Contact from "@/components/sections/Contact"
import FAQ from "@/components/sections/FAQ"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <VeterinaryCare />
        <PetShop />
        <Appointment />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  )
}
