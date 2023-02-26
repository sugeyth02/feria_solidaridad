import React, { useState } from 'react'

import FsLightbox from "fslightbox-react";
import Item from './Item/Item';
import { GalleryContainer } from './Gallery.styles';
const images = [
    '/images/feria-de-solidaridad.jpg',
    '/images/feria-de-solidaridad.jpg',
    '/images/feria-de-solidaridad.jpg',
    '/images/feria-de-solidaridad.jpg',
    '/images/feria-de-solidaridad.jpg',
    '/images/feria-de-solidaridad.jpg',
]

const GalleryImages = () => {
    const [toggler, setToggler] = useState({
        toggler: false,
        sourceIndex: 0,
    });
    return (
        <GalleryContainer>
            <h1>GALERIA DE FOTOS</h1>
            <div className='images'>
                {images.map((item, index) => <Item src={item} index={index} setToogler={setToggler} key={index} toogler={toggler.toggler} />)}
            </div>
            <FsLightbox
                toggler={toggler.toggler}
                sourceIndex={toggler.sourceIndex}
                sources={images}
            />
        </GalleryContainer>
    )
}

export default GalleryImages