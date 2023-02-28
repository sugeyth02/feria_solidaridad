import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { LandingContainer } from './Landing.styles'
import UCA from '../../../public/images/uca-logo.png'
import Logo from '../../../public/images/logo-feria.png'
import Image from 'next/image'
import Footer from '../Footer/Footer'
import Message from './Message/Message'
import GalleryImages from './Gallery/Gallery'
import AppsBanner from './AppsBanner/AppsBanner'

const Landing = () => {
    const [visible, setVisible] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 100 ? setVisible(true) : setVisible(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <LandingContainer show={visible}>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='landing-image'>
                <div className='image' />
                <div className='landing-content'>
                    <Image src={UCA} alt="logo" width={153} height={220} className='logo-uca' />
                    <div className='header'>
                        <Image src={Logo} alt="logo" width={203} height={217} className='logo-feria' />
                        <h1>Feria de la solidaridad</h1>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Message /> 
                <GalleryImages />
                <AppsBanner/>
            </div>
            <Footer />

        </LandingContainer>
    )
}

export default Landing