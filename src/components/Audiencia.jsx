import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { audiencia } from '../data/profile'
import { IconInsta, IconPlay } from './Icons'

const ease = [0.22, 1, 0.36, 1]
const icones = { insta: IconInsta, play: IconPlay }

const R = 42
const VOLTA = 2 * Math.PI * R

/** Conta de 0 até o valor quando o card entra na tela. */
function useContador(alvo, ativo, duracao = 1500) {
  const reduzir = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!ativo) return
    // quem pediu menos movimento ve o numero final direto
    if (reduzir) { setN(alvo); return }

    let raf
    let inicio = null
    const passo = (t) => {
      if (inicio === null) inicio = t
      const p = Math.min((t - inicio) / duracao, 1)
      setN(alvo * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [ativo, alvo, duracao, reduzir])

  return n
}

function Metrica({ m, index }) {
  const ref = useRef(null)
  const naTela = useInView(ref, { once: true, amount: 0.45 })

  // rede de seguranca: se o observer nunca disparar (navegador sem suporte,
  // aba em segundo plano na hora certa), o numero NAO pode ficar preso em 0 —
  // seria "+0 mil seguidores" na cara de quem esta avaliando uma parceria.
  const [forcado, setForcado] = useState(typeof IntersectionObserver === 'undefined')
  useEffect(() => {
    const t = setTimeout(() => setForcado(true), 5000)
    return () => clearTimeout(t)
  }, [])

  const visivel = naTela || forcado
  const n = useContador(m.valor, visivel)
  const Icone = icones[m.icone]
  const gradId = `aud-grad-${index}`

  return (
    <motion.div
      className="aud"
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visivel ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
    >
      <div className="aud-anel">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFB9D4" />
              <stop offset="1" stopColor="#8B3DFF" />
            </linearGradient>
          </defs>
          <circle className="aud-trilho" cx="50" cy="50" r={R} />
          <motion.circle
            className="aud-arco"
            cx="50" cy="50" r={R}
            stroke={`url(#${gradId})`}
            strokeDasharray={VOLTA}
            initial={{ strokeDashoffset: VOLTA }}
            animate={visivel ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.15 + index * 0.12, ease }}
          />
        </svg>
        <span className="aud-icone">{Icone && <Icone />}</span>
      </div>

      <div className="aud-dados">
        <strong className="aud-num">
          <span>{m.prefixo}</span>{Math.round(n)}
          <em>{m.unidade}</em>
        </strong>
        <b className="aud-label">{m.label}</b>
        <p>{m.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Audiencia() {
  return (
    <section id="audiencia" className="audiencia">
      <div className="shell">
        <Reveal><span className="eyebrow">Audiência</span></Reveal>

        <div className="aud-grid">
          {audiencia.metricas.map((m, i) => (
            <Metrica key={m.label} m={m} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="aud-nota">Números atualizados em {audiencia.atualizadoEm}.</p>
        </Reveal>
      </div>
    </section>
  )
}
