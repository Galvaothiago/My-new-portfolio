import { useRef } from "react";
import { CardExperience } from "../../components/CardExperience";
import { Sidebar } from "../../components/sidebar";
import { HoverContext } from "../../context/HandleHoverContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Container, Content } from "./style";

export function Experience() {
    const container = useRef<HTMLDivElement>(null)
    const SCROLL_LIMIT = 50

    useScrollPosition(container, SCROLL_LIMIT)

    return (
        <Container >
            <Sidebar />
            <Content ref={container}>
                <CardExperience />
                <CardExperience />
                <CardExperience />
            </Content>
        </Container>
    )
}