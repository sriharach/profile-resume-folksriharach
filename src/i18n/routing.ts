import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locales } from './enumLocal'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [Locales.EN, Locales.TH],

  // Used when no locale matches
  defaultLocale: Locales.EN,

  localePrefix: 'as-needed',
//   localeDetection: false,
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
