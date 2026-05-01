function SiteFooter({ lang }) {
  const copy = {
    es: '© 2026 Portafolio. Hecho con React by @Corcis.',
    en: '© 2026 Portfolio. Built with React by @Corcis.',
  }

  return (
    <footer className="site-footer">
      <p>{copy[lang]}</p>
    </footer>
  )
}

export default SiteFooter
