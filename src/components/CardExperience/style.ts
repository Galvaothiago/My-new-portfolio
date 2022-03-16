import styled from "styled-components";

export const Container = styled.div`
    max-width: 50rem;
    width: 100%;
    height: auto;

    -webkit-box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
    -moz-box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
    box-shadow: 3px 0px 9px -3px rgba(0,0,0,0.37);
`

export const Main = styled.div`
    width: 100%;
    height: 12rem;

    padding: 1rem;
    display: flex;
    position: relative;

    svg {
        position: absolute;
        bottom: 2rem;
        right: 2rem;

        font-size: 2rem;
        color: #c71f37;

        cursor: pointer;

        &:active {
            transform: scale(1.04)
        }
    }

    img { 
        width: 10rem;
        height: 100%;
        border-radius: 35px;
        filter: brightness(.5);

        transition: all .2s ease-in-out;

        &:hover {
            filter: brightness(1);
        }
    }

    div {
        width: 100%;
        height: 100%;

        padding: 0 2rem;

        p {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        
    }

`

export const MoreInfo = styled.div`
    width: 100%;
    /* min-height: 3rem; */
    height: auto;
    padding: 2rem;

  
`