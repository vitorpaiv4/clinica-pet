"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, MessageSquare, Send, Check } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar os dados do formulário
    console.log("Dados do contato:", formData)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsSubmitted(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Entre em Contato</h3>
          <p className="text-gray-600 mb-6">
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={16} className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare size={16} className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              <Send size={16} className="mr-2" />
              Enviar Mensagem
            </button>
          </div>
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h3>
          <p className="text-gray-600 mb-6">Agradecemos seu contato. Nossa equipe responderá o mais breve possível.</p>
          <button onClick={resetForm} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Enviar Nova Mensagem
          </button>
        </motion.div>
      )}
    </div>
  )
}
