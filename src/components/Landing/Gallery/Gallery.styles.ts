import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
display: flex;
flex-direction: column;
gap:54px;
h1{
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 32px;
   line-height: 39px; 
   color: ${theme.colors.gray};
   opacity:0.75;
   text-align: center;
}
.images{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:24px;
}
 @media (max-width: ${theme.breakpoints.lg}) {
   gap:30px;
    .images{
    justify-content: center;
   }
   h1{
    font-size: 20px;
    line-height: 24px;
   }
 }

`