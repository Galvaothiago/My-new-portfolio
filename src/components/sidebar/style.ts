import styled, { keyframes } from 'styled-components'

const shapeEffect = keyframes`
    from {
        max-width: 350px;
    } 
    to {
        max-width: 100px;
    }
`

export const Container = styled.aside`
    max-width: 100px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

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