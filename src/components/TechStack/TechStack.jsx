import { useTranslation } from 'react-i18next'
import { LANGUAGES, TECH_CATEGORIES } from '../../data/techStack'
import RevealSection from '../RevealSection/RevealSection'
import styles from './TechStack.module.css'

function TechStack() {
  const { t } = useTranslation()

  return (
    <RevealSection id="tech" className={styles.sectionDark}>
      <div className={styles.container}>
        <div className={styles.sectionTitleCenter}>
          <h2>{t('tech.title')}</h2>
          <p>{t('tech.subtitle')}</p>
        </div>

        <div className={styles.techGrid}>
          {TECH_CATEGORIES.map(({ id, titleKey, tags }) => (
            <div key={id} className={styles.techCategory}>
              <h3>{t(titleKey)}</h3>
              <div className={styles.techItems}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.techTagSolid}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.infoCard}>
            <h3>{t('tech.education.title')}</h3>
            <p className={styles.cardTitleSub}>{t('tech.education.degree')}</p>
            <p className={styles.cardDesc}>{t('tech.education.school')}</p>
          </div>

          <div className={styles.infoCard}>
            <h3>{t('tech.languages.title')}</h3>
            <div className={styles.languageList}>
              {LANGUAGES.map(({ id, nameKey, levelKey, levelVariant }) => (
                <div key={id} className={styles.langItem}>
                  <span>{t(nameKey)}</span>
                  <span
                    className={
                      levelVariant === 'accent'
                        ? styles.langLevel
                        : styles.langLevelAlt
                    }
                  >
                    {t(levelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}

export default TechStack
