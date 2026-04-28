function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand__title">Portafolio</span>
        <span className="brand__subtitle">Motion Graphic Artist</span>
      </div>
      <nav className="site-nav">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#reel">Demo reel</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default SiteHeader
