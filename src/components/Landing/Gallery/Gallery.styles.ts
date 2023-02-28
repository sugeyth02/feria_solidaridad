import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const GalleryContainer = styled.div`
display: flex;
flex-direction: column;
gap:54px;
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
 }

`