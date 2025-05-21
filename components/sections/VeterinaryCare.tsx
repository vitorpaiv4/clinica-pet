"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function VeterinaryCare() {
  return (
    <section className="py-16 bg-[#e3f2fd]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#5e6472] mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Cuidado Veterinário de Qualidade
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p className="text-[#5e6472]" variants={fadeIn}>
              Nossa clínica veterinária é o local onde a paixão pelos animais se une à excelência em cuidados
              veterinários. Sob a liderança da Dra. Vivian, toda a nossa equipe, formada por profissionais
              comprometidos, oferecemos serviços de saúde e bem-estar para animais de estimação de todas as espécies.
              Venha conhecer nossas clínicas e desfrute da atenção personalizada e do carinho que seu pet merece.
            </motion.p>
            <motion.ul className="space-y-2 text-[#5e6472]" variants={staggerContainer}>
              {[
                "Consultas de rotina e exames de saúde abrangentes",
                "Vacinação e imunização",
                "Cirurgias e procedimentos veterinários",
                "Tratamento e controle de doenças",
                "Odontologia veterinária",
                "Atendimento de emergência 24 horas",
                "Nutrição e acompanhamento alimentar personalizado",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start" variants={fadeIn}>
                  <span className="text-[#f7cac9] mr-2">•</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="relative h-64 md:h-80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Image
              src="/image/Veterinarian with dog illustration.png"
              alt="Veterinarian with dog illustration"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
