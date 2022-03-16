import { useContext, useRef } from "react";
import { CardExperience } from "../../components/CardExperience";
import { Sidebar } from "../../components/sidebar";
import { HoverContext } from "../../context/HandleHoverContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Container, Content } from "./style";

export function Experience() {
    const container = useRef<HTMLDivElement>(null)
    const { handleBackground } = useContext(HoverContext)
  
    const SCROLL_LIMIT = 15
    let valueScroll = useScrollPosition(container)
    
  
    if(valueScroll > SCROLL_LIMIT) {
      handleBackground(true)
    } else {
      handleBackground(false)
    }

    return (
        <Container >
            <Sidebar />
            <Content ref={container}>
                <CardExperience />
                <CardExperience />
                <CardExperience />
                <CardExperience />
                <CardExperience />
            </Content>
        </Container>
    )
}