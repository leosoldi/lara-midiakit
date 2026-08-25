import { profile, whatsappLink, mailtoLink } from '../data/profile'
import { IconInsta, IconMail, IconWhats } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-in">
        <div>
          <div className="brand">
            <span>
              <b>{profile.nome}</b>
              <small>{profile.arroba} · {profile.local}</small>
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} {profile.nome} · Mídia kit · Parcerias por e-mail e WhatsApp
          </p>
        </div>

        <div className="socials">
          <a className="social wa" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <IconWhats />
          </a>
          <a className="social ig" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconInsta />
          </a>
          <a className="social" href={mailtoLink} aria-label="E-mail">
            <IconMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
