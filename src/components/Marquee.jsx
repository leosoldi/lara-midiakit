import { nichos } from '../data/profile'

export default function Marquee() {
  const linha = (
    <div aria-hidden="true">
      {nichos.map((n) => (
        <span key={n}>{n} <i>✦</i></span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <div className="marquee-track">
        {linha}
        {linha}
      </div>
    </div>
  )
}
