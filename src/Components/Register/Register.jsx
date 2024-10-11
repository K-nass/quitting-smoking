import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';





export default function Register() {
  const [isLoading, setIsLoading] = useState(false)


  let validationSchema = Yup.object().shape({
    name: Yup.string().required('User Name is required.'),
    email: Yup.string().email('Email is not valid').required('Email is required.'),
    password: Yup.string().min(5, 'Password must be at least 5 characters long.').max(7, 'Password must be no more than 7 characters long.').required('Password is required.'),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Please make sure both passwords are the same.').required('Re Password is required'),
    phone: Yup.string().required('Phone is required')
  })

  async function handleRegister(values) {
    setIsLoading(true)

    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .then((res) => {
        setIsLoading(false)
        console.log(res.data.message);
      })
      .catch((res) => {
        setIsLoading(false)
        console.log(res)
      })
  }


  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    validationSchema,
    onSubmit: handleRegister
  }
  )


  return (

    <form onSubmit={formik.handleSubmit} className='text-start w-50 m-auto mt-5'>

      <label className='text-start text-start mt-2 mb-2 text-muted'
        htmlFor="name">
        {formik.errors.name && formik.touched.name ? <span className='text-danger'>{formik.errors.name}</span> : 'User Name*'}
      </label>

      <input className='form-control p-2'
        type="text"
        name='name'
        id='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

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

      <label className='text-start mt-2 mb-2 text-muted' htmlFor="rePassword">
        {formik.errors.rePassword && formik.touched.rePassword ? <span className='text-danger'>{formik.errors.rePassword}</span> : 'Confirm Password*'}
      </label>

      <input className='form-control'
        type="password"
        name='rePassword'
        id='rePassword'
        value={formik.values.rePassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label className='text-start mt-2 mb-2 text-muted' htmlFor="phone">
        {formik.errors.phone && formik.touched.phone ? <span className='text-danger'>{formik.errors.phone}</span> : 'Phone*'}
      </label>

      <input className='form-control'
        type="string"
        name='phone'
        id='phone'
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {isLoading ? <button className='btn btn-info mt-3 text-white fw-bold'><i className="fa-solid fa-spinner"></i></button> : <button type='submit' className='btn btn-info mt-3 text-white fw-bold'>Register</button>}

    </form>
  )
}
