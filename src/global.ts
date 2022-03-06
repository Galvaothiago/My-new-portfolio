import styled, { createGlobalStyle } from 'styled-components'

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

        margin: 0 auto;

        background-color: #f8f9fa;
    }
`

export const Container = styled.div`
    max-width: 1448px
    width: 100%;

    height: 100%;
`