import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
`

export const Content = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 10rem;
    padding-bottom: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;

    overflow-y: auto;
`