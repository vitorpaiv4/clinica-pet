"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ServiceCard"

export default function Services() {
  const services = [
    {
      title: "Consultas de Rotina",
      description: "Acompanhamento regular da saúde do seu pet com exames preventivos e orientações personalizadas.",
      icon: "/icons/stethoscope.svg",
      color: "bg-blue-500",
    },
    {
      title: "Vacinação",
      description: "Proteção completa com calendário vacinal atualizado para todas as espécies e idades.",
      icon: "/icons/syringe.svg",
      color: "bg-green-500",
    },
    {
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos realizados com equipamentos modernos e equipe especializada.",
      icon: "/icons/scalpel.svg",
      color: "bg-purple-500",
    },
    {
      title: "Odontologia",
      description: "Cuidados completos com a saúde bucal, desde limpezas até tratamentos mais complexos.",
      icon: "/icons/tooth.svg",
      color: "bg-pink-500",
    },
    {
      title: "Exames Laboratoriais",
      description: "Diagnósticos precisos com resultados rápidos para melhor tratamento do seu pet.",
      icon: "/icons/microscope.svg",
      color: "bg-yellow-500",
    },
    {
      title: "Emergência 24h",
      description: "Atendimento de urgência disponível todos os dias, a qualquer hora.",
      icon: "/icons/ambulance.svg",
      color: "bg-red-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços veterinários para garantir a saúde e o bem-estar do seu pet em todas
            as fases da vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
