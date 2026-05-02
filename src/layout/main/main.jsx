import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/navbar.jsx'
import Sidenav from '../sidenav/sidebar.jsx'
import './main.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { LayoutContextProvider } from './layoutContext.jsx'

function Main() {

  const userId = window.localStorage.getItem("userId")
  const isLogIn = window.localStorage.getItem('isLogged')
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage se value nikaalo
    const isLogged = localStorage.getItem('isLogged');

    // agar false hai ya null hai to redirect karo
    if (isLogged === 'false' || !isLogged) {
      navigate('/explore'); // redirect
    }
  }, [navigate]);

  return (
    <LayoutContextProvider>
      <div className='layout-container'>
        <Navbar />
        <div className='layout-wrapper' >
          <Sidenav />
          <div className='main-container'>
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutContextProvider>
  )
}

export default Main