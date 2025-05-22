"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Season = "spring" | "summer" | "autumn" | "winter"

interface ThemeContextType {
  currentTheme: Season
  setTheme: (theme: Season) => void
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "spring",
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

interface SeasonalThemeProviderProps {
  children: ReactNode
}

export function SeasonalThemeProvider({ children }: SeasonalThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Season>("spring")

  // Detectar estação do ano automaticamente com base na data atual
  useEffect(() => {
    const detectSeason = () => {
      const now = new Date()
      const month = now.getMonth()

      // Hemisfério Norte
      if (month >= 2 && month <= 4) return "spring" // Março a Maio
      if (month >= 5 && month <= 7) return "summer" // Junho a Agosto
      if (month >= 8 && month <= 10) return "autumn" // Setembro a Novembro
      return "winter" // Dezembro a Fevereiro

      // Para Hemisfério Sul, inverter as estações
      // if (month >= 2 && month <= 4) return "autumn" // Março a Maio
      // if (month >= 5 && month <= 7) return "winter" // Junho a Agosto
      // if (month >= 8 && month <= 10) return "spring" // Setembro a Novembro
      // return "summer" // Dezembro a Fevereiro
    }

    setCurrentTheme(detectSeason())
  }, [])

  const setTheme = (theme: Season) => {
    setCurrentTheme(theme)
  }

  return <ThemeContext.Provider value={{ currentTheme, setTheme }}>{children}</ThemeContext.Provider>
}
