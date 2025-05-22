"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Music } from "lucide-react"

export function AudioController() {
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const tracks = [
    { name: "Ambiente Relaxante", type: "ambient" },
    { name: "Música Alegre", type: "happy" },
    { name: "Sons da Natureza", type: "nature" },
  ]

  useEffect(() => {
    // Criar elemento de áudio
    audioRef.current = new Audio()
    audioRef.current.loop = true
    audioRef.current.volume = volume

    // Simular URL de áudio (em produção, usaria arquivos reais)
    audioRef.current.src = `/placeholder-audio-${tracks[currentTrack].type}.mp3`

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [currentTrack])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying && !isMuted) {
      audioRef.current.play().catch((e) => console.log("Erro ao reproduzir áudio:", e))
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, isMuted])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (isMuted && !isPlaying) {
      setIsPlaying(true)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    } else if (newVolume === 0 && !isMuted) {
      setIsMuted(true)
    }
  }

  const changeTrack = (index: number) => {
    setCurrentTrack(index)
    if (!isPlaying) {
      setIsPlaying(true)
      setIsMuted(false)
    }
  }

  return (
    <motion.div
      className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <motion.button
          className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX size={18} color="white" /> : <Volume2 size={18} color="white" />}
        </motion.button>

        <AnimatePresence>
          {!isMuted && (
            <motion.div
              className="flex items-center space-x-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-gray-200 rounded-full appearance-none"
                style={{
                  background: `linear-gradient(to right, #9333ea ${volume * 100}%, #e5e7eb ${volume * 100}%)`,
                }}
              />

              <div className="relative group">
                <motion.button
                  className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Music size={16} color="white" />
                </motion.button>

                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-2 hidden group-hover:block w-40">
                  <div className="text-xs font-medium text-gray-700 mb-1">Escolha uma trilha:</div>
                  {tracks.map((track, index) => (
                    <button
                      key={index}
                      className={`block w-full text-left text-xs py-1 px-2 rounded ${
                        currentTrack === index ? "bg-purple-100 text-purple-700" : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => changeTrack(index)}
                    >
                      {track.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
