"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

export default function PetShop() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#5e6472] mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Venha conferir o nosso petshop e farmácia
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative h-64 md:h-80 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Image src="/image/Pharmacy illustration.png" alt="Pharmacy illustration" fill className="object-contain" />
          </motion.div>
          <motion.div
            className="space-y-4 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-[#5e6472]">
              Além dos cuidados veterinários, a PetLife também conta com um completo petshop e farmácia. Nosso petshop
              oferece uma ampla seleção de produtos de alta qualidade, desde alimentos balanceados e petiscos gostosos
              até brinquedos divertidos e acessórios elegantes para o seu pet. Na nossa farmácia, você encontrará uma
              variedade de medicamentos, produtos de cuidados e suplementos recomendados pelos nossos veterinários,
              garantindo que o bem-estar e a saúde do seu amado pet estejam sempre em boas mãos. Tudo o que você precisa
              para cuidar e mimar o seu pet está aqui. No nosso petshop e farmácia, você terá a mesma dedicação e
              qualidade que nos tornou referência na área veterinária.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
