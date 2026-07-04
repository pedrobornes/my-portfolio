import { useTranslation } from 'react-i18next'
import RevealSection from '../RevealSection/RevealSection'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  {
    id: 'email',
    href: 'mailto:pedro.bornesduran@gmail.com',
    icon: '\u2709\ufe0f',
    labelKey: 'contact.email.label',
    valueKey: 'contact.email.value',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/pedro-bornes/',
    icon: '\ud83d\udcbc',
    labelKey: 'contact.linkedin.label',
    valueKey: 'contact.linkedin.value',
    external: true,
  },
]

function Contact() {
  const { t } = useTranslation()

  return (
    <RevealSection id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>{t('contact.title')}</h2>
      <p>{t('contact.subtitle')}</p>

      <div className={styles.contactCards}>
        {CONTACT_ITEMS.map(({ id, href, icon, labelKey, valueKey, external }) => (
          <a
            key={id}
            href={href}
            className={styles.contactCard}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <div className={styles.cardIcon} aria-hidden="true">
              {icon}
            </div>
            <div className={styles.cardLabel}>{t(labelKey)}</div>
            <div className={styles.cardValue}>{t(valueKey)}</div>
          </a>
        ))}
      </div>
    </RevealSection>
  )
}

export default Contact
