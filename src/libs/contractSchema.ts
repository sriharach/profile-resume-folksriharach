import { FormContract } from '@/types/models/contract.modal'
import * as yup from 'yup'

export default () => {
  return yup
    .object({
      name: yup.string().required('Name is a required field.'),
      phone_number: yup.string().required('Phone number is a required field.'),
      mail: yup.string().required('E-mail is a required field.'),
      message: yup.string().required('Message is a required field.'),
    })
    .required()
}
