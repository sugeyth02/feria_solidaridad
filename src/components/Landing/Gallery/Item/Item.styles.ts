import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ImageContainer = styled.div`
position: relative;
display: flex;
.wrapper{
    border-radius: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.25);
    img{
       margin-right: 10px;
       margin-top: 10px;
    }
    &:hover{
    opacity: 0.5;
    cursor: pointer;
   };
}
.image-item{
   border-radius: 10px;
   object-fit: cover;
}
@media (max-width: ${theme.breakpoints.lg}) {
   .image-item{
    width: 149px;
    height: 157px;
   }
 }
`