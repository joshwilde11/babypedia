import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <h1>BABYPEDIA</h1>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout