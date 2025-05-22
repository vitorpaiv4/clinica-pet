"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Check } from "lucide-react"

export function AppointmentForm() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar os dados do formulário
    console.log("Dados do agendamento:", formData)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      petName: "",
      petType: "",
      ownerName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      reason: "",
    })
    setFormStep(1)
    setIsSubmitted(false)
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      formStep >= step ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`h-1 w-16 md:w-24 lg:w-32 ${formStep > step ? "bg-blue-500" : "bg-gray-200"}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {formStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações do Pet</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Pet
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: Rex"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="petType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Pet
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                    <option value="bird">Pássaro</option>
                    <option value="rodent">Roedor</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Responsável
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
                >
                  Próximo
                </button>
              </div>
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contato</h3>

              <div className="space-y-4">
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
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
                >
                  Próximo
                </button>
              </div>
            </motion.div>
          )}

          {formStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Agendamento</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Data
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Horário
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock size={16} className="text-gray-400" />
                    </div>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Selecione um horário</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Motivo da Consulta
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare size={16} className="text-gray-400" />
                    </div>
                    <textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      rows={3}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descreva brevemente o motivo da consulta"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md"
                >
                  Voltar
                </button>
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
                  Agendar Consulta
                </button>
              </div>
            </motion.div>
          )}
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Agendamento Realizado!</h3>
          <p className="text-gray-600 mb-6">
            Sua consulta foi agendada com sucesso. Enviaremos uma confirmação para o seu email.
          </p>
          <button onClick={resetForm} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Fazer Novo Agendamento
          </button>
        </motion.div>
      )}
    </div>
  )
}
