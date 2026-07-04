import { useEffect, useRef, useState } from 'react'
import styles from './RevealSection.module.css'

function RevealSection({ id, className = '', children }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { root: null, threshold: 0.15 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.revealSection} ${isVisible ? styles.isVisible : ''} ${className}`}
    >
      {children}
    </section>
  )
}

export default RevealSection
