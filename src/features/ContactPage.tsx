import React, { useState } from 'react'
import { SendOutlined } from '@ant-design/icons'
import { Card, Input, Form, Button, notification } from 'antd'
import styled from 'styled-components'
import { BsLine, BsMailbox, BsPhone } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'next-i18next'

type TinputForm = {
  name: string
  mail: string
  message: string
  phone_number: string
}

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string

const ContactPage = () => {
  const { t } = useTranslation('common')
  const [sendLoadmail, setSendLoadMail] = useState<boolean>(false)
  const [api, contextHolder] = notification.useNotification()
  const [form] = Form.useForm<TinputForm>()

  const sendMessage = async (data: TinputForm) => {
    try {
      setSendLoadMail(true)
      // eslint-disable-next-line import/no-named-as-default-member
      const result = await emailjs.send(serviceID, templateID, data, publicKey)
      if (result.status === 200) {
        setSendLoadMail(false)
        form.resetFields()
        api['success']({
          message: t('contact.message-sent'),
          description: t('contact.message-description'),
          duration: 3.5,
        })
      }
    } catch (error) {
      console.log('errorSendMail', error)
      api['error']({
        message: t('contact.message-crashes'),
        description: t('contact.message-error'),
        duration: 3.5,
      })
      setSendLoadMail(false)
    }
  }
  return (
    <React.Fragment>
      {contextHolder}
      <div id='contact' />
      <Section>
        <Topic>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.sub-title')}</p>
        </Topic>
        <ContactBox>
          <ContactSendWrite>
            <ContactTitle>{t('contact.send-to-me')}</ContactTitle>
            <ContactCard>
              <div>
                <BsPhone />
              </div>
              <h3>{t('contact.phone-number')}</h3>
              <p>0963011722</p>
            </ContactCard>
            <ContactCard>
              <div>
                <BsMailbox />
              </div>
              <h3>{t('contact.email')}</h3>
              <p>folksriharach@gmail.com</p>
            </ContactCard>
            <ContactCard>
              <div>
                <BsLine />
              </div>
              <h3>{t('contact.line-id')}</h3>
              <p>folk7154</p>
            </ContactCard>
          </ContactSendWrite>

          <ContactSendWrite>
            <ContactTitle>{t('contact.write-to-me')}</ContactTitle>
            <Form
              form={form}
              onFinish={sendMessage}
              style={{ width: '100%' }}
              layout='vertical'
              initialValues={{
                layout: 'vertical',
              }}
            >
              <Form.Item
                label={t('contact.write-input.name')}
                name='name'
                rules={[
                  {
                    required: true,
                    message: `${t('contact.write-input.error-request.name')}`,
                  },
                ]}
              >
                <ContactInput placeholder={`${t('contact.write-input.placeholder.name')}`} />
              </Form.Item>
              <Form.Item
                label={t('contact.write-input.mail')}
                name='mail'
                rules={[
                  {
                    type: 'email',
                    message: `${t('contact.write-input.error-request.input-valid-email')}`,
                  },
                  {
                    required: true,
                    message: `${t('contact.write-input.error-request.mail')}`,
                  },
                ]}
              >
                <ContactInput placeholder={`${t('contact.write-input.placeholder.mail')}`} />
              </Form.Item>
              <Form.Item
                label={t('contact.write-input.phone-number')}
                name='phone_number'
                rules={[
                  {
                    type: 'number',
                    transform(value) {
                      if (typeof value === 'undefined') return
                      return Number(value)
                    },
                    message: `${t('contact.write-input.error-request.input-valid-phone-number')}`,
                  },
                  {
                    required: true,
                    message: `${t('contact.write-input.error-request.phone-number')}`,
                  },
                ]}
              >
                <ContactInput placeholder={`${t('contact.write-input.placeholder.phone-number')}`} />
              </Form.Item>
              <Form.Item
                label={t('contact.write-input.message')}
                name='message'
                rules={[
                  {
                    required: true,
                    message: `${t('contact.write-input.error-request.message')}`,
                  },
                ]}
              >
                <Input.TextArea
                  style={{ fontSize: '18px' }}
                  rows={4}
                  placeholder={`${t('contact.write-input.placeholder.message')}`}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  loading={sendLoadmail}
                  style={{ height: '50px', borderRadius: '0.8rem' }}
                  icon={<SendOutlined />}
                  type='primary'
                  htmlType='submit'
                >
                  {t('contact.write-input.send-message')}
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
  max-height: 130px;
  text-align: center;

  svg {
    font-size: 1.8rem;
  }

  ${(props) => props.theme.prefers_color_scheme} {
    color: #fff;
  }
`
const ContactInput = styled(Input)`
  padding: 16px;
  font-size: 18px;
`
