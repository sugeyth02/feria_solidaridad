import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const DropdownMenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 150px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
  z-index: 1;
  min-height: calc(100vh - 151px);
  height: 100%;
  width: 100vw;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction:column;
  gap:60px;
  align-items: center;
  justify-content: center;
  a{
        text-align: center;
        text-decoration: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color:${theme.colors.black};
        &:hover{
             color:${theme.colors.blue};
            
        }
        &:nth-child(1){
            margin-top: 30px;
        }
    }
    @media (max-width: ${theme.breakpoints.sm}) {
          top: 88px;
          min-height: calc(100vh - 89px);
      }
  `