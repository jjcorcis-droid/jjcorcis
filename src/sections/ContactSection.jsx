import gmailIcon from '../assets/img/gmail.png'
import linkedinIcon from '../assets/img/linkedin.png'
import whatsappIcon from '../assets/img/whatsapp.png'

function ContactSection() {
  return (
    <section id="contacto" className="section contact">
      <div className="section__header">
        <h2>Contacto</h2>
        <p className="contact-availability">
          Disponible para proyectos freelance o contratación de tiempo completo.
        </p>
      </div>
      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-icon">
            <img src={gmailIcon} alt="Gmail" />
          </span>
          <p>           
            <a href="mailto:jjcorcis@gmail.com" target="_blank">jjcorcis@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">
            <img src={linkedinIcon} alt="LinkedIn" />
          </span>
          <p>
            <a href="https://www.linkedin.com/in/jjcorcis/" target="_blank">https://www.linkedin.com/in/jjcorcis/</a>
          </p>
        </div>
        <div className="contact-item">
          <span className="contact-icon">
            <img src={whatsappIcon} alt="WhatsApp" />
          </span>
          <p>
            <a href="https://wa.me/+527351117236" target="_blank">7351117236</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
