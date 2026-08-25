import { motion } from 'framer-motion'
import Reveal, { stagger, item } from './Reveal'
import { servicos } from '../data/profile'
import {
  IconVideo, IconBatom, IconCamera, IconBrilho, IconMegafone, IconCamadas
} from './Icons'

const icones = {
  video: IconVideo,
  batom: IconBatom,
  camera: IconCamera,
  brilho: IconBrilho,
  megafone: IconMegafone,
  camadas: IconCamadas
}

export default function Servicos() {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section id="servicos">
      <div className="shell">
        <Reveal><span className="eyebrow">Serviços</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="title">O que eu <em>entrego</em> pra sua marca</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead">
            Formatos pensados para gerar conexão real com quem assiste — e material
            pronto para você usar no feed, nos stories e nos anúncios.
          </p>
        </Reveal>

        <motion.div
          className="svc-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {servicos.map((s, i) => {
            const Icone = icones[s.icone]
            return (
              <motion.article className="svc" key={s.titulo} variants={item} onMouseMove={onMove}>
                <span className="svc-topo">
                  <span className="svc-ico">{Icone && <Icone />}</span>
                  <em className="svc-num">{String(i + 1).padStart(2, '0')}</em>
                </span>

                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>

                <span className="svc-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </span>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
