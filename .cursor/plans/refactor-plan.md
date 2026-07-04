# Plan de Refactorización: Portfolio Pedro

## Objetivo Principal
Migrar el portfolio actual de HTML/CSS limpio a React + Vite manteniendo **exactamente la misma estética visual, colores, fuentes, espaciados y animaciones** que ya están definidos en el diseño original.

## Fases del Proyecto

### Fase 1: Inicialización y Estilos Globales
- [ ] Configurar la estructura de carpetas en `/src`.
- [ ] Crear `src/styles/variables.css` con todas las variables del `:root` original.
- [ ] Configurar el archivo global para el reset básico (`body`, `*`, `overflow-x`, etc.).
- [ ] Instalar y configurar `react-i18next` para preparar el terreno multilenguaje.

### Fase 2: Componentes Base (Manteniendo la estética fiel)
- [ ] **Componente CursorLight:** Implementar el fondo animado / luz de cursor radial.
- [ ] **Componente Navbar:** Implementar el cilindro flotante centrado con su comportamiento adaptativo (ocultar en móvil por scroll, fijo en PC).

### Fase 3: Secciones de Contenido y Modularización
- [ ] Componente Hero.
- [ ] Componente Experiencia / Proyectos (Estructurado con funciones claras).

### Fase 4: Internacionalización
- [ ] Extraer los textos a los archivos JSON (`es.json` y `en.json`).
- [ ] Sustituir textos planos en los componentes por el hook `useTranslation`.