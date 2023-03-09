import Image from 'next/image';
import React from 'react'
import { ImageContainer } from './Item.styles';
interface ItemProps{
    src: string;
    setToogler: React.Dispatch<React.SetStateAction<{
        toggler: boolean;
        sourceIndex: number;
    }>>
    index: number;
    toogler: boolean;
}

const Item = ({src, setToogler, index, toogler}: ItemProps) => {
    return (
        <ImageContainer>
            <div className='wrapper' onClick={() => setToogler({ toggler: !toogler, sourceIndex: index })}>
                <Image src="/images/zoom.png" alt='icon' width={18} height={18} />
            </div>
            <Image className="image-item" src={src} width={235} height={254}  alt="feria solidaridad gallery" />
        </ImageContainer>
  
  )
}

export default Item