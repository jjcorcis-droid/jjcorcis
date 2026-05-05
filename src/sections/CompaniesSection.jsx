import banamexLogo from '../assets/img/LogoBanamex.png'
import primeLogo from '../assets/img/PrimeLogo.png'
import grupoSalinasLogo from '../assets/img/GrupoSalinasLogo.png'
import sorianoLogo from '../assets/img/SorianoLogoTransparente.png'
import ferrerLogo from '../assets/img/FerrerLogo.png'
import bbvaLogo from '../assets/img/BBVALogoTransparente.png'
import elektraLogo from '../assets/img/ElektraLogo.png'

function CompaniesSection({ lang }) {
  const copy = {
    es: {
      title: 'Marcas que confiaron en mí',
    },
    en: {
      title: 'Brands that trusted me',
    },
  }

  const logos = [
    { src: banamexLogo, alt: 'Banamex' },
    { src: primeLogo, alt: 'Prime' },
    { src: grupoSalinasLogo, alt: 'Grupo Salinas' },
    { src: sorianoLogo, alt: 'Soriano Ariza & Asociados' },
    { src: ferrerLogo, alt: 'Ferrer' },
    { src: bbvaLogo, alt: 'BBVA' },
    { src: elektraLogo, alt: 'Elektra' },
  ]

  const marqueeLogos = [...logos, ...logos]
  const t = copy[lang]

  return (
    <section id="empresas" className="section companies">
      <div className="section__header">
        <h2>{t.title}</h2>
      </div>
      <div className="companies-marquee" aria-label={t.title}>
        <div className="companies-track">
          {marqueeLogos.map((logo, index) => (
            <div className="companies-logo" key={`${logo.alt}-${index}`}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection
