export const IconWhats = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
  </svg>
)

export const IconInsta = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true" {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

export const IconMail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" />
    <path d="m3.5 7 7.35 5.2a2 2 0 0 0 2.3 0L20.5 7" />
  </svg>
)

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconPin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const IconSoundOn = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>
)

export const IconSoundOff = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M11 5 6.5 9H3v6h3.5L11 19z" />
    <path d="m16 9.5 5 5M21 9.5l-5 5" />
  </svg>
)

export const IconSpark = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.5c.6 3.9 2.6 6 6.5 6.6-3.9.6-5.9 2.6-6.5 6.5-.6-3.9-2.6-5.9-6.5-6.5 3.9-.6 5.9-2.7 6.5-6.6zM18.5 15c.3 2 1.3 3 3.3 3.3-2 .3-3 1.3-3.3 3.2-.3-1.9-1.3-2.9-3.2-3.2 1.9-.3 2.9-1.3 3.2-3.3z" />
  </svg>
)

/* ── icones de linha dos servicos ─────────────────────────── */
const linha = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true'
}

export const IconVideo = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <rect x="2.5" y="5.5" width="13.5" height="13" rx="3.5" />
    <path d="m16 10.4 4.1-2.5a.9.9 0 0 1 1.4.8v6.6a.9.9 0 0 1-1.4.8L16 13.6z" />
  </svg>
)

export const IconBatom = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <path d="M9.4 11V8.4a1 1 0 0 1 .5-.9l3.6-2.1a1 1 0 0 1 1.5.9V11" />
    <rect x="8.6" y="11" width="6.8" height="2.7" rx=".9" />
    <path d="M9.2 13.7h5.6V19a2 2 0 0 1-2 2h-1.6a2 2 0 0 1-2-2z" />
  </svg>
)

export const IconCamera = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <path d="M3 9.8a2.3 2.3 0 0 1 2.3-2.3h1.4l1.1-1.9a1.4 1.4 0 0 1 1.2-.7h4a1.4 1.4 0 0 1 1.2.7l1.1 1.9h1.4A2.3 2.3 0 0 1 18.7 9.8v7A2.3 2.3 0 0 1 16.4 19H5.3A2.3 2.3 0 0 1 3 16.8z" />
    <circle cx="10.9" cy="13" r="3.1" />
    <path d="M21 9.5v7.8" />
  </svg>
)

export const IconBrilho = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <path d="M10 3.2c.7 4.2 2.4 5.9 6.6 6.6-4.2.7-5.9 2.4-6.6 6.6-.7-4.2-2.4-5.9-6.6-6.6 4.2-.7 5.9-2.4 6.6-6.6z" />
    <path d="M17.6 14.4c.3 1.9 1.1 2.7 3 3-1.9.3-2.7 1.1-3 3-.3-1.9-1.1-2.7-3-3 1.9-.3 2.7-1.1 3-3z" />
  </svg>
)

export const IconMegafone = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <path d="M4 10.2A1.7 1.7 0 0 1 5.7 8.5h2.8l6.6-3.8a.8.8 0 0 1 1.2.7v13.2a.8.8 0 0 1-1.2.7L8.5 15.5H5.7A1.7 1.7 0 0 1 4 13.8z" />
    <path d="M8.5 15.5v3.2a1.8 1.8 0 0 0 3.5.5l-.4-1.3" />
    <path d="M19.4 9.6a3.6 3.6 0 0 1 0 4.8" />
  </svg>
)

export const IconCamadas = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <path d="m12 3.2 8.4 4.4L12 12 3.6 7.6z" />
    <path d="m3.6 12 8.4 4.4L20.4 12" />
    <path d="m3.6 16.4 8.4 4.4 8.4-4.4" />
  </svg>
)

export const IconPlay = (p) => (
  <svg viewBox="0 0 24 24" {...linha} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.2 8.9 15.6 12l-5.4 3.1z" />
  </svg>
)
