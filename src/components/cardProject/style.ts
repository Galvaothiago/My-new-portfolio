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
        flex: .4;
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
            margin-top: .5rem;

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

    > div {
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        height: 100%;
        flex: .6;
        padding: 0 1rem;

        p {
            padding-top: 2rem;
            font-size: .8rem;
        }

        footer {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: flex-end;

            a {
                width: 2rem;
                height: 2rem;
                display: grid;
                place-items: center;
            
                
                border-radius: 50%;
                background-color: #f8f9fa;

                -webkit-box-shadow: -2px 4px 9px -1px rgba(0,0,0,0.1);
                -moz-box-shadow: -2px 4px 9px -1px rgba(0,0,0,0.1);
                box-shadow: -2px 4px 9px -1px rgba(0,0,0,0.1);
            }
        }
    }
`