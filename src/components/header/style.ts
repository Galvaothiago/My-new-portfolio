import styled from 'styled-components'

interface bgLinearProps {
    bgLinear: boolean
}

export const Container = styled.div<bgLinearProps>`
    max-width: 1366px;
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;
    position: fixed;
    top: 0;
    z-index: 5;

    background: ${({ bgLinear }) => bgLinear ? 'linear-gradient(180deg, rgba(52,58,64,1) 0%, rgba(70,70,68,0) 100%)' : ''};
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

    border: 1px solid #ff758f;

    cursor: pointer;

    webkit-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);
    box-shadow: -5px 4px 24px -9px rgba(0,0,0,0.75);

    &:active {
        transform: scale(1.03);
    }

`

export const Menu = styled.nav<bgLinearProps>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    div {
        max-width: 450px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;


        a {
            text-decoration: none;
            color: #2b2b2b;
            color: ${({ bgLinear }) => bgLinear ? 'white' : ''};

            line-height: 1rem;
            padding:1rem;
            
            border-radius: 25px;
            transition: all .2s;

            &:hover {
                transform: scale(1.07);
            }
        }
    }
`
