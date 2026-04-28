import heroImage from '../assets/img/javier2.jpeg'

function HeroSection() {
  return (
    <section id="inicio" className="section hero">
      <div className="hero__content">
        <p className="eyebrow">Animador 3D - 2D Artist</p>
        <h1 className="hero__title">José Javier Cortés Cisneros</h1>
        <p className="lead">
          Hello! My name is Javier Cortés.
          I graduated in Animation and Video Game Engineering and hold a
          Postgraduate Degree in Visual Effects from Universidad
          Panamericana. I am a passionate enthusiast of 3D and 2D
          animation, Motion Graphics, and VFX. I
          invite you to take a look at my work!
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contacto">
            Hablemos de tu proyecto
          </a>
          <a className="button button--ghost" href="#reel">
            Ver demo reel
          </a>
        </div>
      </div>
      <div className="hero__frame">
        <div className="hero__placeholder">
          <img
            src={heroImage}
            alt="Render de animación de Javier Cortés"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
