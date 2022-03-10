import { Card } from "../../components/card";
import { Sidebar } from "../../components/sidebar";
import { Container, Content } from "./style";

export function Projects() {
    return (
        <Container>
            <Sidebar />
            <Content>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    )
}