import React from 'react'

import HomePage from '../components/Home/HomePage'

import { Outlet } from 'react-router-dom'

const ComingSoon = () => {
  return (
    <>
    <div className='hello'>
        <HomePage />
        <Outlet />
    </div>
    </>
  )
}

export default ComingSoon
