import { motion } from 'framer-motion'
import Reveal, { stagger, item } from './Reveal'
import { diferenciais } from '../data/profile'

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="shell about-grid">
        <Reveal>
          <div className="about-photo">
            <img src="./media/foto-2.jpg" alt="Lara Azevedo gravando conteúdo de beleza" loading="lazy" />
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <span className="eyebrow">Sobre mim</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="title">
              Conteúdo que <em>conecta</em><br />e faz querer testar.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="about-card" style={{ marginTop: 26 }}>
              <h3>Quem eu sou</h3>
              <p>
                Sou Larissa Azevedo, criadora de conteúdo UGC especializada em beleza,
                maquiagem e skincare. Produzo conteúdos autênticos, criativos e estratégicos,
                destacando produtos de forma natural e profissional para aproximar marcas
                do seu público.
              </p>

              <h3>O que eu faço</h3>
              <p>
                Transformo produtos em conteúdos que despertam interesse, conexão e vontade
                de experimentar. Crio vídeos UGC autênticos e envolventes para marcas de
                beleza, maquiagem e skincare. ✨
              </p>
            </div>
          </Reveal>

          <motion.div
            className="stats"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {diferenciais.map((d) => (
              <motion.div className="stat" key={d.label} variants={item}>
                <b>{d.numero}</b>
                <strong>{d.label}</strong>
                <small>{d.desc}</small>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
