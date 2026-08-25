import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { videos, fotos } from '../data/profile'
import { IconSoundOff, IconSoundOn } from './Icons'

const ease = [0.22, 1, 0.36, 1]

/** Vídeo vertical que só toca quando está visível na tela. */
function Reel({ v, index }) {
  const ref = useRef(null)
  const [muted, setMuted] = useState(true)

  // iOS só permite autoplay inline se o atributo "muted" existir no parse do DOM,
  // e o React aplica isso só como propriedade — por isso forçamos o atributo aqui.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.setAttribute("muted", "")
    el.muted = true

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const p = el.play()
          if (p && p.catch) p.catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // sincroniza o botão de som com o elemento
  useEffect(() => {
    const el = ref.current
    if (el) el.muted = muted
  }, [muted])

  return (
    <motion.div
      className="reel"
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <video
        ref={ref}
        src={v.src}
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        aria-label={v.titulo}
      />
      <div className="reel-veil" />
      <button
        className="reel-mute"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? 'Ativar som' : 'Desativar som'}
      >
        {muted ? <IconSoundOff /> : <IconSoundOn />}
      </button>
      <div className="reel-info">
        <small>{v.tag}</small>
        <b>{v.titulo}</b>
      </div>
    </motion.div>
  )
}

function Foto({ f, index }) {
  return (
    <motion.div
      className="reel"
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <img src={f.src} alt={f.titulo} loading="lazy" />
      <div className="reel-veil" />
      <div className="reel-info">
        <small>Foto · UGC</small>
        <b>{f.titulo}</b>
      </div>
    </motion.div>
  )
}

export default function Trabalhos() {
  const [aba, setAba] = useState('videos')

  return (
    <section id="trabalhos">
      <div className="shell">
        <Reveal><span className="eyebrow">Meus conteúdos</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="title">Trabalhos <em>feitos</em></h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead">
            Uma amostra dos vídeos e fotos que produzo. Toque no ícone de som para
            ouvir o áudio de cada vídeo.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="tabs" role="tablist" aria-label="Tipo de conteúdo">
            {[
              { id: 'videos', label: `Vídeos (${videos.length})` },
              { id: 'fotos', label: `Fotos (${fotos.length})` }
            ].map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={aba === t.id}
                className={aba === t.id ? 'on' : ''}
                onClick={() => setAba(t.id)}
              >
                {aba === t.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="tab-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="tab-label">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={aba}
            className="reel-grid"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
          >
            {aba === 'videos'
              ? videos.map((v, i) => <Reel key={v.src} v={v} index={i} />)
              : fotos.map((f, i) => <Foto key={f.src} f={f} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
