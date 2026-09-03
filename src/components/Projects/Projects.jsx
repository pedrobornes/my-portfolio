import { Trans, useTranslation } from 'react-i18next'
import RevealSection from '../RevealSection/RevealSection'
import styles from './Projects.module.css'

const bold = <strong />

const PROJECTS = [
  {
    id: 'statusTimer',
    translationKey: 'projects.statusTimer',
    techTags: [
      'Next.js',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Python',
      'API REST',
    ],
    links: {
      code: 'https://github.com/pedrobornes/StatusTimer',
    },
    badgeKey: 'projects.badges.productionArchived',
    featured: true,
  },
  {
    id: 'readingVault',
    translationKey: 'projects.readingVault',
    techTags: [
      'React',
      'TypeScript',
      'Java',
      'Spring Boot',
      'API REST',
      'MySQL',
      'Figma',
    ],
    links: {
      code: 'https://github.com/pedrobornes/reading-vault',
      web: 'https://readingvault.up.railway.app/',
    },
    teamLink: {
      href: 'https://www.linkedin.com/in/angeles-de-la-rosa-santiago-204845226/',
      labelKey: 'projects.readingVault.teamNote',
    },
  },
  {
    id: 'proyectoCine',
    translationKey: 'projects.proyectoCine',
    techTags: [
      'Angular',
      'Laravel',
      'API REST',
      'MySQL',
      'Elasticsearch',
      'Sass',
    ],
    links: {
      code: 'https://github.com/pedrobornes/Proyecto_Angular_Laravel',
      web: 'https://ruix.iesruizgijon.es/pabornes/Proyecto_Angular_Laravel/frontend/home',
    },
  },
]

function Projects() {
  const { t } = useTranslation()

  return (
    <RevealSection id="projects" className={styles.sectionLight}>
      <div className={styles.container}>
        <div className={styles.sectionTitleCenter}>
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.subtitle')}</p>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map(({ id, translationKey, techTags, links, teamLink, badgeKey, featured }) => (
            <article
              key={id}
              className={`${styles.projectCard}${featured ? ` ${styles.projectCardFeatured}` : ''}`}
            >
              <div className={styles.projectHeader}>
                <h3>{t(`${translationKey}.title`)}</h3>
                {badgeKey && (
                  <span className={styles.productionBadge}>{t(badgeKey)}</span>
                )}
              </div>
              <p>
                <Trans
                  i18nKey={`${translationKey}.description`}
                  components={{ bold }}
                />
              </p>
              <p className={styles.projectTeamNote}>
                {teamLink ? (
                  <Trans
                    i18nKey={teamLink.labelKey}
                    components={{
                      bold,
                      link: (
                        <a
                          href={teamLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.teamLink}
                        />
                      ),
                    }}
                  />
                ) : (
                  <Trans
                    i18nKey={`${translationKey}.teamNote`}
                    components={{ bold }}
                  />
                )}
              </p>
              <div className={styles.projectTechTags}>
                {techTags.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {links.code && (
                  <a
                    href={links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnProjectLink}
                  >
                    {t('projects.viewCode')}
                  </a>
                )}
                {links.web && (
                  <a
                    href={links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnProjectLink}
                  >
                    {t('projects.viewWeb')}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

export default Projects
