import CursorLight from './components/CursorLight/CursorLight'
import BackToTop from './components/BackToTop/BackToTop'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'
import styles from './App.module.css'

function App() {
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
