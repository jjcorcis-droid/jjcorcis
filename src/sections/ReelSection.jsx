import demoReel from '../assets/video/demoReel.mp4'

function ReelSection({ lang }) {
  const copy = {
    es: {
      title: 'Demo reel',
      fallback: 'Tu navegador no soporta la reproducción de video.',
    },
    en: {
      title: 'Demo reel',
      fallback: 'Your browser does not support video playback.',
    },
  }
  const t = copy[lang]

  return (
    <section id="reel" className="section">
      <div className="section__header">
        <h2>{t.title}</h2>
        <p></p>
      </div>
      <div className="reel-placeholder">
        <video
          className="reel-video"
          controls
          preload="metadata"
        >
          <source src={demoReel} type="video/mp4" />
          {t.fallback}
        </video>
      </div>
    </section>
  )
}

export default ReelSection
