import styled from 'styled-components'

export const Container = styled.div`
    width: 15rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: white;
    padding: .5rem;
    transition: all .3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.01); 
        -webkit-box-shadow: -13px 10px 47px -21px rgba(0,0,0,0.75);
        -moz-box-shadow: -13px 10px 47px -21px rgba(0,0,0,0.75);
        box-shadow: -13px 10px 47px -21px rgba(0,0,0,0.75);
    }

    header { 
        flex: .5;
        text-align: center;
        text-transform: uppercase;

        padding: .5rem;
        background: #343a40;
        color: white;
        font-size: 1.1rem;

        position: relative;

        div {
            width: 100%;
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1rem;

            img {
                width: 60px;
            }
        }

        span {
            position: absolute;
            bottom: -1.1rem;
            padding: .5rem .8rem;
            border-radius: 15px;
            font-size: .9rem;
            background: #c71f37;

            transform: translateX(-50%);
        }
    }

    div {
        flex: .5;
    }
`