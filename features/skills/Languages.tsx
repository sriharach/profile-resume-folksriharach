import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import { FcApproval } from 'react-icons/fc'
import { useTranslation } from 'next-i18next'

const Languages = () => {
  const { t } = useTranslation('common')
  return (
    <React.Fragment>
      <Card>
        <LanguagesTitle>{t('skills.my-languages')}</LanguagesTitle>
        <LanguagesBox>
          <LanguagesGroup>
            <LanguagesData>
              <FcApproval />
              <div>
                <LanguagesName>Englist</LanguagesName>
                <LanguagesLevel>{t('skills.basic')}</LanguagesLevel>
              </div>
            </LanguagesData>
          </LanguagesGroup>

          <LanguagesGroup>
            <LanguagesData>
              <FcApproval />
              <div>
                <LanguagesName>Thai</LanguagesName>
                <LanguagesLevel>{t('skills.advanced')}</LanguagesLevel>
              </div>
            </LanguagesData>
          </LanguagesGroup>
        </LanguagesBox>
      </Card>
    </React.Fragment>
  )
}

export default Languages

const LanguagesTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 16px;
  }
`
const LanguagesBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
`

const LanguagesGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
  padding-top: 22px;

  ${(props) => props.theme.breakpoints.md.down} {
    padding-top: 10px;
  }
`

const LanguagesData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  svg {
    font-size: 1.4rem;
  }
`

const LanguagesName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 14px;
  }
`
const LanguagesLevel = styled.span`
  font-size: small;
  color: #757575fa;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 10px;
  }
`
