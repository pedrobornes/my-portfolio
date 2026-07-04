const IMG_BASE = `${import.meta.env.BASE_URL}img`

export const IMAGES = {
  profile: `${IMG_BASE}/foto_curriculum_online.png`,
  certificates: {
    softSkills: {
      global: `${IMG_BASE}/certificados/soft_skills/global_soft_skills.png`,
      habilidadesComunicativas: `${IMG_BASE}/certificados/soft_skills/habilidades_comunicativas.png`,
      comunicacionEquipo: `${IMG_BASE}/certificados/soft_skills/comunicacion_equipo.png`,
      criticaVsFeedback: `${IMG_BASE}/certificados/soft_skills/critica_vs_feedback.png`,
      competenciasFacilitadoras: `${IMG_BASE}/certificados/soft_skills/competencias_facilitadoras.png`,
      beneficiosFeedback: `${IMG_BASE}/certificados/soft_skills/beneficios_feedback.png`,
      tipsEquipos: `${IMG_BASE}/certificados/soft_skills/tips_equipos.png`,
      gestionTiempo: `${IMG_BASE}/certificados/soft_skills/gestion_tiempo.png`,
      priorizacionTareas: `${IMG_BASE}/certificados/soft_skills/priorizacion_tareas.png`,
      neurociencia: `${IMG_BASE}/certificados/soft_skills/neurociencia.png`,
      asertividad: `${IMG_BASE}/certificados/soft_skills/asertividad.png`,
      automotivacionResiliencia: `${IMG_BASE}/certificados/soft_skills/automotivacion_resiliencia.png`,
    },
    ia: {
      global: `${IMG_BASE}/certificados/ia/ia_desarrolladores.png`,
      fundamentos: `${IMG_BASE}/certificados/ia/fundamentos_ia.png`,
      asistentesCodigo: `${IMG_BASE}/certificados/ia/asistentes_codigo.png`,
      promptEngineering: `${IMG_BASE}/certificados/ia/prompt_engineering.png`,
      integracionApis: `${IMG_BASE}/certificados/ia/integracion_apis_ia.png`,
      agentes: `${IMG_BASE}/certificados/ia/agentes_ia.png`,
      fullstack: `${IMG_BASE}/certificados/ia/fullstack_ia.png`,
    },
  },
}