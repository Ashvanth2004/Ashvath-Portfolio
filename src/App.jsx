import { useEffect, useState } from 'react'
import './App.css'
import './components/Sections.css'
import Header from './components/Header'
import CanvasBackground from './components/CanvasBackground'
import Hero from './components/Hero'
import ReactLab from './components/ReactLab'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    const onMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="bg-image" aria-hidden="true" />
      <CanvasBackground />

      <Header />

      <main>
        <Hero />

        <section id="react-lab">
          <div className="section-label">02 - React Action Lab</div>
          <ReactLab />
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Ashvanth. Java Full Stack Developer.</p>
      </footer>
    </>
  )
}