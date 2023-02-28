import styled from 'styled-components';
import { theme } from './theme';

export const Title = styled.h1`
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 36px;
   line-height: 44px;
   color: ${theme.colors.gray};
   opacity:0.75;
   text-align: center;

   @media (max-width: ${theme.breakpoints.lg}) {
     font-size: 24px;
     line-height: 29px;
   }
`