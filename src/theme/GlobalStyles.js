import { createGlobalStyle } from 'styled-components';
import bgDark from '../assets/images/bg-desktop-dark.jpg';

export const GlobalStyles = createGlobalStyle`

html{
    font-size: 100%;
    box-sizing: border-box;
}

*,*::before,*::after{
    box-sizing:inherit;
}

  body {
    padding:0;
    margin:0;
    background-color: ${({ theme }) => theme.colors.body};
    background-image: url(${bgDark});
    background-repeat: no-repeat;
    background-size: contain;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  button {
  
  }

  button.btn {
    
  }

`;
