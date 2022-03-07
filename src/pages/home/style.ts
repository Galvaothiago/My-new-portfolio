import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: space-between;

`

export const GeometricShape = styled.div`
    max-width: 350px;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #c71f37;
    border-radius: 0 10rem 10rem 0;
    position: relative;

`

export const Content = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: start;


    padding-left: 10rem;
    padding-right: 2rem;

    > div {
        max-width: 500px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        gap: 1rem;


        h3 { 
            font-size: 2rem;
            text-align: right;
            color: #0c0c0c;
        }

        p {
            color: #34312d;
            font-size: 1rem;
            text-align: right;
        }

        div {
            text-align: right;
            button {
                width: 11rem;
                height: 2.5rem;
                background-color:  #343a40;
                color: white;

                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all .2s;

                &:hover {
                  color: #ff758f; 
                }

                &:active {
                    transform: scale(1.05);
                }
            }
        }
    }
`