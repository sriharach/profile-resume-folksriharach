import { Timeline, Modal, Divider } from 'antd'
import React, { useState } from 'react'
import { BiBook, BiBriefcaseAlt2 } from 'react-icons/bi'
import styled from 'styled-components'
import useMedia from 'use-media'
import { useTranslation } from 'next-i18next'
import { theme } from '@/styles/styled-component-theme'

enum Eeducation {
  BACHELOR_DEGREE = 'BACHELOR DEGREE',
  VOCATIONAL_CERTIFICATE = 'VOCATIONAL CERTIFICATE',
  JUNIOR_HIGH_SCHOOL = 'JUNIOR HIGH SCHOOL',
}

enum EstatusQualification {
  EDUCATION = 'EDUCATION',
  EXPERIENCE = 'EXPERIENCE',
}

const Experiences = () => {
  const { t } = useTranslation('common')
  const isWideMd = useMedia({ maxWidth: `${theme.breakpoints.md.value}px` })
  const isWideLg = useMedia({ maxWidth: `${theme.breakpoints.lg.value}px` })

  const educations = [
    {
      key: Eeducation.BACHELOR_DEGREE,
      year: 'ปีที่จบการศึกษา 2564',
      education_level: 'ปริญญาตรี',
      academy_name: 'มหาวิทยาลัยราชภัฏจันทรเกษม',
      full_education: {
        education_name_en: 'Bachelor degree',
        education_name_th: 'ปริญญาตรี',
        education_group: 'วิทยาการการจัดการ',
        education_course: 'บริหารธุรกิจบัณฑิต',
        education_major: 'คอมพิวเตอร์ธุรกิจ',
        education_grade: '2.63',
        education_year: '2564',
      },
    },
    // {
    //   key: Eeducation.VOCATIONAL_CERTIFICATE,
    //   year: 'ปีที่จบการศึกษา 2560',
    //   education_level: 'ประกาศนียบัตรวิชาชีพ (ปวช.)',
    //   academy_name: 'วิทยาลัยบริหารธุรกิจและการท่องเที่ยวกรุงเทพ',
    //   full_education: {
    //     education_name_en: 'Vocational certificate',
    //     education_name_th: 'ประกาศนียบัตรวิชาชีพ (ปวช.)',
    //     education_group: '-',
    //     education_course: 'วิชาพาณิชยกรรม',
    //     education_major: 'คอมพิวเตอร์ธุรกิจ',
    //     education_grade: '2.19',
    //     education_year: '2560',
    //   },
    // },
    // {
    //   key: Eeducation.JUNIOR_HIGH_SCHOOL,
    //   year: 'ปีที่จบการศึกษา 2557',
    //   education_level: 'มัธยมศึกษาตอนต้น',
    //   academy_name: 'โรงเรียนสตรีวิทยา 2',
    //   full_education: {
    //     education_name_en: 'Junior high school ',
    //     education_name_th: 'มัธยมศึกษาตอนต้น',
    //     education_group: '-',
    //     education_course: '-',
    //     education_major: 'คอมพิวเตอร์',
    //     education_grade: '-',
    //     education_year: '2557',
    //   },
    // },
  ]

  const experiences = [
    {
      year: 'ปัจจุบัน',
      company_name: 'Bitkub Online Co., Ltd.',
      full_experience: {
        company_name: 'Bitkub Online Co., Ltd.',
        position: 'Frontend developer',
        period: 'พฤษภาคม 2565 ถึง ปัจจุบัน',
        address:
          '2525 อาคารเอฟวายไอเซ็นเตอร์ 2 ชั้น 11 ถนนพระรามที่ 4 แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110',
        detail_working: `พัฒนาเชื่อมต่อ Smart contract เพื่อใช้ในการทำเหรียญดิจิทัล (KDEV) โดยใช้ Metamask ในการใช้จ่ายไปยัง Blockchain
        ทำข้อมูลการลงทะเบียน KYC พัฒนาด้วย Nextjs. และการเก็บข้อมูล State ใช้เป็น redux/toolkit, zustand`,
      },
    },
    // {
    //   year: '2565',
    //   company_name: 'ENTER Corporation Co., Ltd.',
    //   full_experience: {
    //     company_name: 'ENTER Corporation Co., Ltd.',
    //     position: 'Frontend developer',
    //     period: 'กุมภาพันธ์ 2565 ถึง พฤษภาคม 2565',
    //     address:
    //       'อาคารพร้อมพันธุ์ 3 ชั้น 2 77/112 ซอย ลาดพร้าว 3 ถนนลาดพร้าว แขววจอมพล เขตจตุจักร กรุงเทพมหานคร 10900',
    //     detail_working: `ขึ้นโครงสร้างงานของ Nextjs สำหรับงานศาลแพ่ง
    //     ออกแบบหน้า UI ตามรูปแบบของกราฟิก`,
    //   },
    // },
    {
      year: '2564',
      company_name: 'Inter Set Research And Solution Co.,Ltd.',
      full_experience: {
        company_name: 'Inter Set Research And Solution Co.,Ltd.',
        position: 'Backend developer',
        period: 'มีนาคม 2564 ถึง กุมภาพันธ์ 2565',
        address:
          'ตึกช้าง 3300/119 23 ถนนพหลโยธิน แขววจอมพล เขตจตุจักร กรุงเทพมหานคร 10900',
        detail_working: `วิเคราห์ข้อมูล TOR เพื่อมาสร้างฐานข้อมูลข้องโครงการ โดยใช้ PostgresSql
        พัฒนาระบบหลังบ้านด้วย Nodejs Restful Api
        ติดตั้ง Geomantry PostGIS ในฐานข้อมูลบน Ubuntu ให้สามารถใช้คำสั่งการจัดการข้อมูลของการเรียกแผนที่ให้ออกมาเป็น Geojson`,
      },
    },
  ]

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<'EDUCATION' | 'EXPERIENCE'>()

  return (
    <React.Fragment>
      <Divider orientation='left' orientationMargin={isWideLg ? 0 : 50}>
        <h2>{t('about.experiences.title')}</h2>
      </Divider>
      <QualificationContainer>
        <QualificationBox
          onClick={() => {
            setModalOpen(true)
            setStatus('EDUCATION')
          }}
        >
          <QualificationTap>
            <BiBook />
            <b>{t('about.experiences.education')}</b>
          </QualificationTap>
          <Timeline
            style={{ width: '100%' }}
            mode={isWideMd ? 'alternate' : 'right'}
          >
            {educations.map((education, i) => (
              <Timeline.Item key={i} color='#49aa19'>
                <p>{education.year}</p>
                <p>{education.education_level}</p>
                <p>{education.academy_name}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </QualificationBox>
        {isWideMd && <Divider />}
        <QualificationBox
          onClick={() => {
            setModalOpen(true)
            setStatus('EXPERIENCE')
          }}
        >
          <QualificationTap>
            <BiBriefcaseAlt2 />
            <b>{t('about.experiences.experience')}</b>
          </QualificationTap>
          <Timeline
            style={{ width: '100%' }}
            mode={isWideMd ? 'alternate' : 'left'}
          >
            {experiences.map((experience, i) => (
              <Timeline.Item key={i} color='#49aa19'>
                <p>{experience.year}</p>
                <p>{experience.company_name}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </QualificationBox>
      </QualificationContainer>

      <Modal
        open={false}
        onCancel={() => setModalOpen(false)}
        footer={false}
        focusTriggerAfterClose={false}
        title={
          <b style={{ fontSize: '18px' }}>
            {status === 'EDUCATION'
              ? t('about.experiences.study-information')
              : t('about.experiences.experience-information')}
          </b>
        }
        centered
        width={640}
      >
        <ModalContainer>
          {status === EstatusQualification.EDUCATION && (
            <Timeline>
              {educations.map((education) => (
                <Timeline.Item key={education.key} color='#49aa19'>
                  <p>{education.academy_name}</p>
                  <div style={{ paddingLeft: '18px' }}>
                    <p>
                      ปีที่จบการศึกษา: {education.full_education.education_year}
                    </p>
                    <p>
                      วุฒิการศึกษา: {education.full_education.education_course}
                    </p>
                    <p>คณะวิชา: {education.full_education.education_group}</p>
                    <p>สาขา: {education.full_education.education_major}</p>
                    {/* <p>เกรด: {education.full_education.education_grade}</p> */}
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          )}

          {status === EstatusQualification.EXPERIENCE && (
            <Timeline>
              {experiences.map((experience, i) => (
                <Timeline.Item key={i} color='#49aa19'>
                  <p>{experience.year}</p>
                  <div style={{ paddingLeft: '18px' }}>
                    <p>ชื่อบริษัท: {experience.full_experience.company_name}</p>
                    <p>ตำแหน่งงาน: {experience.full_experience.position}</p>
                    <p>ระยะเวลา: {experience.full_experience.period}</p>
                    <p>ที่อยู่: {experience.full_experience.address}</p>
                    <p>
                      ลักษณะงานที่ทำ:{' '}
                      {experience.full_experience.detail_working}
                    </p>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          )}
        </ModalContainer>
      </Modal>
    </React.Fragment>
  )
}

export default Experiences

const QualificationContainer = styled.div<{
  maxHeight?: number
  overflowY?: boolean
}>`
  display: flex;
  justify-content: center;
  column-gap: 3.5rem;
  padding: 4px 6.5rem;
  width: 100%;

  ${(props) => props.theme.breakpoints.md.down} {
    display: grid;
    padding: 0;
  }
`

const QualificationBox = styled.div`
  transition: all 0.3s ease;
  div {
    transition: all 0.3s ease;
    b {
      transition: all 0.3s ease;
    }
  }
  :hover {
    padding: 10px;
    cursor: pointer;

    div {
      font-size: 17px;
      b {
        font-size: 17px;
      }
    }
  }

  /* .ant-timeline .ant-timeline-item {
    cursor: pointer;
  } */

  ${(props) => props.theme.breakpoints.md.down} {
    min-width: 540px;
    :hover {
      padding: 0px;

      div {
        font-size: 14px;
        b {
          font-size: 17px;
        }
      }
    }
  }

  ${(props) => props.theme.breakpoints.sm.down} {
    min-width: auto;
    :hover {
      padding: 0px;

      div {
        font-size: 14px;
        b {
          font-size: 17px;
        }
      }
    }
  }
`

const QualificationTap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 10px;
  padding: 0 2.5rem;

  svg {
    font-size: 1.6rem;
  }
  b {
    font-size: 18px;
  }
`
const ModalContainer = styled.div`
  padding: 0 1rem;
  margin-top: 1.5rem;
  max-height: 360px;
  overflow-y: auto;

  ${(props) => props.theme.breakpoints.sm.down} {
    padding: 2px 1rem;
  }
`
