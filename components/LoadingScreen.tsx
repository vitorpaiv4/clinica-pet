"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-blue-400 to-purple-600 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-64 h-64"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: loadingProgress / 100 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              d="M100,50 C120,40 140,60 130,80 C150,70 170,90 160,110 C180,100 190,130 170,140 C190,160 170,180 150,170 C160,190 130,200 110,180 C100,200 70,190 60,170 C40,180 20,160 30,140 C10,130 30,100 50,110 C40,90 60,70 80,80 C70,60 90,40 100,50 Z"
              fill="#ffffff"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </svg>
        </div>
      </motion.div>
      <motion.h1
        className="text-4xl font-bold text-white mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        PetVerse
      </motion.h1>
      <motion.p
        className="text-white mt-4 text-center max-w-md px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Preparando seu mundo pet interativo...
      </motion.p>
      <motion.div
        className="mt-8 bg-white/20 w-64 h-2 rounded-full overflow-hidden"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.p
        className="text-white mt-2 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {Math.round(loadingProgress)}%
      </motion.p>
    </motion.div>
  )
}
