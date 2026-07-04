import { Trans, useTranslation } from 'react-i18next'
import { IMAGES } from '../../constants/images'
import styles from './Hero.module.css'

const bold = <strong />

function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.heroContainer} aria-labelledby="hero-heading">
      <div className={styles.heroText}>
        <div className={styles.greeting}>{t('hero.greeting')}</div>
        <h1 id="hero-heading">
          {t('hero.firstName')} <br />
          <span>{t('hero.lastName')}</span>
        </h1>
        <p className={styles.badge}>{t('hero.badge')}</p>
        <p className={styles.description}>
          <Trans i18nKey="hero.description" components={{ bold }} />
        </p>
        <div className={styles.heroButtons}>
          <a className={styles.btnPrimary} href="#experience">
            {t('hero.btnExperience')}
          </a>
          <a className={styles.btnSecondary} href="#contact">
            {t('hero.btnContact')}
          </a>
        </div>
      </div>

      <div className={styles.profileCard}>
        <img
          src={IMAGES.profile}
          alt={t('hero.profileAlt')}
          className={styles.profileImgRect}
        />
        <div className={styles.profileInfo}>
          <h3>{t('hero.profileName')}</h3>
          <p className={styles.profileRole}>{t('hero.profileRole')}</p>
          <div className={styles.statusBadge}>
            <span className={styles.pulseRing} aria-hidden="true" />
            {t('hero.statusBadge')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
