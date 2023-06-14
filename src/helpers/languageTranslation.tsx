/* eslint-disable import/named */
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const languageTranslation = async (
  locale: string | undefined,
  addedNameSpaces: string[] = [],
): Promise<SSRConfig | undefined> => {
  if (!locale) return undefined
  const translationProp = await serverSideTranslations(locale, [
    'common',
    'header',
    'footer',
    ...addedNameSpaces,
  ])
  return translationProp
}

export default languageTranslation
