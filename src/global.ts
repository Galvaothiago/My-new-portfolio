import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', 'Ubuntu', sans-serif;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    } 
    
    body {
        width: 100vw;
        height: 100vh;

        background-color: #ffff;
        overflow: hidden;
    }
`

export const Container = styled.div`
    max-width: 1366px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    margin: 0 auto;

    background-color: #f2f2f2;

`

export const Content = styled.div`
    width: 100%;
    height: 100%;
`

export const appearEffect = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`