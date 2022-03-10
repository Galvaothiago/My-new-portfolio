import styled from 'styled-components'
import { appearEffect } from '../../global'

export const Container = styled.div`
    max-width: 60rem;
    width: 100%;
    height: 30rem;
    /* padding: 2rem; */
    background-color: white;

    position: relative;
`

export const BackButtonCard = styled.div`
    max-width: 90px;
    width: 100%;
    height: 100px;
    display: grid;
    place-items: center;
    background-color:  #c71f37;

    border-radius: 0 100px 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    transition: all .4s;

    svg {
        color: white;
        font-size: 2rem;
    }

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
        -moz-box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
        box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
    }
`

export const AdvanceButtonCard = styled.div`
    max-width: 90px;
    width: 100%;
    height: 100px;
    display: grid;
    place-items: center;
    background-color:  #c71f37;

    border-radius: 0 0 0 100px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: all .4s;

    svg {
        color: white;
        font-size: 2rem;
    }

    &:hover {
        transform: scale(1.04);
        -webkit-box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
        -moz-box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
        box-shadow: -1px 3px 9px -2px rgba(0,0,0,0.37);
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    animation: ${appearEffect} 2s ease-in-out;
`

export const SchoolProfile = styled.section`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: 1rem;

    p {
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
        img {
            width: 80px;
            border-radius: 50%;

            -webkit-box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
            -moz-box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
            box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
        }

        span {

        }
    }
`

export const SchoolContent = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: 2rem;
    background-color: #F8F9FA;
`

export const Summary = styled.div`
    width: 100%;
    height: auto;

    span {
        font-size: .9rem;
    }

    p {
        padding: 1rem 2rem;
        font-size: .9rem;
    }
`

export const ContentSection = styled.div`
    width: 100%;
    max-height: 250px;
    height: 100%;

    margin-top: .5rem;
    span {
        font-size: .9rem;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;

        padding: 1rem 2rem;

        li {
            font-size: .9rem;
            list-style-type: none;
        }
    }

`

export const OtherInfo = styled.div`
    width: 100%;
    height: auto;

    span {
        font-size: .9rem;
    }

    p {
        padding: 1rem 2rem;
        font-size: .9rem;
        font-weight: bold;
    }
`