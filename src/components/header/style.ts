import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;
    position: fixed;
    top: 0;
    z-index: 5;
`

export const LogoName = styled.div`
    width: 3rem;
    height: 3rem;

    text-align: center;
    line-height: 3rem;
    border-radius: 50%;
    background-color: #343a40;
    color: white;
    font-weight: 700;

    cursor: pointer;

    webkit-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
    box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);

`

export const Menu = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    div {
        max-width: 400px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`

export const Link = styled.a`
    width: auto;

    font-size: 1.1rem;
    transition: all .25s;

    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`