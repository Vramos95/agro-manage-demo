# 🌱 AgroManage

Sistema de gestión agrícola moderno construido con Nuxt 4, PrimeVue, i18n y TypeScript.

## 🚀 Tecnologías principales
- **Nuxt 4** (Vue 3)
- **PrimeVue** (UI components)
- **i18n** (internacionalización)
- **TypeScript**
- **SCSS**
- **ESLint + Prettier** (calidad de código)

## 📁 Estructura del proyecto
```
agro-manage/
├── src/
│   ├── app.vue
│   ├── assets/
│   │   └── scss/
│   │       └── main.scss
│   ├── components/
│   ├── composables/
│   │   ├── useDateFormatter.ts
│   │   └── useNotification.ts
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   └── index.vue
├── i18n/
│   ├── es.json
│   └── en.json
├── public/
├── nuxt.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```
El servidor se inicia en `http://localhost:3000` (o el puerto disponible).

## 🏗️ Producción

```bash
npm run build
npm run preview
```

## 🌍 Internacionalización
- Español (por defecto) y Inglés
- Archivos de idioma en `/i18n/es.json` y `/i18n/en.json`

## 🎨 Composables útiles
- `useDateFormatter` para formatear fechas
- `useNotification` para mostrar notificaciones con PrimeVue Toast

## 🧹 Calidad de código
- ESLint y Prettier configurados
- Reglas para Vue, TypeScript y Prettier

## 📦 Dependencias principales
- Nuxt, Vue, PrimeVue, i18n, TypeScript, SCSS
- Linters: eslint, prettier

## 📚 Documentación
- [Nuxt](https://nuxt.com/docs)
- [PrimeVue](https://primevue.org/)
- [Nuxt i18n](https://i18n.nuxtjs.org/)

---
