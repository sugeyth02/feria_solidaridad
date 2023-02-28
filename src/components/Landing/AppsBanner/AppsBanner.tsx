import { Title } from '@/styles/Typography'
import React from 'react'
import { AppsBannerContainer } from './AppsBanner.styles'
import phone from '../../../../public/images/phone.png'
import appStore from '../../../../public/images/app-store.png'
import huawei from '../../../../public/images/huawei.png'
import playstore from '../../../../public/images/playstore.png'
import Image from 'next/image'

const AppsBanner = () => {
    return (
        <AppsBannerContainer>
            <Title>DESCARGA NUESTRAS APLICACIONES MOVILES</Title>
            <div className='app'>
                <div className='app-name'>
                    <Image src={phone} alt="phone icon" width={65} height={70} />
                    <h2>FeriaSolidaridadUCA</h2>
                </div>
                <div className='platforms'>
                    <Image src={huawei} alt="huawei icon" width={45} height={45} />
                    <Image src={playstore} alt="playstore icon" width={45} height={45} />
                    <Image src={appStore} alt="appstore icon" width={45} height={45} />
                </div>
            </div>
            <div className='app'>
                <div className='app-name'>
                    <Image src={phone} alt="phone icon" width={65} height={70} />
                    <h2>CSS UCA</h2></div>
                <div className='platforms'>

                    <Image src={playstore} alt="playstore icon" width={45} height={45} />

                </div>
            </div>
        </AppsBannerContainer>
    )
}

export default AppsBanner