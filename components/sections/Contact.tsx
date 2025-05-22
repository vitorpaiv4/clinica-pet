"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fale Conosco</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos sempre disponíveis para ajudar você e seu pet. Entre em contato conosco para tirar dúvidas, agendar
            consultas ou conhecer mais sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Endereço</h4>
                    <p className="text-gray-600 mt-1">Av. 7 de Setembro, nº 42, Centro</p>
                    <p className="text-gray-600">Rio de Janeiro, RJ - CEP 20000-000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Telefones</h4>
                    <p className="text-gray-600 mt-1">(21) 3333-4444</p>
                    <p className="text-gray-600">WhatsApp: (21) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600 mt-1">contato@petlife.com.br</p>
                    <p className="text-gray-600">atendimento@petlife.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Clock size={20} className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Horário de Funcionamento</h4>
                    <p className="text-gray-600 mt-1">Segunda a Sexta: 8h às 19h</p>
                    <p className="text-gray-600">Sábados: 8h às 14h</p>
                    <p className="text-gray-600">Emergência: 24 horas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-100 rounded-lg p-4">
                <h4 className="font-medium text-gray-800 mb-2">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
