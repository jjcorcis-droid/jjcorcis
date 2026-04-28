import afterEffects from '../assets/img/after-effects-64.png'
import blender from '../assets/img/blender-64.png'
import illustrator from '../assets/img/illustrator-64.png'
import photoshop from '../assets/img/photoshop-64.png'
import premiere from '../assets/img/premiere-pro-64.png'
import audition from '../assets/img/audition-64.png'
import maya from '../assets/img/maya.png'

function AboutSection() {
  return (
    <section id="sobre-mi" className="section">
      <div className="about-grid">
        <div className="about-tools">
          <h3>Herramientas</h3>
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
            <h2>About Me</h2>
            <p>
              I am a 2D Artist focused on projects that captivate
              audiences. I have worked with a wide range of national
              and international brands such as BBVA, Elektra, Santander,
              Ferrer, and SA&A. Currently, I serve as a Senior
              Audiovisual Consultant at Soriano Ariza y Asociados, where
              I also contribute to diverse 3D projects that stand out for
              their user interaction.
              I’m a proactive, self-taught professional who thrives in
              teamwork, with strong stress management and excellent
              time management skills.
            </p>
          </div>
          <div className="about-highlights">
            <div className="info-card">
              <h3>Enfoque</h3>
              <p>Acting, motion capture cleanup, criaturas y cámaras dinámicas.</p>
            </div>
            <div className="info-card">
              <h3>Workflow</h3>
              <p>Bloqueo → refinado → pulido → export para engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
