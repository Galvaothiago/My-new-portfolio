import { Container } from "./style";
import { HiCode } from 'react-icons/hi'

export function Card() {
    return (
        <Container>
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