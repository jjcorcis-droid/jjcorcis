import { useMemo, useState } from 'react'
import './App.css'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import ReelSection from './sections/ReelSection'
import SiteFooter from './sections/SiteFooter'
import SiteHeader from './sections/SiteHeader'
import SkillsSection from './sections/SkillsSection'

function App() {
  const [lang, setLang] = useState('es')
  const particles = useMemo(
    () =>
      Array.from({ length: 120 }, (_, index) => ({
        id: index,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${10 + Math.random() * 12}px`,
        delay: `${Math.random() * 6}s`,
        duration: `${22 + Math.random() * 20}s`,
        drift: `${Math.round(Math.random() * 240 - 120)}px`,
        opacity: `${0.001 + Math.random() * 0.18}`,
      })),
    []
  )

  return (
    <div className="page">
      <svg className="particle-filter" aria-hidden="true">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            result="goo"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              '--x': particle.x,
              '--y': particle.y,
              '--size': particle.size,
              '--delay': particle.delay,
              '--duration': particle.duration,
              '--drift': particle.drift,
              '--opacity': particle.opacity,
            }}
          />
        ))}
      </div>
      <SiteHeader lang={lang} onLangChange={setLang} />

      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ReelSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <SiteFooter lang={lang} />
    </div>
  )
}

export default App
