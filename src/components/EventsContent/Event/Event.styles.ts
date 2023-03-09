import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const EventStyles = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
align-items: center;
padding: 48px 8px;
border-bottom: 0.3px solid ${theme.colors.lightGray};
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
}

a{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    border: 1.5px solid ${theme.colors.blue};
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    padding: 12px 24px;
    color: ${theme.colors.blue};
    &:hover{
        opacity:0.75;
    }
}
@media (max-width: ${theme.breakpoints.lg}) {
    padding: 28px 8px;
    p{
        width: 50%;
    }
    p, a{
        font-size: 14px;
        line-height: 17px;
    }
}
`