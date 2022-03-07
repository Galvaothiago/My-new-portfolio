import styled, { keyframes } from 'styled-components'

const shapeEffect = keyframes`
    from {
        max-width: 350px;
    } 
    to {
        max-width: 200px;
    }
`

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;

`

export const GeometricShape = styled.div`
    max-width: 200px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #c71f37;
    border-radius: 0 10rem 10rem 0;
    position: relative;

    animation: ${shapeEffect} 1s ease-in-out;
`

export const Content = styled.section`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

`

export const ContainerAbout = styled.div`
    max-width: 850px;
    width: 100%;
    height: 550px;

    background-color: white;
`