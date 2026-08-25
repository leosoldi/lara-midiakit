import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#trabalhos', label: 'Meus conteúdos' },
  { href: '#dicas', label: 'Minhas dicas' },
  { href: '#processo', label: 'Como funciona' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-in">
        <a href="#topo" className="brand" aria-label={profile.nome}>
          <span>
            <b>{profile.nome}</b>
            <small>{profile.titulo}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Seções">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contato">Vamos trabalhar juntos?</a>
      </div>
    </motion.header>
  )
}
