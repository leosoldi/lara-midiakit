import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { dicas, dicasCategorias, profile } from '../data/profile'
import { IconArrow, IconInsta } from './Icons'

const ease = [0.22, 1, 0.36, 1]

function Dica({ d, index, aberta, onToggle }) {
  return (
    <motion.div
      className={`dica${aberta ? ' aberta' : ''}`}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: Math.min(index, 4) * 0.06, ease }}
    >
      <button className="dica-head" onClick={onToggle} aria-expanded={aberta}>
        <span className="dica-ico" aria-hidden="true">{d.icone}</span>
        <span className="dica-txt">
          <small>{d.cat}</small>
          <b>{d.titulo}</b>
        </span>
        <span className="dica-mais" aria-hidden="true">
          <motion.i animate={{ rotate: aberta ? 45 : 0 }} transition={{ duration: 0.3, ease }}>+</motion.i>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {aberta && (
          <motion.div
            className="dica-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease }}
          >
            <p>{d.texto}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Dicas() {
  const [cat, setCat] = useState('Todas')
  const [aberta, setAberta] = useState(0)

  const lista = cat === 'Todas' ? dicas : dicas.filter((d) => d.cat === cat)

  const trocarCategoria = (c) => {
    setCat(c)
    setAberta(0)
  }

  return (
    <section id="dicas" className="dicas">
      <div className="shell">
        <Reveal><span className="eyebrow">Minhas dicas</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="title">Dicas <em>práticas</em> de quem testa de verdade</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead">
            O que eu aprendi testando produto atrás de produto — sem enrolação e sem
            prometer milagre. Toque para ler cada dica.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="dica-filtros" role="tablist" aria-label="Categorias de dicas">
            {dicasCategorias.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={cat === c ? 'on' : ''}
                onClick={() => trocarCategoria(c)}
              >
                {cat === c && (
                  <motion.span
                    layoutId="dica-pill"
                    className="tab-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="tab-label">{c}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div className="dica-list" layout>
          <AnimatePresence mode="popLayout">
            {lista.map((d, i) => (
              <Dica
                key={d.titulo}
                d={d}
                index={i}
                aberta={aberta === i}
                onToggle={() => setAberta(aberta === i ? -1 : i)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <a className="dica-follow" href={profile.instagram} target="_blank" rel="noreferrer">
            <IconInsta />
            <span>
              <b>Tem dica nova toda semana no meu Instagram</b>
              <small>{profile.arroba}</small>
            </span>
            <IconArrow />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
