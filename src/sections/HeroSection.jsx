import heroImage from '../assets/img/javier2.jpeg'

function HeroSection({ lang }) {
  const copy = {
    es: {
      eyebrow: 'Animador 3D - Artista 2D',
      lead:
        '¡Hola! Mi nombre es Javier Cortés. Me gradué en Ingeniería en Animación y Videojuegos y cuento con un posgrado en Efectos Visuales por la Universidad Panamericana. Soy un apasionado de la animación 3D y 2D, los Motion Graphics y los efectos visuales (VFX). ¡Te invito a conocer mi trabajo!',
      primary: 'Hablemos de tu proyecto',
      secondary: 'Ver demo reel',
      alt: 'Render de animación de Javier Cortés',
    },
    en: {
      eyebrow: '3D Animator - 2D Artist',
      lead:
        'Hello! My name is Javier Cortés. I graduated in Animation and Video Game Engineering and hold a postgraduate degree in Visual Effects from Universidad Panamericana. I am passionate about 3D and 2D animation, Motion Graphics, and VFX. I invite you to take a look at my work!',
      primary: "Let's talk about your project",
      secondary: 'View demo reel',
      alt: 'Animation render of Javier Cortés',
    },
  }
  const t = copy[lang]

  return (
    <section id="inicio" className="section hero">
      <div className="hero__content">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="hero__title">José Javier Cortés Cisneros</h1>
        <p className="lead">{t.lead}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contacto">
            {t.primary}
          </a>
          <a className="button button--ghost" href="#reel">
            {t.secondary}
          </a>
        </div>
      </div>
      <div className="hero__frame">
        <div className="hero__placeholder">
          <img
            src={heroImage}
            alt={t.alt}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
