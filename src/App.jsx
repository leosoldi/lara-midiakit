import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Audiencia from './components/Audiencia'
import Parceiros from './components/Parceiros'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Trabalhos from './components/Trabalhos'
import Dicas from './components/Dicas'
import Processo from './components/Processo'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Dock from './components/Dock'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <>
      {/* fundo animado */}
      <div className="bg-decor" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      {/* barra de progresso de leitura */}
      <motion.div
        aria-hidden="true"
        style={{
          scaleX: progress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #FFB9D4, #8B3DFF)',
          zIndex: 80
        }}
      />

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Audiencia />
        <Parceiros />
        <Sobre />
        <Servicos />
        <Trabalhos />
        <Dicas />
        <Processo />
        <Contato />
      </main>

      <Footer />
      <Dock />
    </>
  )
}
