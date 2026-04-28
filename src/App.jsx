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
  return (
    <div className="page">
      <SiteHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <ReelSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
