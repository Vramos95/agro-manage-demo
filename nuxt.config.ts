// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import svgLoader from 'vite-svg-loader';
import { RoutingPages } from './i18n/i18n.routes';
import { resolve } from 'path';

export const locales = ['es-ES', 'en-GB'];
export const defaultLocale = 'es-ES';

const myPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f2f9e9',
      100: '#e8f5de',
      200: '#d5eabb',
      300: '#79bc24',
      400: '#6da920',
      500: '#61961d',
      600: '#5a8d1b',
      700: '#497116',
      800: '#385510',
      900: '#2a420d',
    },
    success: {
      50: '#f2f9e9',
      100: '#e8f5de',
      200: '#d5eabb',
      300: '#79bc24',
      400: '#6da920',
      500: '#61961d',
      600: '#5a8d1b',
      700: '#497116',
      800: '#385510',
      900: '#2a420d',
    },
    danger: {
      50: '#fde8e8',
      100: '#fcc8c8',
      200: '#f7a0a0',
      300: '#d32f2f',
      400: '#c62828',
      500: '#b71c1c',
      600: '#a01616',
      700: '#831111',
      800: '#660d0d',
      900: '#4a0a0a',
    },
  },
});

export default defineNuxtConfig({
  srcDir: 'src/',
  rootDir: './',
  alias: {
    '@src': resolve(__dirname, './src'),
  },

  css: ['~/assets/scss/style.scss'],
  
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/google-fonts',
    // '@getd/ui-library'
  ],

  typescript: {
    shim: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
    },
  },

  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component',
        svgoConfig: {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  removeUnknownsAndDefaults: false,
                  removeUselessStrokeAndFill: false,
                },
              },
            },
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              },
            },
          ],
        },
      }),
    ],
    optimizeDeps: {
      include: ['vuedraggable'],
    },
  },

  runtimeConfig: {
    public: {
      appName: 'Agro manage',
      isDev: true,
      backendUrl: 'http://localhost:80',
      apiPath: '/api/graphql',
      backendAuthPath: '/api/oidc/auth',
      defaultLocale: 'es-ES',
      cloudfrontUrl: '',
      gtmId: '',
      mapboxToken: '',
    },
  },


  devServer: { 
    host: '0.0.0.0', 
    port: 3000 
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    locales,
    defaultLocale,
    customRoutes: 'config',
    pages: RoutingPages,
  },

  gexUILibrary: {
    enablePrimeVue: true,
  },

  robots: {
    configPath: './robots.config.ts',
  },

  site: {
    url: process.env.NUXT_PUBLIC_URL_BASE,
  },

  sitemap: {
    discoverImages: false,
    exclude: ['/contents/**'],
  },


  primevue: {
    options: {
      theme: {
        preset: myPreset,
        prefix: 'p',
        darkModeSelector: '.dark-mode',
        options: {
          cssLayer: true
        }
      },
    },
  },

  fontawesome: {
    icons: {
      solid: ['chevron-left', 'chevron-right', 'circle'],
    },
  },

  googleFonts: {
    download: true,
    outputDir: 'src/assets',
    stylePath: 'scss/settings/_fonts.scss',
    inject: true,
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  devtools: {
    enabled: false,
    timeline: {
      enabled: false,
    },
  },

  compatibilityDate: '2025-03-31',
})
