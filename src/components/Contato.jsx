import Reveal from './Reveal'
import { profile, whatsappLink, mailtoLink } from '../data/profile'
import { IconArrow, IconInsta, IconMail, IconWhats } from './Icons'

export default function Contato() {
  return (
    <section id="contato" className="cta-wrap">
      <div className="shell">
        <Reveal y={40}>
          <div className="cta">
            <span className="eyebrow">Parcerias</span>
            <h2>
              Vamos trabalhar<br /><em>juntos?</em>
            </h2>
            <p>
              Sua marca merece um conteúdo que conecte, desperte interesse e valorize o
              seu produto. Estou pronta para criar conteúdos autênticos e estratégicos
              para a sua marca.
            </p>

            <div className="cta-actions">
              <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                <IconWhats /> Chamar no WhatsApp
              </a>
              <a className="btn btn-ghost" href={mailtoLink}>
                <IconMail /> Enviar e-mail
              </a>
              <a className="btn btn-ghost" href={profile.instagram} target="_blank" rel="noreferrer">
                <IconInsta /> {profile.arroba}
              </a>
            </div>

            <div>
              <a className="cta-mail" href={mailtoLink}>
                <IconMail style={{ width: 17, height: 17 }} />
                {profile.email}
                <IconArrow style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
