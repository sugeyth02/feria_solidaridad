import { message } from '@/src/lang/landing.lang'
import React from 'react'
import { IframeStyled, MessageContainer } from './Message.styles'

const Message = () => {
    const { title, author, paragraph, video } = message
    return (
        <MessageContainer>
            <h1>{title}</h1>
            <div className='video'>
                <IframeStyled>
                    <iframe
                        src={video}
                        title="Feria de la solidaridad| Mensaje del rector"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </IframeStyled>
                <div className='message'>
                    <p>{paragraph}</p>
                    <h2>{author}</h2>

                </div>

            </div>
        </MessageContainer>
    )
}

export default Message