import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    /* background-color: red; */

    overflow-y: auto;
    padding: 6rem 8rem 2rem 8rem;
`

export const Content = styled.div`
    width: auto;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    padding: 2rem;
`
