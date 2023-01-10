import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '@/interfaces/next-interface'
import ThemeAntdProvider from '@/contexts/theme-antd-provider'
import StyledProvider from '@/contexts/styled-provider'
import '../styles/sass/main.sass'

type EnhancedAppProps = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: EnhancedAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <StyledProvider>
      <ThemeAntdProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeAntdProvider>
    </StyledProvider>
  )
}
