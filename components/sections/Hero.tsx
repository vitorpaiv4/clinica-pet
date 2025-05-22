"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function Hero() {
  return (
    <section className="bg-[#f8f9fa] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div className="relative h-64 md:h-80" initial="hidden" animate="visible" variants={fadeIn}>
          <Image
            src="/image/Person with dog illustration.png"
            alt="Person with dog illustration"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div className="space-y-4" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 className="text-2xl md:text-3xl font-bold text-[#5e6472]" variants={fadeIn}>
            Garanta uma vida longa e cheia de alegria para o seu melhor amigo
          </motion.h1>
          <motion.p className="text-[#5e6472]" variants={fadeIn}>
            A PetLife é o seu refúgio de confiança para cuidar do bem-estar do seu pet. Com profissionais dedicados e
            serviços abrangentes, oferecemos uma experiência acolhedora e personalizada garantindo o bem-estar, a saúde
            e a felicidade dos seus animais de estimação.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 pt-2" variants={fadeIn}>
            <button className="bg-[#f7cac9] hover:bg-[#f4afab] text-white px-6 py-2 rounded-md transition-colors duration-300">
              Marque uma consulta
            </button>
            <button className="bg-white text-[#f7cac9] border border-[#f7cac9] px-6 py-2 rounded-md hover:bg-gray-50 transition-colors duration-300">
              Conheça nossa clínica
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
