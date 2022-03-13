import { useContext, useEffect, useRef, useState } from "react";
import { Card } from "../../components/cardProject";
import { Sidebar } from "../../components/sidebar";
import { HoverContext } from "../../context/HandleHoverContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Container, Content } from "./style";

export function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const { handleBackground } = useContext(HoverContext)
  const valueScroll = useScrollPosition(container)
  
  const SCROLL_LIMIT = 6

  if(valueScroll > SCROLL_LIMIT) {
    handleBackground(true)
  } else {
    handleBackground(false)
  }

    return (
        <Container>
            <Sidebar />
            <Content ref={container} >
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