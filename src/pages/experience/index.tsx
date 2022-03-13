import { CardExperience } from "../../components/CardExperience";
import { Sidebar } from "../../components/sidebar";
import { Container, Content } from "./style";

export function Experience() {
    return (
        <Container>
            <Sidebar />
            <Content>
                <CardExperience />
                <CardExperience />
                <CardExperience />
            </Content>
        </Container>
    )
}