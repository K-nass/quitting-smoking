import React, { useEffect, useState } from 'react'
import CigaretteForm from '../CigaretteForm/CigaretteForm'
import style from './Home.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
  const [loginToken, setLoginToken] = useState(null);
  const [quote, setQuote] = useState(true);
  const [fadeOut, setFadeOut] = useState(false)






  useEffect(() => {
    setTimeout(() => {
      setLoginToken(localStorage.getItem('loginToken'))
      setQuote(false)
    }, 2000)
    setTimeout(() => { setFadeOut(true) }, 1000)
  }, [])






  return (
    <>
      {quote ? <blockquote className=
        {`w-50 mt-5 p-5 m-auto  text-success fw-bold ${style.quoteAnimation} ${fadeOut ? style.fadeOut : ''}`}>
        <p className='text-center display-6 fw-medium text-capitalize'>Every small you take brings you closer to freedom</p>
      </blockquote> : null}
      {loginToken ? <CigaretteForm /> : null}
    </>
  )
}
