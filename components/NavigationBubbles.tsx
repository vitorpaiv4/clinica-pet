"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Calendar, ShoppingBag, Heart, Settings, Info, MessageCircle, X } from "lucide-react"

export function NavigationBubbles() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const menuItems = [
    { id: "home", icon: Home, label: "Início", color: "#e91e63" },
    { id: "appointments", icon: Calendar, label: "Consultas", color: "#9c27b0" },
    { id: "shop", icon: ShoppingBag, label: "Loja", color: "#673ab7" },
    { id: "health", icon: Heart, label: "Saúde", color: "#3f51b5" },
    { id: "settings", icon: Settings, label: "Configurações", color: "#2196f3" },
    { id: "about", icon: Info, label: "Sobre", color: "#03a9f4" },
    { id: "contact", icon: MessageCircle, label: "Contato", color: "#00bcd4" },
  ]

  const toggleMenu = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  return (
    <div className="fixed top-4 right-4 z-10">
      <div className="relative">
        {/* Menu principal */}
        <motion.button
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setActiveMenu(activeMenu ? null : "main")}
        >
          {activeMenu ? (
            <X size={24} />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 Z"
                fill="white"
              />
              <path
                d="M12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 Z"
                fill="white"
              />
              <path
                d="M12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 Z"
                fill="white"
              />
            </svg>
          )}
        </motion.button>

        {/* Bolhas de navegação */}
        <AnimatePresence>
          {activeMenu === "main" && (
            <motion.div
              className="absolute top-0 right-0 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col items-end space-y-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.05 },
                    }}
                    exit={{
                      opacity: 0,
                      x: 20,
                      transition: { delay: (menuItems.length - index - 1) * 0.05 },
                    }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.05 + 0.1 },
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </motion.div>

                    <motion.button
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleMenu(item.id)}
                    >
                      <item.icon size={18} color="white" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submenus */}
        <AnimatePresence>
          {activeMenu && activeMenu !== "main" && (
            <motion.div
              className="absolute top-0 right-0 mt-16 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-64"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex items-center mb-3">
                {menuItems.find((item) => item.id === activeMenu)?.icon && (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                    style={{ backgroundColor: menuItems.find((item) => item.id === activeMenu)?.color }}
                  >
                    {React.createElement(menuItems.find((item) => item.id === activeMenu)?.icon as React.ElementType, {
                      size: 16,
                      color: "white",
                    })}
                  </div>
                )}
                <h3 className="font-semibold text-gray-800">
                  {menuItems.find((item) => item.id === activeMenu)?.label}
                </h3>
              </div>

              <div className="space-y-2">
                {activeMenu === "appointments" && (
                  <>
                    <p className="text-sm text-gray-600">Agende uma consulta para seu pet</p>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium">
                      Nova Consulta
                    </button>
                    <div className="text-xs text-gray-500 mt-2">Próxima consulta: Não há consultas agendadas</div>
                  </>
                )}

                {activeMenu === "shop" && (
                  <>
                    <p className="text-sm text-gray-600">Explore nossa loja virtual</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {["Ração", "Brinquedos", "Acessórios", "Medicamentos"].map((category) => (
                        <button
                          key={category}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-2 rounded text-xs"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {activeMenu === "health" && (
                  <>
                    <p className="text-sm text-gray-600">Acompanhe a saúde do seu pet</p>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <div className="text-xs font-medium">Última consulta</div>
                      <div className="text-xs text-gray-500">Não há registros</div>
                    </div>
                    <button className="w-full bg-blue-500 text-white py-1 rounded-md text-xs font-medium mt-2">
                      Ver Histórico Completo
                    </button>
                  </>
                )}

                {(activeMenu === "settings" ||
                  activeMenu === "about" ||
                  activeMenu === "contact" ||
                  activeMenu === "home") && (
                  <p className="text-sm text-gray-600">Esta funcionalidade estará disponível em breve!</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
