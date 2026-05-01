function SkillsSection({ lang }) {
  const copy = {
    es: {
      title: 'Habilidades clave',
      items: [
        'Animación en motion, diseño y storytelling',
        'Dirección de ritmo y narrativa',
        'Integración de 3D en motion',
        'Modelado, texturizado y render 3D',
        'Animación 3D para contenido audiovisual',
        'Producción audiovisual end-to-end',
      ],
    },
    en: {
      title: 'Key skills',
      items: [
        'Motion animation, design & storytelling',
        'Rhythm direction and narrative',
        '3D integration in motion',
        '3D modeling, texturing, and rendering',
        '3D animation for audiovisual content',
        'End-to-end audiovisual production',
      ],
    },
  }
  const t = copy[lang]

  return (
    <section id="habilidades" className="section">
      <div className="section__header">
        <h2>{t.title}</h2>
      </div>
      <div className="skills-grid">
        <span className="degradado">{t.items[0]}</span>
        <span className="degradado2">{t.items[1]}</span>
        <span className="degradado">{t.items[2]}</span>
        <span className="degradado2">{t.items[3]}</span>
        <span className="degradado">{t.items[4]}</span>
        <span className="degradado2">{t.items[5]}</span>
      </div>
    </section>
  )
}

export default SkillsSection
