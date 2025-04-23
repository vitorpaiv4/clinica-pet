import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetLife - Clínica Veterinária e Pet Shop",
  description: "A PetLife é o seu refúgio de confiança para cuidar do bem-estar do seu pet. Oferecemos serviços veterinários completos, farmácia e pet shop com produtos de qualidade.",
  keywords: ["clínica veterinária", "pet shop", "farmácia veterinária", "cuidados com pets", "veterinário 24h"],
  authors: [{ name: "Vitor Paiva" }],
  openGraph: {
    title: "PetLife - Clínica Veterinária e Pet Shop",
    description: "Cuidando com amor, vivendo com alegria. PetLife, onde o seu pet é mais feliz!",
    url: "https://petlife.com.br",
    siteName: "PetLife",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
