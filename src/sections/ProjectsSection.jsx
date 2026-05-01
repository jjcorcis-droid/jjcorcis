import { useState } from 'react'
import afterEffects from '../assets/img/after-effects-64.png'
import blender from '../assets/img/blender-64.png'
import illustrator from '../assets/img/illustrator-64.png'
import photoshop from '../assets/img/photoshop-64.png'
import premiere from '../assets/img/premiere-pro-64.png'
import audition from '../assets/img/audition-64.png'
import maya from '../assets/img/maya.png'
import elektrav1 from '../assets/video/elektra1.mp4'
import elektrav2 from '../assets/video/elektra2.mp4'
import oficina1 from '../assets/img/R1.jpg'
import oficina2 from '../assets/img/R2.jpg'
import oficina3 from '../assets/img/R3.jpg'
import oficina4 from '../assets/img/R4.jpg'
import oficina5 from '../assets/img/R5.jpg'
import bbva1 from '../assets/img/bbva1.png'
import bbva2 from '../assets/img/bbva2.png'
import bbva3 from '../assets/img/bbva3.png'
import bbva4 from '../assets/img/bbva4.png'
import bbva5 from '../assets/img/bbva5.png'
import insignias from '../assets/video/insignias.mp4'
import campus1 from '../assets/img/campus1.jpg'
import campus2 from '../assets/img/campus2.jpg'
import campus3 from '../assets/img/campus3.jpg'
import campus4 from '../assets/img/campus4.jpg'
import campus5 from '../assets/img/campus5.jpg'
import campus6 from '../assets/img/campus6.jpg'

function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openOfficeImage = (src, alt) => {
    setSelectedImage({ src, alt })
  }

  const closeOfficeImage = () => {
    setSelectedImage(null)
  }

  return (
    <section id="proyectos" className="section">
      <div className="section__header">
        <h2>Proyectos destacados</h2>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>TEASER CREATOR</h3>
            <p className="project-description">
              El cliente solicitó un video en motion graphics que posicionara a SA&A como una consultora sólida, moderna y confiable.
              El proyecto surgió como una necesidad urgente, con un tiempo de entrega menor a una semana, lo que implicó una ejecución rápida y estratégica. Para cumplir con el deadline, el trabajo se dividió en equipo, optimizando tiempos sin comprometer la calidad visual.
              Mi enfoque estuvo en desarrollar animaciones claras y dinámicas que transmitieran profesionalismo con un estilo fresco e innovador. Se utilizaron transiciones dinámicas, ritmo ágil y una narrativa visual directa para asegurar que el mensaje fuera efectivo incluso en un formato breve.
              Dentro del proyecto, estuve encargado de la animación de los segmentos 9–13 s, 16–22 s, 25–29 s, 32–37 s y 39–46 s, aportando directamente a la construcción del ritmo y la coherencia visual de la pieza.
              Este proyecto refleja mi capacidad para trabajar bajo presión, adaptarme a flujos colaborativos y mantener un estándar visual sólido en tiempos de entrega exigentes.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Noviembre 2025</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <iframe
                className="reel-video"
                src="https://www.youtube.com/embed/ydJqg3_BmLY"
                title="Teaser Creator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={afterEffects} alt="Render de animación de Javier Cortés" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={illustrator} alt="Render de animación de Javier Cortés" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Soriano Ariza & Asociados. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>ESCUCHA SANTANDER</h3>
            <p className="project-description">
              Proyecto de alto impacto en el que participé desarrollando múltiples piezas de motion graphics y edición para el podcast Escucha Santander.
              Este contenido no solo vivió en plataformas digitales, sino que fue proyectado en las pantallas de las oficinas centrales de Santander en CDMX y plataformas, lo que implicó un estándar elevado tanto en diseño como en ejecución.
              El reto fue mantener consistencia visual en distintos formatos, adaptando gráficos que complementaran la narrativa del podcast sin distraer, pero elevando la experiencia visual.
              Es uno de mis proyectos más relevantes por su alcance, visibilidad y nivel de producción.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Septiembre 2024</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <iframe
                className="reel-video"
                src="https://www.youtube.com/embed/BeML7F96SKo"
                title="Proyecto BBVA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={afterEffects} alt="After Effects" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={premiere} alt="Premiere Pro" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={illustrator} alt="Illustrator" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={audition} alt="Abode Audition" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Santander MX. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>LEARNFLIX ELEKTRA</h3>
            <p className="project-description">
              El cliente solicitó una serie de videos que narraran historias de éxito dentro de la empresa, con un enfoque emocional y cercano.
              La propuesta creativa combinó un estilo tipo álbum fotográfico antiguo con elementos modernos: integración de live action, motion graphics, composición en entornos 3D dentro de After Effects.
              El resultado fue una narrativa visual híbrida que conecta nostalgia con dinamismo actual, logrando piezas que se sienten humanas, auténticas y visualmente ricas.
              Este proyecto destaca por la integración de múltiples técnicas en una misma pieza, manteniendo coherencia estética y narrativa.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Octubre 2025</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media gallery-item--media-portrait">
              <video className="reel-video reel-video--portrait" controls preload="metadata">
                <source src={elektrav1} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
            <div className="gallery-item gallery-item--media gallery-item--media-portrait">
              <video className="reel-video reel-video--portrait" controls preload="metadata">
              <source src={elektrav2} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={afterEffects} alt="After Effects" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={photoshop} alt="Premiere Pro" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={illustrator} alt="Illustrator" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={audition} alt="Abode Audition" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Grupo Elektra. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>OFICINA FERRER 3D</h3>
            <p className="project-description">
              El cliente solicitó una propuesta renderizada de un entorno virtual interactivo destinado a la capacitación de empleados. La intención era crear un espacio que transmitiera modernidad, orden y claridad.
              Desarrollé una oficina minimalista y contemporánea, encargándome del modelado del edificio, así como de elementos clave como iluminación de techo y superficies. También integré assets externos (Sketchfab) de forma orgánica dentro de la escena.
              El edificio fue modelado y texturizado completamente desde cero, cuidando proporciones, materiales y coherencia visual.
              Este proyecto demuestra mi capacidad para trabajar en entornos 3D funcionales, no solo estéticos.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>2025</strong>
            </div>
          </div>
          <div className="project-gallery project-gallery--office">
            <div className="office-collage">
              <button
                className="office-collage__item office-collage__item--featured"
                type="button"
                aria-label="Ver en grande: Oficina Ferrer 3D - Render 1"
                onClick={() => openOfficeImage(oficina1, 'Oficina Ferrer 3D - Render 1')}
              >
                <img src={oficina1} alt="Oficina Ferrer 3D - Render 1" />
              </button>
              <button
                className="office-collage__item"
                type="button"
                aria-label="Ver en grande: Oficina Ferrer 3D - Render 2"
                onClick={() => openOfficeImage(oficina2, 'Oficina Ferrer 3D - Render 2')}
              >
                <img src={oficina2} alt="Oficina Ferrer 3D - Render 2" />
              </button>
              <button
                className="office-collage__item"
                type="button"
                aria-label="Ver en grande: Oficina Ferrer 3D - Render 3"
                onClick={() => openOfficeImage(oficina3, 'Oficina Ferrer 3D - Render 3')}
              >
                <img src={oficina3} alt="Oficina Ferrer 3D - Render 3" />
              </button>
              <button
                className="office-collage__item"
                type="button"
                aria-label="Ver en grande: Oficina Ferrer 3D - Render 4"
                onClick={() => openOfficeImage(oficina4, 'Oficina Ferrer 3D - Render 4')}
              >
                <img src={oficina4} alt="Oficina Ferrer 3D - Render 4" />
              </button>
              <button
                className="office-collage__item"
                type="button"
                aria-label="Ver en grande: Oficina Ferrer 3D - Render 5"
                onClick={() => openOfficeImage(oficina5, 'Oficina Ferrer 3D - Render 5')}
              >
                <img src={oficina5} alt="Oficina Ferrer 3D - Render 5" />
              </button>
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={blender} alt="After Effects" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Grupo Ferrer. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>BBVA – PROTECCIÓN DE DATOS PERSONALES</h3>
            <p className="project-description">
              El cliente solicitó el desarrollo de un video de capacitación dirigido a sus colaboradores, enfocado en ciberseguridad y la correcta protección de datos personales y de usuarios.
              Dentro de este proyecto, fui responsable de la creación completa del storyboard, estructurando una pieza de aproximadamente 56 slides, lo que implicó un desarrollo narrativo claro, ordenado y funcional para un contenido educativo de larga duración.
              El reto principal fue traducir información técnica en una narrativa visual accesible y dinámica, manteniendo el interés del espectador a lo largo de todo el contenido. Además, el proyecto debía respetar estrictamente la identidad gráfica de la empresa, cuidando el uso correcto de colores, tipografía, logotipos y lineamientos visuales.
              El storyboard fue desarrollado en un periodo de una semana, manteniendo un alto estándar de calidad pese al volumen de trabajo y el tiempo de entrega ajustado.
              Este proyecto destaca por mi capacidad de organización, pensamiento narrativo y atención al detalle en proyectos corporativos de gran escala.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Febrero 2026</strong>
            </div>
          </div>
          <div className="project-gallery project-gallery--bbva">
            <div className="bbva-collage">
              <button
                className="bbva-collage__item bbva-collage__item--featured"
                type="button"
                aria-label="Ver en grande: BBVA - Render 1"
                onClick={() => openOfficeImage(bbva1, 'BBVA - Render 1')}
              >
                <img src={bbva1} alt="BBVA - Render 1" />
              </button>
              <button
                className="bbva-collage__item bbva-collage__item--small-1"
                type="button"
                aria-label="Ver en grande: BBVA - Render 2"
                onClick={() => openOfficeImage(bbva2, 'BBVA - Render 2')}
              >
                <img src={bbva2} alt="BBVA - Render 2" />
              </button>
              <button
                className="bbva-collage__item bbva-collage__item--small-2"
                type="button"
                aria-label="Ver en grande: BBVA - Render 3"
                onClick={() => openOfficeImage(bbva3, 'BBVA - Render 3')}
              >
                <img src={bbva3} alt="BBVA - Render 3" />
              </button>
              <button
                className="bbva-collage__item bbva-collage__item--small-3"
                type="button"
                aria-label="Ver en grande: BBVA - Render 4"
                onClick={() => openOfficeImage(bbva4, 'BBVA - Render 4')}
              >
                <img src={bbva4} alt="BBVA - Render 4" />
              </button>
              <button
                className="bbva-collage__item bbva-collage__item--small-4"
                type="button"
                aria-label="Ver en grande: BBVA - Render 5"
                onClick={() => openOfficeImage(bbva5, 'BBVA - Render 5')}
              >
                <img src={bbva5} alt="BBVA - Render 5" />
              </button>
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={illustrator} alt="After Effects" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={photoshop} alt="After Effects" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a BBVA España. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>
    
      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>INSIGNIAS ELEKTRA</h3>
            <p className="project-description">
              El cliente solicitó el desarrollo de una serie de videos de capacitación enfocados en mejorar el servicio al cliente, tomando como base experiencias reales de colaboradores dentro de la empresa.
              La propuesta visual se construyó bajo un estilo cartoon, buscando una comunicación más cercana, clara y atractiva para el espectador. Se desarrolló una animación dinámica con movimientos fluidos y un ritmo marcado, permitiendo que el contenido se sintiera ágil y fácil de seguir a lo largo de cada pieza.
              Cada video tuvo un tiempo de producción aproximado de una semana, lo que implicó mantener consistencia en calidad, ritmo y estilo a lo largo de toda la serie, cumpliendo con tiempos de entrega definidos.
              El enfoque principal fue transformar situaciones cotidianas en una narrativa visual entretenida, sin perder el objetivo formativo del proyecto. Esto implicó equilibrar elementos educativos con una ejecución visual llamativa que mantuviera la atención del usuario.
              Este proyecto destaca por mi capacidad para trabajar en series de contenido, mantener coherencia visual entre entregables y sostener un flujo de producción constante bajo tiempos definidos.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Enero 2023</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media gallery-item--media-portrait2">
              <video className="reel-video" controls preload="metadata">
                <source src={insignias} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={afterEffects} alt="After Effects" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={illustrator} alt="Illustrator" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={audition} alt="Abode Audition" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Grupo Elektra. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <div className="project-head">
            <h3>CAMPUS VIRTUAL ELEKTRA</h3>
            <p className="project-description">
              Proyecto enfocado en el desarrollo de una app interactiva que simula un campus universitario, donde cada edificio representa distintos valores, ideales y procesos internos de la empresa Elektra.
              Al tratarse de un entorno 3D en tiempo real, el proyecto tuvo una limitante estricta de poligonaje, lo que representó un reto importante: mantener una calidad visual alta bajo un enfoque optimizado y eficiente.
              Mi participación abarcó desde el modelado hasta el texturizado de múltiples elementos del campus, incluyendo tanto exteriores como interiores. Todos los modelos fueron desarrollados y texturizados en un periodo de 2 meses, manteniendo consistencia visual y optimización técnica a lo largo del proyecto.
              El enfoque visual se mantuvo en un estilo minimalista, buscando claridad, orden y coherencia estética sin comprometer el rendimiento de la aplicación.
              El desafío principal fue lograr un balance entre estética y optimización, cuidando cada detalle para que los modelos fueran visualmente atractivos pero técnicamente ligeros.
              Este proyecto destaca por mi capacidad para trabajar en entornos 3D funcionales, optimizados para interacción, y mi entendimiento de las limitantes técnicas en productos digitales.
            </p>
            <div className="project-meta">
              <span>Fecha de entrega:</span>
              <strong>Julio 2023</strong>
            </div>
          </div>
          <div className="project-gallery">
            <div className="gallery-item gallery-item--media">
              <iframe
                className="reel-video"
                src="https://www.youtube.com/embed/G4bzxIoeuz8"
                title="Proyecto video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="project-tools">
            <span className="project-tools__label">Herramientas utilizadas:</span>
            <span className="tool-badge">
              <img src={blender} alt="After Effects" className="hero__image"/>
            </span>
            <span className="tool-badge">
              <img src={maya} alt="Illustrator" className="hero__image"/>
            </span>
          </div>
          <div className="project-note">
            Aviso: este proyecto pertenece a Grupo Elektra. No está autorizada la difusión o divulgación de esta información.
          </div>
        </article>
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={closeOfficeImage}>
          <button
            className="lightbox__content"
            type="button"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
