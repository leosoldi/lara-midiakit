import { motion } from 'framer-motion'
import { profile, whatsappLink, mailtoLink } from '../data/profile'
import { IconInsta, IconMail, IconWhats } from './Icons'

/** Barra fixa de contato — só aparece no mobile. */
export default function Dock() {
  return (
    <motion.div
      className="dock"
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="d-wa" href={whatsappLink} target="_blank" rel="noreferrer">
        <IconWhats /> Fechar parceria
      </a>
      <a className="d-ig" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <IconInsta />
      </a>
      <a className="d-mail" href={mailtoLink} aria-label="E-mail">
        <IconMail />
      </a>
    </motion.div>
  )
}
