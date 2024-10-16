import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { loginContext } from '../LoginContext/LoginContext'



export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState(null)
  const { loginToke, setLoginToken } = useContext(loginContext)
  let navigate = useNavigate()




  let validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is not valid').required('Email is required.'),
    password: Yup.string().min(5, 'Password must be at least 5 characters long.').max(7, 'Password must be no more than 7 characters long.').required('Password is required.'),
  })
  async function handleRegister(values) {
    setIsLoading(true)
    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then((res) => {
        setIsLoading(false)
        if (res.data.message === 'success') {
          setLoginToken(localStorage.setItem('loginToken', res.data.token))
          navigate('/')
          setIsLoading(true)
        }
      })
      .catch((res) => {
        setIsLoading(false)
        setApiError(res.response.data.message)
      })
  }

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleRegister
  })


  return (
    <form onSubmit={formik.handleSubmit} className='text-start w-50 m-auto mt-5'>
      <label className='text-start mt-2 mb-2 text-muted' htmlFor="email">
        {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : 'Email*'}
      </label>

      <input className='form-control'
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label className='text-start mt-2 mb-2 text-muted' htmlFor="password">
        {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : 'Password*'}
      </label>

      <input className='form-control'
        type="password"
        name='password'
        id='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <div className='mt-2 mb-2'>
        {apiError ? <span className='text-danger'>{apiError}!</span> : null}
      </div>

      <div className="d-flex align-items-center">
        {isLoading ? <button className='btn btn-info mt-3 text-white fw-bold'><i className="fa-solid fa-spinner"></i></button> : <button type='submit' className='btn btn-info mt-3 me-3 text-white fw-bold'>Login</button>}
      </div>
    </form>

  )
}
