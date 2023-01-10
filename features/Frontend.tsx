import { Card } from 'antd'
import React from 'react'
import { FcApproval } from 'react-icons/fc'
import styled from 'styled-components'

const Frontend = () => {
  const front_skills1 = [
    {
      skill_name: 'React',
      skill_level: 'Intermediate',
    },
    {
      skill_name: 'Next',
      skill_level: 'Intermediate',
    },
  ]
  const front_skills2 = [
    {
      skill_name: 'React Native',
      skill_level: 'Basic',
    },
    {
      skill_name: 'Javascript',
      skill_level: 'Advanced',
    },
  ]
  return (
    <React.Fragment>
      <Card>
        <Skilltitle>Frontend Developer</Skilltitle>
        <SkillBox>
          <SkillGroup>
            {front_skills1.map((data, i) => (
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
            {front_skills2.map((data, i) => (
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

export default Frontend

const Skilltitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;

  @media (prefers-color-scheme: dark) {
    color: #b0b8b8;
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
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;

  @media (prefers-color-scheme: dark) {
    color: #b0b8b8;
  }
`
const SkillLevel = styled.span`
  font-size: small;
  color: #757575fa;
`
