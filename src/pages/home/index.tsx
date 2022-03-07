import { ProfilePhoto } from "../../components/profile";
import { Container, Content, GeometricShape } from "./style";

export function Home() {
    const title = "Olá, me chamo Thiago Galvão"
    const preview = "Desenvolvedor web front-end e back-end, apaixonado por tecnologia " + 
    "e por solucionar problemas."

    const link_cv = String(import.meta.env.VITE_LINK_CV)

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
                        <a  
                        href={link_cv}
                        >Baixar CV</a>
                    </div>
                </div>
            </Content>
        </Container>
    )
}