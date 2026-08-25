import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal, { stagger, item } from './Reveal'
import { parceiros } from '../data/profile'
import { IconArrow } from './Icons'

function Parceiro({ p }) {
  // se o arquivo do logo nao existir em public/media/, cai na letra inicial
  const [semLogo, setSemLogo] = useState(!p.logo)
  const temLogo = !!p.logo && !semLogo

  return (
    <motion.a
      className="parc"
      href={p.url}
      target="_blank"
      rel="noreferrer"
      variants={item}
    >
      <span className={`parc-mark${temLogo ? ' com-logo' : ''}`}>
        {temLogo ? (
          <img src={p.logo} alt={p.nome} onError={() => setSemLogo(true)} />
        ) : (
          <span aria-hidden="true">{p.inicial}</span>
        )}
      </span>

      <span className="parc-body">
        <small>{p.categoria}</small>
        <b>{p.nome}</b>
        <p>{p.descricao}</p>
        <span className="parc-cta">{p.cta} <IconArrow /></span>
      </span>
    </motion.a>
  )
}

export default function Parceiros() {
  return (
    <section id="parceiros" className="parceiros">
      <div className="shell">
        <Reveal><span className="eyebrow">Parceiros</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="title">Marcas com quem eu <em>trabalho</em></h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead">
            Marcas que confiam no meu conteúdo — e que você também pode conhecer.
          </p>
        </Reveal>

        <motion.div
          className="parc-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {parceiros.map((p) => (
            <Parceiro key={p.nome} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
