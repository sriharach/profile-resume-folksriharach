import { ClockCircleOutlined } from '@ant-design/icons'
import { Timeline } from 'antd'
import React from 'react'
import styled from 'styled-components'

const QualificationPage = () => {
  return (
    <React.Fragment>
      <div id='qualification' />
      <Section>
        <Topic>
          <h2>Qualification</h2>
          <p>My qualification</p>
        </Topic>
        <Timeline mode='alternate'>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color='red'>
            Network problems being solved 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          >
            Technical testing 2015-09-01
          </Timeline.Item>
        </Timeline>
      </Section>
    </React.Fragment>
  )
}

export default QualificationPage

const Section = styled.section`
  display: grid;
  row-gap: 4rem;
`

const Topic = styled.div`
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: bold;
  }

  p {
    color: #757575fa;
  }
`
