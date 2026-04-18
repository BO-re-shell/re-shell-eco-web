import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/home', label: 'Home' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/team', label: 'The Team' },
    { to: '/data-request', label: 'Data Request' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            alt="Re-shell logo"
            className="h-16 w-auto object-contain"
            src="/images/environmental/re-shell-logo.png"
          />
          <span className="font-headline text-2xl font-bold text-stone-900">Re-shell</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-x-12">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline text-lg tracking-tight transition-colors ${
                location.pathname === link.to
                  ? 'text-stone-900'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <Link
            to="/partner-with-us"
            className="bg-primary text-on-primary px-6 py-2 rounded-sm font-label text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-stone-900 transition-transform duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-900 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-stone-900 transition-transform duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100 px-8 py-6 flex flex-col gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-headline text-xl tracking-tight transition-colors ${
                location.pathname === link.to
                  ? 'text-stone-900'
                  : 'text-stone-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
