import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    padding: 5rem 0;
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    inset: 0;
`

export const ModalContent = styled.div`
    max-width: 50rem;
    width: 100%;
    max-height: 35rem;
    height: 100%;
    display: flex;
    
    background-color: rgba(255, 255, 255, 0.4);

    backdrop-filter: blur(20px);
    position: relative;

    @media(max-height: 768px) {
        transform: translateY(50px);
    }
`

export const CloseButton = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;

    position: relative;
    cursor: pointer;

    svg {
        border-radius: 50%;
        font-size: 1.75rem;
        position: absolute;
        top: -3rem;
        background: white;

        transition: all .2s;

        &:hover {
            transform: scale(1.1);
        }
    }
`

