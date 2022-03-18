import { Container } from "./style";
import { HiCode } from 'react-icons/hi'
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

export function Card() {
    const { openModal } = useContext(ModalContext)
    return (
        <Container onClick={() => openModal()} >
            <header>
                <h4>API Gas Station</h4>
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
                </div>
                <span>BACKEND</span>
            </header>
            <div>
                <p>API Rest desenvolvida utilizando Java e diversas outras tecnologias do universo Spring  ...</p>
                <footer>
                    <a href="">
                        <HiCode />
                    </a>
                </footer>
            </div>
        </Container>
    )
}