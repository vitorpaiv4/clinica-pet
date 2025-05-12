import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const metadata = {
  metadataBase: new URL('https://clinica-pet.vercel.app'), // ou seu domínio
  // ...outros metadados...
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add the following line to install eslint-config-next as a dev dependency
// npm install --save-dev eslint-config-next
