import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/styled-component-theme'
import { NextChildren } from '@/interfaces/next-interface'

const StyledProvider = ({ children }: NextChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledProvider
