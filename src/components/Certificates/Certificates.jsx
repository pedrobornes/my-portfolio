import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IA_CERTIFICATES, SOFT_SKILLS_CERTIFICATES } from '../../data/certificates'
import CertModal from '../CertModal/CertModal'
import RevealSection from '../RevealSection/RevealSection'
import styles from './Certificates.module.css'

function CertificateGroup({ group, title, showPrefix = false, className = '', onOpenModal }) {
  const { t } = useTranslation()

  return (
    <div className={`${styles.certificatesGroup} ${className}`}>
      <h3 className={styles.accordionMainTitle}>
        {showPrefix && (
          <span className={styles.titlePrefix} aria-hidden="true">
            &gt;_
          </span>
        )}
        {title}
      </h3>

      <p className={styles.certificatesIntro}>{t(group.introKey)}</p>

      <div className={styles.fullCertWrapper}>
        <button
          type="button"
          className={`${styles.btnViewCert} ${styles.btnViewCertPrimary}`}
          onClick={() => onOpenModal(group.fullCertImage)}
        >
          {t(group.fullCertButtonKey)}
        </button>
      </div>

      {group.categories.map(({ id, titleKey, hoursKey, modules }) => (
        <details key={id} className={styles.accordionCategory}>
          <summary>
            {t(titleKey)}
            <span className={styles.certHours}>{t(hoursKey)}</span>
          </summary>
          <div className={styles.accordionContent}>
            {modules.map(({ labelKey, image }) => (
              <div key={labelKey} className={styles.subModule}>
                <span>{t(labelKey)}</span>
                <button
                  type="button"
                  className={styles.btnViewCert}
                  onClick={() => onOpenModal(image)}
                >
                  {t('certificates.viewButton')}
                </button>
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}

function Certificates() {
  const { t } = useTranslation()
  const [modalImage, setModalImage] = useState(null)

  const openModal = useCallback((imageSrc) => {
    setModalImage(imageSrc)
  }, [])

  const closeModal = useCallback(() => {
    setModalImage(null)
  }, [])

  return (
    <>
      <RevealSection id="certificates" className={styles.sectionLight}>
        <div className={styles.container}>
          <div className={styles.sectionTitleCenter}>
            <h2>{t('certificates.title')}</h2>
            <p>{t('certificates.subtitle')}</p>
          </div>

          <CertificateGroup
            group={{
              ...SOFT_SKILLS_CERTIFICATES,
              introKey: 'certificates.softSkills.intro',
            }}
            title={t('certificates.softSkills.title')}
            onOpenModal={openModal}
          />

          <CertificateGroup
            group={{
              ...IA_CERTIFICATES,
              introKey: 'certificates.ia.intro',
            }}
            title={t('certificates.ia.title')}
            showPrefix
            className={styles.certificatesGroupSpaced}
            onOpenModal={openModal}
          />
        </div>
      </RevealSection>

      <CertModal imageSrc={modalImage} onClose={closeModal} />
    </>
  )
}

export default Certificates
