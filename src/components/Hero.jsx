import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { profile, whatsappLink, nichos } from '../data/profile'
import { IconArrow, IconInsta, IconPin, IconSpark, IconWhats } from './Icons'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yPhoto = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])
  const scalePhoto = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08])

  return (
    <section className="hero" id="topo" ref={ref}>
      <div className="shell hero-grid">
        {/* ── coluna texto ── */}
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <IconSpark style={{ width: 13, height: 13 }} /> Mídia Kit 2026
          </motion.span>

          <h1>
            <motion.em
              style={{ display: 'block', fontStyle: 'normal' }}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease }}
            >
              Lara
            </motion.em>
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.36, ease }}
            >
              Azevedo
            </motion.span>
          </h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            <span className="pill violet">UGC Creator</span>
            <span className="pill">Criadora de conteúdo</span>
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
          >
            Maquiagem, autocuidado e skincare com reviews reais e dicas práticas de
            produtos que valem a pena. ✨
          </motion.p>

          <motion.div
            className="hero-meta"
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } } }}
          >
            <motion.span className="chip" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
              <IconPin style={{ width: 15, height: 15, color: '#8B3DFF' }} /> {profile.local}
            </motion.span>
            <motion.a
              className="chip" href={profile.instagram} target="_blank" rel="noreferrer"
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            >
              <IconInsta style={{ width: 15, height: 15, color: '#DD2A7B' }} /> {profile.arroba}
            </motion.a>
            {nichos.slice(0, 3).map((n) => (
              <motion.span key={n} className="chip" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
                {n}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
          >
            <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              <IconWhats /> Fechar parceria
            </a>
            <a className="btn btn-ghost" href="#contato">
              Ver contatos <IconArrow />
            </a>
          </motion.div>
        </div>

        {/* ── coluna foto ── */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <motion.div className="photo-frame" style={{ y: yPhoto }}>
            <motion.img
              src="./media/capa.jpg"
              alt="Lara Azevedo, criadora de conteúdo UGC"
              style={{ scale: scalePhoto }}
              loading="eager"
            />
            <div className="photo-badge">
              <span>
                <b>{profile.arroba}</b>
                <small>Beleza · Skincare · Maquiagem</small>
              </span>
              <span className="live"><i className="live-dot" /> UGC</span>
            </div>
          </motion.div>

          <motion.div
            className="float-tag t1"
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
          >
            🎀 Reviews reais
          </motion.div>
          <motion.div
            className="float-tag t2"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease }}
          >
            💄 Dicas práticas
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
