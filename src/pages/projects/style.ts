import styled from 'styled-components'
import { appearEffect } from '../../global'

interface EventProps { 
    allowEvent: boolean
}

export const Container = styled.main<EventProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    /* pointer-events: ${({ allowEvent }) => allowEvent ? '' : 'none'}; */
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    padding: 8rem 8rem;
    animation: ${appearEffect} 2s ease-in-out;
    overflow-y: auto
`
