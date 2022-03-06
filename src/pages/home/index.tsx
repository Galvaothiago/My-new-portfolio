import { ProfilePhoto } from "../../components/profile";
import { Container, Content, GeometricShape } from "./style";

export function Home() {
    return (
        <Container>
            <GeometricShape>
                <ProfilePhoto />
            </GeometricShape>
            <Content>
                <div>
                    <h3>Olá, me chamo Thiago Galvão</h3>
                    <p>Desenvolvedor web front-end e back-end, apaixonado por tecnologia e por solucionar problemas.</p>
                    <div>
                        <button>Baixar CV</button>
                    </div>
                </div>
            </Content>
        </Container>
    )
}