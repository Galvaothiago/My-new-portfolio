import styled from 'styled-components'
import { appearEffect } from '../../global'



export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;

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