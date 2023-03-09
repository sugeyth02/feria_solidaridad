import React, { ReactElement } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { Container } from './Layout.styles'

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <NavBar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Layout