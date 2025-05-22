import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#212529] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          PetLife
        </Link>
        <nav className="hidden md:flex space-x-6" aria-label="Menu principal">
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Início
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Clínica
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Farmácia
          </Link>
          <Link href="#" className="hover:underline transition-all duration-300 hover:text-[#f8f9fa]">
            Doações
          </Link>
        </nav>
        <button className="md:hidden text-white" aria-label="Abrir menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}
