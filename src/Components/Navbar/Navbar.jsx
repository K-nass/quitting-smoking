import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../../../public/logo.svg'



export default function Navbar() {
  return (
    <nav className='bg-info'>
      <div className='container-fluid p-3'>
        <ul className='navbar-nav d-flex flex-row'>
          <NavLink className={`nav-item fw-bold me-5 ${style.logo}`} to={''}>BreatheBetter
            <img src={logo} style={{ width: '20px' }} alt="logo" className={style.logoImg} />
          </NavLink>
          <NavLink className='nav-item nav-link text-white fw-bold me-5 text-nowrap disabled text-opacity-50'>Progress Tracker</NavLink>
          <NavLink className='nav-item nav-link text-white fw-bold me-5 text-nowrap disabled text-opacity-50'>Health Benefits Timeline</NavLink>
          <NavLink className='nav-item nav-link text-white fw-bold me-5 text-nowrap disabled text-opacity-50'>Cost Savings</NavLink>
          <NavLink className='nav-item nav-link text-white fw-bold me-5 text-nowrap m-auto' to={'register'}>Register</NavLink>
          <NavLink className='nav-item nav-link text-white fw-bold me-5 text-nowrap' to={'login'}>Login</NavLink>
        </ul>
      </div>
    </nav >
  )
}
