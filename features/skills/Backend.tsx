import { Card } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { FcApproval } from 'react-icons/fc'
import styled from 'styled-components'

const Backend = () => {
  const { t } = useTranslation('common')
  const skill_backend1 = [
    {
      skill_name: 'Node',
      skill_level: t('skills.intermediate'),
    },
    {
      skill_name: 'PHP',
      skill_level: t('skills.basic'),
    },
    {
      skill_name: 'Linux',
      skill_level: t('skills.basic'),
    },
  ]
  const skill_backend2 = [
    {
      skill_name: 'Typescript',
      skill_level: t('skills.advanced'),
    },
    {
      skill_name: 'SQL',
      skill_level: t('skills.intermediate'),
    },
    {
      skill_name: 'Golang',
      skill_level: t('skills.beginner'),
    },
  ]
  return (
    <React.Fragment>
      <Card>
        <Skilltitle>Backend Developer</Skilltitle>
        <SkillBox>
          <SkillGroup>
            {skill_backend1.map((data, i) => (
              <SkillData key={i}>
                <FcApproval />
                <div>
                  <SkillName>{data.skill_name}</SkillName>
                  <SkillLevel>{data.skill_level}</SkillLevel>
                </div>
              </SkillData>
            ))}
          </SkillGroup>

          <SkillGroup>
            {skill_backend2.map((data, i) => (
              <SkillData key={i}>
                <FcApproval />
                <div>
                  <SkillName>{data.skill_name}</SkillName>
                  <SkillLevel>{data.skill_level}</SkillLevel>
                </div>
              </SkillData>
            ))}
          </SkillGroup>
        </SkillBox>
      </Card>
    </React.Fragment>
  )
}

export default Backend

const Skilltitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 16px;
  }
`
const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 3rem;
`
const SkillGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
  padding-top: 22px;

  ${(props) => props.theme.breakpoints.md.down} {
    padding-top: 10px;
  }
`
const SkillData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  svg {
    font-size: 1.4rem;
  }
`
const SkillName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 14px;
  }
`
const SkillLevel = styled.span`
  font-size: small;
  color: #757575fa;

  ${(props) => props.theme.breakpoints.sm.down} {
    font-size: 10px;
  }
`
