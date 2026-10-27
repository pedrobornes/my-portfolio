import CursorLight from './components/CursorLight/CursorLight'
import BackToTop from './components/BackToTop/BackToTop'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'
import { useEffect } from 'react'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CursorLight />
      <Navbar />

      <main id="top" className={styles.main}>
        <Hero />
      </main>

      <Experience />
      <Projects />
      <TechStack />
      <Certificates />
      <Contact />
      <BackToTop />
    </>
  )
}

export default App
