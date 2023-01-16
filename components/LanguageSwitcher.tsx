import Router from 'next/router'
import React from 'react'
import styled from 'styled-components'

const LanguageSwitcher = () => {
  const handleSwitchLanguage = (locale: string) => {
    Router.replace(
      { pathname: Router.pathname, query: Router.query },
      Router.asPath,
      { locale, scroll: false },
    )
  }
  return (
    <React.Fragment>
      <LanguageBox className='front-md'>
        <LanguageEN
          onClick={(e) => {
            e.preventDefault()
            handleSwitchLanguage('en')
          }}
        >
          EN
        </LanguageEN>
        <span>|</span>
        <LanguageTH
          onClick={(e) => {
            e.preventDefault()
            handleSwitchLanguage('th')
          }}
        >
          TH
        </LanguageTH>
      </LanguageBox>
    </React.Fragment>
  )
}

export default LanguageSwitcher

const LanguageBox = styled.div`
  display: flex;
  column-gap: 6px;
  font-size: 14px;
  font-weight: 600;
  align-items: center;

  ${(props) => props.theme.breakpoints.md.down} {
    justify-content: end;
  }
`

const LanguageEN = styled.span`
  cursor: pointer;
`
const LanguageTH = styled.span`
  cursor: pointer;
`
