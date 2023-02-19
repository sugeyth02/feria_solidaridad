import React, { ReactElement } from 'react'
import NavBar from '../NavBar/NavBar'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout