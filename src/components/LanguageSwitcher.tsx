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
      <LanguageBox>
        <LanguageEN
          current={Router.locale}
          onClick={(e) => {
            e.preventDefault()
            handleSwitchLanguage('en')
          }}
        >
          EN
        </LanguageEN>
        <span style={{ cursor: 'default' }}>|</span>
        <LanguageTH
          current={Router.locale}
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
  align-items: center;

  ${(props) => props.theme.breakpoints.md.down} {
    justify-content: end;
  }
`
const LanguageEN = styled.span<{ current?: string }>`
  ${({ current }) =>
    current === 'en'
      ? `cursor: default;
  font-weight: 600;
  text-decoration: underline`
      : `cursor: pointer;
  font-weight: none;`}
`
const LanguageTH = styled.span<{ current?: string }>`
  ${({ current }) =>
    current === 'th'
      ? `cursor: default;
  font-weight: 600;
  text-decoration: underline;`
      : `cursor: pointer;
  font-weight: none;`}
`
