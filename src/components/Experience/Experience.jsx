import { Trans, useTranslation } from 'react-i18next'
import RevealSection from '../RevealSection/RevealSection'
import styles from './Experience.module.css'

const bold = <strong />

const EXPERIENCE_ITEMS = [
  {
    id: 'lfk',
    translationKey: 'experience.lfk',
  },
  {
    id: 'dbc',
    translationKey: 'experience.dbc',
  },
]

function Experience() {
  const { t } = useTranslation()

  return (
    <RevealSection id="experience" className={styles.sectionDark}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>{t('experience.title')}</h2>
          <p>{t('experience.subtitle')}</p>
        </div>

        <div className={styles.timelineWrapper}>
          {EXPERIENCE_ITEMS.map(({ id, translationKey }) => (
            <div key={id} className={styles.timelineRow}>
              <div className={styles.timelineYear}>
                {t(`${translationKey}.year`)}
              </div>
              <div className={styles.timelineDot} aria-hidden="true" />
              <article className={styles.timelineCard}>
                <h3>{t(`${translationKey}.company`)}</h3>
                <p className={styles.itemSubtitle}>
                  {t(`${translationKey}.role`)}
                </p>
                <p className={styles.itemText}>
                  <Trans
                    i18nKey={`${translationKey}.description`}
                    components={{ bold }}
                  />
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

export default Experience
