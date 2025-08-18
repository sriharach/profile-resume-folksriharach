// libs
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

// types
import { FormContract } from '@/types/models/contract.modal'

// libs
import contractSchema from '@/libs/contractSchema'

const useContact = () => {
  const [loading, setLoading] = useState(false)

  const serviceID = process.env.SERVICE_ID as string
  const templateID = process.env.TEMPLATE_ID as string
  const publicKey = process.env.PUBLIC_KEY as string

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormContract>({
    resolver: yupResolver(contractSchema()),
  })

  const handleSubmitContract = handleSubmit((data) => {
    setLoading(true)
    emailjs
      .send(serviceID, templateID, data as never, {
        publicKey,
      })
      .then(() => {
        setLoading(false)
        reset({
          name: '',
          mail: '',
          message: '',
          phone_number: ''
        })
        clearErrors()
        toast.success('Email has been sent.')
      })
      .catch(() => {
        setLoading(false)
        toast.error('Error. Try again later.')
      })
  })

  return {
    errors,
    loading,
    register,
    onSubmitContract: handleSubmitContract,
  }
}

export default useContact
