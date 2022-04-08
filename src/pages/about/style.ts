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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: #ffff;
    padding: 4rem 4rem 2rem 4rem;
    border-radius: 5px;
    text-align: justify;
    overflow-y: auto;

    
    > div {
        position: relative;
        
        p {
            animation: ${appearEffect} 2s ease-in-out;
            margin-bottom: 1rem;
        }
    
        > span {
            position: absolute;
            right: 0;
            color: #c71f37;
            font-size: .8rem;
            animation: ${appearEffect} 2s ease-in-out;
            cursor: pointer;
        }
    }

`

export const SocialMedia = styled.div`
    max-width: 17rem;
    width: 100%;
    height: 3.2rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: #f2f2f2;
    border-radius: 50px;

     a {
        display: flex;
        text-decoration: none;
        cursor: pointer;

        svg {
            color: #c71f37;
            font-size: 1.4rem;
        }

    }

    > svg {
            color: #c71f37;
            font-size: 1.4rem;
            cursor: pointer;
        }
`