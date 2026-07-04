import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlagSpain, FlagUSA } from './flags'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#top', labelKey: 'nav.profile' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#tech', labelKey: 'nav.techStack' },
  { href: '#contact', labelKey: 'nav.contact' },
]

const MOBILE_BREAKPOINT = 768
const SCROLL_HIDE_THRESHOLD = 80

function Navbar() {
  const { t, i18n } = useTranslation()
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const currentLang = i18n.language.startsWith('en') ? 'en' : 'es'
  const nextLang = currentLang === 'es' ? 'en' : 'es'

  const handleToggleLanguage = () => {
    i18n.changeLanguage(nextLang)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setIsHidden(false)
        return
      }

      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > SCROLL_HIDE_THRESHOLD) {
        setIsHidden(true)
      } else if (currentScrollY < lastScrollY.current) {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${styles.navbar} ${isHidden ? styles.navbarHidden : ''}`}
    >
      <nav aria-label={t('nav.ariaLabel')}>
        {NAV_LINKS.map(({ href, labelKey }) => (
          <a key={href} href={href}>
            {t(labelKey)}
          </a>
        ))}
        <div className={styles.langControl}>
          <button
            type="button"
            className={styles.langButton}
            onClick={handleToggleLanguage}
            aria-label={
              nextLang === 'en' ? t('common.switchToEnglish') : t('common.switchToSpanish')
            }
            title={
              nextLang === 'en' ? t('common.switchToEnglish') : t('common.switchToSpanish')
            }
          >
            {currentLang === 'es' ? (
              <FlagSpain key="es" className={styles.flag} />
            ) : (
              <FlagUSA key="en" className={styles.flag} />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
