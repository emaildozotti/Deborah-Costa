import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511999999999?text=Olá Deborah, vi seu site e quero agendar minha sessão de reprogramação'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'O Método', href: '#metodo' },
    { label: 'Sobre Deborah', href: '#sobre' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-teal-deep shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-offwhite text-xl font-bold tracking-wide hover:text-amber-warm transition-colors"
          aria-label="Deborah Costa — início"
        >
          Deborah Costa
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-offwhite/80 text-sm font-medium hover:text-offwhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-amber-warm text-offwhite font-body font-semibold text-sm px-6 py-3 rounded-btn hover:bg-amber-warm/90 transition-colors"
        >
          Agendar Sessão
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-offwhite p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-teal-deep border-t border-offwhite/10 px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-offwhite/80 text-base font-medium hover:text-offwhite transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center bg-amber-warm text-offwhite font-body font-semibold text-sm px-6 py-3 rounded-btn hover:bg-amber-warm/90 transition-colors"
            >
              Agendar Sessão
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
