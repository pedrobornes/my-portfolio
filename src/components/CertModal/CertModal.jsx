import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CertModal.module.css'

function CertModal({ imageSrc, onClose }) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!imageSrc) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [imageSrc, onClose])

  if (!imageSrc) return null

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label={t('certificates.modalAlt')}
      onClick={onClose}
    >
      <img
        src={imageSrc}
        alt={t('certificates.modalAlt')}
        className={styles.modalContent}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}

export default CertModal
