function SiteHeader({ lang, onLangChange }) {
  const labels = {
    es: {
      brand: 'Portafolio',
      subtitle: 'Motion Graphic Artist',
      nav: ['Inicio', 'Sobre mí', 'Demo reel', 'Habilidades', 'Proyectos', 'Contacto'],
    },
    en: {
      brand: 'Portfolio',
      subtitle: 'Motion Graphic Artist',
      nav: ['Home', 'About', 'Demo reel', 'Skills', 'Projects', 'Contact'],
    },
  }
  const copy = labels[lang]

  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand__title">{copy.brand}</span>
        <span className="brand__subtitle">{copy.subtitle}</span>
      </div>
      <nav className="site-nav">
        <a href="#inicio">{copy.nav[0]}</a>
        <a href="#sobre-mi">{copy.nav[1]}</a>
        <a href="#reel">{copy.nav[2]}</a>
        <a href="#habilidades">{copy.nav[3]}</a>
        <a href="#proyectos">{copy.nav[4]}</a>
        <a href="#contacto">{copy.nav[5]}</a>
      </nav>
      <div className="lang-toggle" role="group" aria-label="Language">
        <button
          type="button"
          className={lang === 'es' ? 'is-active' : ''}
          onClick={() => onLangChange('es')}
        >
          ES
        </button>
        <button
          type="button"
          className={lang === 'en' ? 'is-active' : ''}
          onClick={() => onLangChange('en')}
        >
          EN
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
