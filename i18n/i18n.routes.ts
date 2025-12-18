import type { locales } from '~~/nuxt.config';

export type IRoutingPage = Record<string, Record<(typeof locales)[number], string>>;

export const RoutingPages: IRoutingPage = {
  /**
   * example
   *'branches/[slug]': {
   *'es-ES': '/filial/[slug]',
   *'en-GB': '/branches/[slug]',
   *},
   */
  auth: {
    'es-ES': '/auth',
    'en-GB': '/auth',
  },
  playground: {
    'es-ES': '/playground',
    'en-GB': '/playground',
  },
  'invernaderos/index': {
    'es-ES': '/invernaderos',
    'en-GB': '/greenhouses',
  },
   'login/login': {
    'es-ES': '/login',
    'en-GB': '/login',
  },
};
