import { SendOutlined } from '@ant-design/icons'
import { Card, Input, Form, Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { BsLine, BsMailbox, BsPhone } from 'react-icons/bs'

const ContactPage = () => {
  const sendMessage = (data: any) => {
    // console.log('data', data)
    alert(data.name)
  }
  return (
    <React.Fragment>
      <div id='contact' />
      <Section>
        <Topic>
          <h2>Contact me</h2>
          <p>Get in touch</p>
        </Topic>
        <ContactBox>
          <ContactSendWrite>
            <ContactTitle>Send to me</ContactTitle>
            <ContactCard>
              <div>
                <BsPhone />
              </div>
              <h3>Phone number</h3>
              <p>0963011722</p>
            </ContactCard>
            <ContactCard>
              <div>
                <BsMailbox />
              </div>
              <h3>Email</h3>
              <p>folksriharach@gmail.com</p>
              <br />
              <p>Write me</p>
            </ContactCard>
            <ContactCard>
              <div>
                <BsLine />
              </div>
              <h3>Line ID</h3>
              <p>fspfolk</p>
              <br />
              <p>Write me</p>
            </ContactCard>
          </ContactSendWrite>

          <ContactSendWrite>
            <ContactTitle>Write to me</ContactTitle>
            <Form
              onFinish={sendMessage}
              style={{ width: '100%' }}
              layout='vertical'
              initialValues={{
                layout: 'vertical',
              }}
            >
              <Form.Item label='Name' name='name'>
                <ContactInput placeholder='Enter name' />
              </Form.Item>
              <Form.Item label='Mail' name='mail'>
                <ContactInput placeholder='Enter mail' />
              </Form.Item>
              <Form.Item label='Description' name='description'>
                <Input.TextArea
                  style={{ fontSize: '18px' }}
                  rows={4}
                  placeholder='Enter Description'
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ height: '50px', borderRadius: '0.8rem' }}
                  icon={<SendOutlined />}
                  type='primary'
                  htmlType='submit'
                >
                  Send message
                </Button>
              </Form.Item>
            </Form>
          </ContactSendWrite>
        </ContactBox>
      </Section>
    </React.Fragment>
  )
}

export default ContactPage

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

const ContactBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 480px);
  column-gap: 3rem;
  justify-content: center;

  ${(props) => props.theme.breakpoints.lg.down} {
    display: flex;
  }

  ${(props) => props.theme.breakpoints.sm.down} {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
`

const ContactSendWrite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;
  padding: 0 1rem;

  ${(props) => props.theme.breakpoints.sm.down} {
    row-gap: 1rem;
  }
`

const ContactTitle = styled.h3``

const ContactCard = styled(Card)`
  width: 100%;
  min-height: 160px;
  text-align: center;

  svg {
    font-size: 1.8rem;
  }
`
const ContactInput = styled(Input)`
  padding: 16px;
  font-size: 18px;
`
