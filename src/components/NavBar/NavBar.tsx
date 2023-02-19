import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/logo-feria.png'

import { NavbarContainer } from './NavBar.styles'

const NavBar = () => {
  return (
    <NavbarContainer>
      <div className='logo'>
        <Image src={Logo} alt="logo" width={92} height={92} />
      </div>
    </NavbarContainer>
  )
}

export default NavBar