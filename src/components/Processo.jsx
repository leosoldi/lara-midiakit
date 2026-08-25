import { motion } from 'framer-motion'
import Reveal, { stagger, item } from './Reveal'
import { passos } from '../data/profile'

export default function Processo() {
  return (
    <section id="processo">
      <div className="shell">
        <Reveal><span className="eyebrow">Como funciona</span></Reveal>
        <Reveal delay={0.06}>
          <h2 className="title">Do briefing à <em>entrega</em></h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lead">Um processo simples e transparente, do primeiro contato ao arquivo final na sua mão.</p>
        </Reveal>

        <motion.div
          className="steps"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          {passos.map((p) => (
            <motion.div className="step" key={p.n} variants={item}>
              <em>{p.n}</em>
              <b>{p.t}</b>
              <p>{p.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
