import elektra1 from '../assets/img/elektra1.png'
import elektra2 from '../assets/img/elektra2.png'
import afterEffects from '../assets/img/after-effects-64.png'
import blender from '../assets/img/blender-64.png'
import illustrator from '../assets/img/illustrator-64.png'
import photoshop from '../assets/img/photoshop-64.png'
import premiere from '../assets/img/premiere-pro-64.png'
import audition from '../assets/img/audition-64.png'
import maya from '../assets/img/maya.png'


function ProjectsSection() {
  return (
    <section id="proyectos" className="section">
      <div className="section__header">
        <h2>Proyectos destacados</h2>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <div>
              <h3>TEASER CREATOR</h3>
              <p className="project-description">
                El cliente solicitó un video en motion graphics que posicionara a SA&A como una consultora sólida, moderna y confiable.
                El proyecto surgió como una necesidad urgente, con un tiempo de entrega menor a una semana, lo que implicó una ejecución rápida y estratégica. Para cumplir con el deadline, el trabajo se dividió en equipo, optimizando tiempos sin comprometer la calidad visual.
                Mi enfoque estuvo en desarrollar animaciones claras y dinámicas que transmitieran profesionalismo con un estilo fresco e innovador. Se utilizaron transiciones dinámicas, ritmo ágil y una narrativa visual directa para asegurar que el mensaje fuera efectivo incluso en un formato breve.
                Dentro del proyecto, estuve encargado de la animación de los segmentos 9–13 s, 16–22 s, 25–29 s, 32–37 s y 39–46 s, aportando directamente a la construcción del ritmo y la coherencia visual de la pieza.
                Este proyecto refleja mi capacidad para trabajar bajo presión, adaptarme a flujos colaborativos y mantener un estándar visual sólido en tiempos de entrega exigentes.
              </p>
            </div>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Noviembre 2025</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <video className="reel-video" controls preload="metadata">
              
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
          <div className="project-tools">
            Herramientas utilizadas:
            <span  className="tool-icon">
              <img src={afterEffects} alt="Render de animación de Javier Cortés" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={illustrator} alt="Render de animación de Javier Cortés" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a [Nombre de la empresa]. No
            está autorizada la difusión o compartición de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <div>
              <h3>ESCUCHA SANTANDER</h3>
              <p className="project-description">
                Proyecto de alto impacto en el que participé desarrollando múltiples piezas de motion graphics y edición para el podcast Escucha Santander.
                Este contenido no solo vivió en plataformas digitales, sino que fue proyectado en las pantallas de las oficinas centrales de Santander en CDMX y plataformas, lo que implicó un estándar elevado tanto en diseño como en ejecución.
                El reto fue mantener consistencia visual en distintos formatos, adaptando gráficos que complementaran la narrativa del podcast sin distraer, pero elevando la experiencia visual.
                Es uno de mis proyectos más relevantes por su alcance, visibilidad y nivel de producción.
              </p>
            </div>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Septiembre 2024</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <video className="reel-video" controls preload="metadata">
               
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
          <div className="project-tools">
            Herramientas utilizadas:
            <span  className="tool-icon">
              <img src={afterEffects} alt="After Effects" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={premiere} alt="Premiere Pro" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={illustrator} alt="Illustrator" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={audition} alt="Abode Audition" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a [Nombre de la empresa]. No
            está autorizada la difusión o compartición de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <div>
              <h3>LEARNFLIX ELEKTRA</h3>
              <p className="project-description">
                El cliente solicitó una serie de videos que narraran historias de éxito dentro de la empresa, con un enfoque emocional y cercano.
                La propuesta creativa combinó un estilo tipo álbum fotográfico antiguo con elementos modernos: integración de live action, motion graphics, composición en entornos 3D dentro de After Effects.
                El resultado fue una narrativa visual híbrida que conecta nostalgia con dinamismo actual, logrando piezas que se sienten humanas, auténticas y visualmente ricas.
                Este proyecto destaca por la integración de múltiples técnicas en una misma pieza, manteniendo coherencia estética y narrativa.
              </p>
            </div>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Octubre 2025</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <video className="reel-video" controls preload="metadata">
          
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="gallery-item gallery-item--media">
              <video className="reel-video" controls preload="metadata">

                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
          <div className="project-tools">
            Herramientas utilizadas:
            <span  className="tool-icon">
              <img src={afterEffects} alt="After Effects" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={photoshop} alt="Premiere Pro" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={illustrator} alt="Illustrator" className="hero__image"/>
            </span>
            <span  className="tool-icon">
              <img src={audition} alt="Abode Audition" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a [Nombre de la empresa]. No
            está autorizada la difusión o compartición de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <div>
              <h3>Insignias Elektra</h3>
              <p className="project-description">
                The client requested a series of training videos for their
                employees. I developed the animation with the intention of
                making it intriguing and fun, while keeping the content
                engaging and easy to follow.
              </p>
            </div>
            <div className="project-meta">
              <span>Completion Date:</span>
              <strong>December 12, 2023</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <img
                src={elektra1}
                alt="Render de animación de Javier Cortés"
                className="hero__image"
              />
            </div>
            <div className="gallery-item gallery-item--media">
              <img
                src={elektra2}
                alt="Render de animación de Javier Cortés"
                className="hero__image"
              />
            </div>
            <div className="gallery-item gallery-item--media">
              <video
                className="reel-video"
                controls
                preload="metadata"
              >
             
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="gallery-item gallery-item--media">
              <img
                src={elektra2}
                alt="Render de animación de Javier Cortés"
                className="hero__image"
              />
            </div>
          </div>
          <div className="project-tools">
            <span className="tool-icon">Maya</span>
            <span className="tool-icon">Blender</span>
            <span className="tool-icon">Unreal</span>
            <span className="tool-icon">Unity</span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a [Nombre de la empresa]. No
            está autorizada la difusión o compartición de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <div>
              <h3>Animo AI Animador</h3>
              <p className="project-description"></p>
            </div>
            <div className="project-meta">
              <span>Completion Date:</span>
              <strong>Oct 2025</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">Imagen 1</div>
            <div className="gallery-item gallery-item--media">Imagen 2</div>
            <div className="gallery-item gallery-item--media">Video 1</div>
            <div className="gallery-item gallery-item--media">Imagen 3</div>
          </div>
          <div className="project-tools">
            <span className="tool-icon">Maya</span>
            <span className="tool-icon">Blender</span>
            <span className="tool-icon">Unreal</span>
            <span className="tool-icon">Unity</span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a [Nombre de la empresa]. No
            está autorizada la difusión o compartición de esta información.
          </div>
        </article>
      </div>
    </section>
  )
}

export default ProjectsSection
