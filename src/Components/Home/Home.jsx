import React, { useState } from 'react'

export default function Home() {
  const [loginToken, setLoginToken] = useState(localStorage.getItem('loginToken'))


  return (
    <>
      {loginToken ? <form className='text-start w-50 m-auto mt-5'>
        <label className='text-start mt-2 mb-2 text-muted' htmlFor="">Number of cigarettes smoked per day?</label>
        <input className='form-control' type="text" />

        <label className='text-start mt-2 mb-2 text-muted' htmlFor="">How long you have been smoking?</label>
        <input className='form-control' type="text" />

        <label className='text-start mt-2 mb-2 text-muted' htmlFor="">How much does a pack of cigarettes cost?</label>
        <input className='form-control' type="text" />

        <label className='text-start mt-2 mb-2 text-muted' htmlFor="">Select your motivation level.</label>
        <select className='form-select' name="" id="">
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
        </select>
      </form> : null}





    </>
  )
}
