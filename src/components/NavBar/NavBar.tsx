import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/images/logo-feria.png'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import Hamburguer from './HamburgerMenu/Hamburguer'

import { NavbarContainer } from './NavBar.styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NavbarContainer>
      <Link className='logo' href='/'>
        <Image src={Logo} alt="logo" width={82} height={82} />
        <h1>Feria de la solidaridad</h1>
      </Link>
      <div className='links'>
        <Link href='/instituciones'>Instituciones</Link>
        <Link href='/proyectos'>Proyectos</Link>
        <Link href='/eventos'>Eventos</Link>
      </div>
      <Hamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
      <DropdownMenu isOpen={isOpen} />
    </NavbarContainer>
  )
}

export default NavBar