import { IMAGES } from '../constants/images'

export const SOFT_SKILLS_CERTIFICATES = {
  fullCertImage: IMAGES.certificates.softSkills.global,
  fullCertButtonKey: 'certificates.softSkills.fullCertButton',
  categories: [
    {
      id: 'communication',
      titleKey: 'certificates.softSkills.categories.communication.title',
      hoursKey: 'certificates.softSkills.categories.communication.hours',
      modules: [
        {
          labelKey:
            'certificates.softSkills.categories.communication.modules.habilidadesComunicativas',
          image: IMAGES.certificates.softSkills.habilidadesComunicativas,
        },
        {
          labelKey:
            'certificates.softSkills.categories.communication.modules.comunicacionEquipo',
          image: IMAGES.certificates.softSkills.comunicacionEquipo,
        },
      ],
    },
    {
      id: 'feedback',
      titleKey: 'certificates.softSkills.categories.feedback.title',
      hoursKey: 'certificates.softSkills.categories.feedback.hours',
      modules: [
        {
          labelKey:
            'certificates.softSkills.categories.feedback.modules.criticaVsFeedback',
          image: IMAGES.certificates.softSkills.criticaVsFeedback,
        },
        {
          labelKey:
            'certificates.softSkills.categories.feedback.modules.competenciasFacilitadoras',
          image: IMAGES.certificates.softSkills.competenciasFacilitadoras,
        },
        {
          labelKey:
            'certificates.softSkills.categories.feedback.modules.beneficiosFeedback',
          image: IMAGES.certificates.softSkills.beneficiosFeedback,
        },
      ],
    },
    {
      id: 'team',
      titleKey: 'certificates.softSkills.categories.team.title',
      hoursKey: 'certificates.softSkills.categories.team.hours',
      modules: [
        {
          labelKey: 'certificates.softSkills.categories.team.modules.tipsEquipos',
          image: IMAGES.certificates.softSkills.tipsEquipos,
        },
        {
          labelKey: 'certificates.softSkills.categories.team.modules.gestionTiempo',
          image: IMAGES.certificates.softSkills.gestionTiempo,
        },
        {
          labelKey:
            'certificates.softSkills.categories.team.modules.priorizacionTareas',
          image: IMAGES.certificates.softSkills.priorizacionTareas,
        },
      ],
    },
    {
      id: 'productivity',
      titleKey: 'certificates.softSkills.categories.productivity.title',
      hoursKey: 'certificates.softSkills.categories.productivity.hours',
      modules: [
        {
          labelKey:
            'certificates.softSkills.categories.productivity.modules.neurociencia',
          image: IMAGES.certificates.softSkills.neurociencia,
        },
        {
          labelKey:
            'certificates.softSkills.categories.productivity.modules.asertividad',
          image: IMAGES.certificates.softSkills.asertividad,
        },
        {
          labelKey:
            'certificates.softSkills.categories.productivity.modules.automotivacionResiliencia',
          image: IMAGES.certificates.softSkills.automotivacionResiliencia,
        },
      ],
    },
  ],
}

export const IA_CERTIFICATES = {
  fullCertImage: IMAGES.certificates.ia.global,
  fullCertButtonKey: 'certificates.ia.fullCertButton',
  categories: [
    {
      id: 'iaDevelopers',
      titleKey: 'certificates.ia.categories.developers.title',
      hoursKey: 'certificates.ia.categories.developers.hours',
      modules: [
        {
          labelKey: 'certificates.ia.categories.developers.modules.fundamentos',
          image: IMAGES.certificates.ia.fundamentos,
        },
        {
          labelKey:
            'certificates.ia.categories.developers.modules.asistentesCodigo',
          image: IMAGES.certificates.ia.asistentesCodigo,
        },
        {
          labelKey:
            'certificates.ia.categories.developers.modules.promptEngineering',
          image: IMAGES.certificates.ia.promptEngineering,
        },
        {
          labelKey:
            'certificates.ia.categories.developers.modules.integracionApis',
          image: IMAGES.certificates.ia.integracionApis,
        },
        {
          labelKey: 'certificates.ia.categories.developers.modules.agentes',
          image: IMAGES.certificates.ia.agentes,
        },
        {
          labelKey: 'certificates.ia.categories.developers.modules.fullstack',
          image: IMAGES.certificates.ia.fullstack,
        },
      ],
    },
  ],
}
