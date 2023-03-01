import Link from 'next/link'
import React from 'react'
import { EventStyles } from './Event.styles'

interface EventProp {
    title: string,
    href: string
}

const Event = ({ title, href }: EventProp) => {
    return (
        <EventStyles>
            <p>{title}</p>
            <Link href={href} target="_blank">Ver evento</Link>
        </EventStyles>
    )
}

export default Event