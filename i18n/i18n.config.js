import messages from './';

export default defineI18nConfig(() => {
  const defaultLocale = (process.env.NUXT_PUBLIC_DEFAULT_LOCALE ?? 'es-ES') as 'es-ES' | 'en-GB';

  return {
    numberFormats: {
      'en-GB': {
        default: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          trailingZeroDisplay: 'stripIfInteger',
        },
        exchangeRate: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 6,
        },
        inputField: {
          maximumFractionDigits: 2,
        },
      },
      'es-ES': {
        default: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          spanishFix: true,
        },
        exchangeRate: {
          minimumFractionDigits: 2,
          maximumFractionDigits: 6,
          spanishFix: true,
        },
        inputField: {
          maximumFractionDigits: 2,
          spanishFix: true,
        },
      },
    },
    legacy: false,
    globalInjection: true,
    locale: defaultLocale,
    fallbackLocale: {
      'en-US': ['en-GB'],
      default: ['en-GB'],
    },
    messages: {
      'en-GB': messages['en-GB'],
      'es-ES': messages[defaultLocale],
    },
  };
});
