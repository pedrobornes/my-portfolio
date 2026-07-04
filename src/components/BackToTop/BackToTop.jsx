import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './BackToTop.module.css'

const SCROLL_THRESHOLD = 300

function BackToTop() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a
      href="#top"
      className={`${styles.backToTop} ${isVisible ? styles.show : ''}`}
      aria-label={t('common.backToTop')}
    >
      ↑
    </a>
  )
}

export default BackToTop
