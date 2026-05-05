import afterEffects from '../assets/img/after-effects-64.png'
import blender from '../assets/img/blender-64.png'
import illustrator from '../assets/img/illustrator-64.png'
import photoshop from '../assets/img/photoshop-64.png'
import premiere from '../assets/img/premiere-pro-64.png'
import audition from '../assets/img/audition-64.png'
import maya from '../assets/img/maya.png'

function AboutSection({ lang }) {
  const copy = {
    es: {
      toolsTitle: 'Herramientas',
      title: 'Sobre mí',
      description:
        'Soy artista 2D enfocado en proyectos que cautivan audiencias. He trabajado con marcas nacionales e internacionales como BBVA, Elektra, Santander, Ferrer y SA&A. Actualmente me desempeño como Consultor Audiovisual Senior en Soriano Ariza y Asociados, donde también contribuyo en diversos proyectos 3D que destacan por su interacción con el usuario. Soy un profesional proactivo y autodidacta que disfruta el trabajo en equipo, con buena gestión del estrés y del tiempo.',
      focusTitle: 'Enfoque',
      focusText: 'Mantengo la identidad visual de la marca o empresa, respetando sus valores y lineamientos, pero al mismo tiempo transmito creatividad y frescura en cada proyecto. Mi objetivo es que la narrativa audiovisual refuerce la esencia de la organización y conecte de forma auténtica con su audiencia.',
      workflowTitle: 'Flujo de trabajo',
      workflowText: 'Trabajo de manera conjunta con la marca para explorar ideas y conceptos clave. Inicio con una lluvia de ideas que fortalece un concepto sólido, paso a la creación de concept art y posteriormente desarrollo la animación y producción audiovisual. Cada etapa se valida con retroalimentación, asegurando que el resultado final sea coherente, atractivo y funcional.',
    },
    en: {
      toolsTitle: 'Tools',
      title: 'About Me',
      description:
        'I am a 2D artist focused on projects that captivate audiences. I have worked with a wide range of national and international brands such as BBVA, Elektra, Santander, Ferrer, and SA&A. Currently, I serve as a Senior Audiovisual Consultant at Soriano Ariza y Asociados, where I also contribute to diverse 3D projects that stand out for their user interaction. I am a proactive, self-taught professional who thrives in teamwork, with strong stress management and excellent time management skills.',
      focusTitle: 'Focus',
      focusText: 'I preserve the brand’s visual identity, respecting its values and guidelines, while also conveying creativity and freshness in every project. My goal is for the audiovisual narrative to reinforce the organization’s essence and connect authentically with its audience.',
      workflowTitle: 'Workflow',
      workflowText: 'I work closely with the brand to explore ideas and key concepts. I start with a brainstorming phase to build a solid concept, move into concept art, and then develop the animation and audiovisual production. Each stage is validated through feedback, ensuring the final result is coherent, engaging, and functional.',
    },
  }
  const t = copy[lang]

  return (
    <section id="sobre-mi" className="section">
      <div className="about-grid">
        <div className="about-tools">
          <h3>{t.toolsTitle}</h3>
          <div className="tools-grid">
            <div className="tool-item">
              <span className="tool-badge">
                <img src={maya} alt="Autodesk Maya" className="hero__image"/>
              </span>
              <span className="tool-name">Autodesk Maya</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={afterEffects} alt="Adobe After Effects" className="hero__image"/>
              </span>
              <span className="tool-name">Adobe After Effects</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={illustrator} alt="Adobe Illustrator" className="hero__image"/>
              </span>
              <span className="tool-name">Adobe Illustrator</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={photoshop} alt="Adobe Photoshop" className="hero__image"/>
              </span>
              <span className="tool-name">Adobe Photoshop</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={premiere} alt="Adobe Premiere" className="hero__image"/>
              </span>
              <span className="tool-name">Adobe Premiere</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={audition} alt="Adobe Audition" className="hero__image"/>
              </span>
              <span className="tool-name">Adobe Audition</span>
            </div>
            <div className="tool-item">
              <span className="tool-badge">
                <img src={blender} alt="Blender" className="hero__image"/>
              </span>
              <span className="tool-name">Blender</span>
            </div>
          </div>
        </div>
        <div className="about-details">
          <div className="section__header">
            <h2>{t.title}</h2>
            <p>{t.description}</p>
          </div>
          <div className="about-highlights">
            <div className="info-card">
              <h3>{t.focusTitle}</h3>
              <p>{t.focusText}</p>
            </div>
            <div className="info-card">
              <h3>{t.workflowTitle}</h3>
              <p>{t.workflowText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
