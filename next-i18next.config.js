/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'th',
    localeDetection: false,
  },

  nonExplicitSupportedLngs: true,
  serializeConfig: false,
  localePath: require('path').resolve('./public/locales'),
}
