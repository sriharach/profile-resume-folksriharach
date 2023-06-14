import { appWithTranslation } from 'next-i18next'
import { NextPageWithLayout } from '@/interfaces/next-interface'
import ThemeAntdProvider from '@/contexts/theme-antd-provider'
import StyledProvider from '@/contexts/styled-provider'
import Hoc from '@/components/Hoc'
import nextI18NextConfig from '../../next-i18next.config.js'
import type { AppProps } from 'next/app'
import '../styles/sass/main.sass'

type EnhancedAppProps = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: EnhancedAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <StyledProvider>
      <ThemeAntdProvider>
        <Hoc>{getLayout(<Component {...pageProps} />)}</Hoc>
      </ThemeAntdProvider>
    </StyledProvider>
  )
}

export default appWithTranslation(App, nextI18NextConfig)
