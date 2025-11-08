
'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#projects', label: 'Projects' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${scrolled ? 'bg-white/70 nav-blur shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-px flex items-center justify-between py-3">
        <a href="#home" className="font-semibold text-brand-700">AKAEL</a>
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium hover:text-brand-700 transition-colors ${active===l.href ? 'text-brand-700' : 'text-gray-700'}`}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* simple anchor list for mobile */}
          <select className="border rounded px-2 py-1" value={active} onChange={e=>location.hash=e.target.value}>
            {links.map(l => (
              <option key={l.href} value={l.href}>{l.label}</option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  )
}
