import styled, { keyframes } from 'styled-components'

const profileEffect = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`

export const Container = styled.div`
    width: 17rem;
    height: 17rem;

    border-radius: 50%;
    background-image: url('https://github.com/Galvaothiago.png');
    background-size: contain;

    animation: ${profileEffect} 1s ease-in-out;

    -webkit-box-shadow: 17px 11px 51px -13px rgba(0,0,0,0.75);
    -moz-box-shadow: 17px 11px 51px -13px rgba(0,0,0,0.75);
    box-shadow: 17px 11px 51px -13px rgba(0,0,0,0.75);
`

export const Border = styled.div`
    width: 18rem;
    height: 18rem;

    display: grid;
    place-items: center;

    position: absolute;
    right: -5.5rem;
    border-radius: 50%;
    border: 4px solid #ff758f;

    animation: ${profileEffect} 1s ease-in-out;


`