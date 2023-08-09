import { Card } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { FcApproval } from 'react-icons/fc'
import { useTranslation } from 'next-i18next'

const OtherSkills = () => {
  const { t } = useTranslation('common')

  const other_skills1 = [
    {
      skill_name: 'Postgres Database',
      skill_level: t('skills.intermediate'),
    },
    {
      skill_name: 'Postman',
      skill_level: t('skills.intermediate'),
    },
  ]
  const other_skills2 = [
    {
      skill_name: 'SQL',
      skill_level: t('skills.intermediate'),
    },
    {
      skill_name: 'Linux',
      skill_level: t('skills.basic'),
    },
  ]

  return (
    <React.Fragment>
      <Card>
        <OtherTitle>{t('skills.other')}</OtherTitle>
        <OtherBox>
          <OtherGroup>
            {other_skills1.map((data, i) => (
              <OtherData key={i}>
                <FcApproval />
                <div>
                  <OtherName>{data.skill_name}</OtherName>
                  <OtherLevel>{data.skill_level}</OtherLevel>
                </div>
              </OtherData>
            ))}
          </OtherGroup>
          <OtherGroup>
            {other_skills2.map((data, i) => (
              <OtherData key={i}>
                <FcApproval />
                <div>
                  <OtherName>{data.skill_name}</OtherName>
                  <OtherLevel>{data.skill_level}</OtherLevel>
                </div>
              </OtherData>
            ))}
          </OtherGroup>
        </OtherBox>
      </Card>
    </React.Fragment>
  )
}

export default OtherSkills

const OtherTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 16px;
  }
`

const OtherBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
`

const OtherGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
  padding-top: 22px;

  ${(props) => props.theme.breakpoints.md.down} {
    padding-top: 10px;
  }
`

const OtherData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  svg {
    font-size: 1.4rem;
  }
`
const OtherName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 14px;
  }
`
const OtherLevel = styled.span`
  font-size: small;
  color: #757575fa;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 10px;
  }
`
