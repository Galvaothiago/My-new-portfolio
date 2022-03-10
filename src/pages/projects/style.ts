import styled from 'styled-components'
import { appearEffect } from '../../global'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    /* justify-content: center; */

    /* overflow-y: auto; */
    /* padding: 6rem 8rem 2rem 8rem; */
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    /* background-color: red; */

    padding: 8rem 8rem;
    animation: ${appearEffect} 2s ease-in-out;
    overflow-y: auto
`
