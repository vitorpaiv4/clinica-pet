"use client"

import { motion } from "framer-motion"
import { AppointmentForm } from "@/components/AppointmentForm"
import Image from "next/image"

export default function Appointment() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Agende uma Consulta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Marque uma consulta para seu pet de forma rápida e fácil. Nossa equipe está pronta para atendê-lo com todo o
            cuidado e atenção que seu amigo merece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/image/Veterinarian with dog illustration.png"
                alt="Veterinário atendendo um cachorro"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AppointmentForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
