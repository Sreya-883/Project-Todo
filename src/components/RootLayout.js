import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navigationbar'
function RootLayout() {
  return (
    <div className='container  m-auto text-center mt-5 border border-shadow'>
      <Navigationbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout