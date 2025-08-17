import React from 'react'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

const SwitchLocale = () => {
  const locale = useLocale()
  return (
    <div
      data-testid='test-switch-locale'
      className='dropdown dropdown-end flex'
    >
      <div tabIndex={0} role='button' className='transition-all hover:text-main-color-primavera1'>
        {locale.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-main-color-primavera2 rounded-box z-[1] w-auto p-2 shadow'
      >
        <li>
          <Link href={'/'} passHref locale='en'>
            EN
          </Link>
        </li>
        <li>
          <Link href={'/'} passHref locale='th'>
            TH
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SwitchLocale
