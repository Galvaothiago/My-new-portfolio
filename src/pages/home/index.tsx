import { ProfilePhoto } from "../../components/profile";
import { Container, Content, GeometricShape } from "./style";

export function Home() {
    const title = "Olá, me chamo Thiago Galvão"
    const preview = "Desenvolvedor web front-end e back-end, apaixonado por tecnologia " + 
    "e por solucionar problemas."

    return (
        <Container>
            <GeometricShape>
                <ProfilePhoto />
            </GeometricShape>
            <Content>
                <div>
                    <h3>{ title }</h3>
                    <p>{ preview }</p>
                    <div>
                        <button>Baixar CV</button>
                    </div>
                </div>
            </Content>
        </Container>
    )
}