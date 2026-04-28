import demoReel from '../assets/video/DemoReel_2026_JoseJavierCortesCisneros.mp4'

function ReelSection() {
  return (
    <section id="reel" className="section">
      <div className="section__header">
        <h2>Demo reel</h2>
        <p></p>
      </div>
      <div className="reel-placeholder">
        <video
          className="reel-video"
          controls
          preload="metadata"
        >
          <source src={demoReel} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </section>
  )
}

export default ReelSection
