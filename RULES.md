# Reglas de Desarrollo Asistido por IA (PokeWordle)

Este archivo establece las directrices de desarrollo para asegurar la consistencia, calidad y agilidad del proyecto.

## 1. Automatización de Control de Versiones
- **Auto-Commit**: La IA tiene permiso explícito para realizar `git add .`, `git commit` y `git push` automáticamente después de implementar funcionalidades completas o correcciones significativas.
- **Mensajes de Commit**: Utilizar el formato Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `style:`).

## 2. Desarrollo Frontend (Next.js & React)
- **Componentes**: Utilizar componentes funcionales y Server/Client Components de Next.js 15 de manera adecuada (`"use client"` solo cuando sea necesario interactuar con el DOM, estado o efectos).
- **Estilos**: Preferir Tailwind CSS para todos los estilos. Mantener coherencia visual utilizando la paleta de colores existente (bg-slate-950, temas oscuros, etc.).
- **Diseño Dinámico**: Siempre que se añadan nuevos elementos, incluir feedback visual (hover states, micro-animaciones) para mantener el "look and feel" premium del juego.

## 3. Lógica y Datos
- **TypeScript**: Tipado estricto. Evitar el uso de `any` a menos que sea absolutamente inevitable.
- **Limpieza de Código**: Eliminar logs de consola (`console.log`) innecesarios antes de realizar un commit.
- **Multilenguaje/Localización**: Mantener el contenido visible en español para asegurar la coherencia de la experiencia del usuario (como en `src/lib/translations.ts`).

## 4. Flujo de Trabajo
- Siempre verificar la estabilidad del proyecto (`npm run dev` sin errores) tras cambios complejos antes de dar por finalizada la tarea.
- Si se añaden dependencias, asegurar que estén listadas en `package.json` y que sean compatibles con el entorno de despliegue en Vercel.
