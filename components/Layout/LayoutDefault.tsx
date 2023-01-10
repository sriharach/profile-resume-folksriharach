import MainHeader from './Header'
import MainFooter from './Footer'
import type { NextChildren } from '@/interfaces/next-interface'

const LayoutDefault = ({ children }: NextChildren) => {
  return (
    <section>
      <header>
        <MainHeader />
      </header>
      <main>{children}</main>
      <footer>
        <MainFooter />
      </footer>
    </section>
  )
}

export default LayoutDefault
