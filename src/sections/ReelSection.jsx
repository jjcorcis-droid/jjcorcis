
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
     
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    </section>
  )
}

export default ReelSection
