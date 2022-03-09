import styled, { keyframes } from 'styled-components'

const shapeEffect = keyframes`
    from {
        max-width: 350px;
    } 
    to {
        max-width: 100px;
    }
`

const appearEffect = keyframes`
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

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;

`

export const GeometricShape = styled.div`
    max-width: 100px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #c71f37;
    border-radius: 0 10rem 10rem 0;
    position: relative;

    animation: ${shapeEffect} 1s ease-in-out;

    a {
        display: grid;
        place-items: center;

        width: 2.5rem;
        height: 8rem;
        border-radius: 0 200px 200px 0;
        background-color: #343a40;

        position: absolute;
        left: 0;
        cursor: pointer;

        webkit-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
        box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);

        svg {
            color: white;
            font-size: 1rem;
        }
    }
`

export const Content = styled.section`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;
    padding: 5rem;
`

export const ContainerAbout = styled.div`
    width: 100%;
    max-height: 550px;
    height: 100%;

    background-color: #ffff;
    padding: 4rem;
    border-radius: 5px;
    text-align: justify;
    overflow-y: auto;

    position: relative;

    p {
        animation: ${appearEffect} 2s ease-in-out;
        margin-bottom: 1rem;
    }

    a {
        position: absolute;
        right: 4rem;
        color: #c71f37;
        font-size: .8rem;
        animation: ${appearEffect} 2s ease-in-out;
    }

`