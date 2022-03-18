import { useContext, useEffect, useRef, useState } from "react";
import { Card } from "../../components/cardProject";
import { Modal } from "../../components/modal";
import { Sidebar } from "../../components/sidebar";
import { HoverContext } from "../../context/HandleHoverContext";
import { ModalContext } from "../../context/ModalContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Container, Content } from "./style";

export function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const { handleBackground } = useContext(HoverContext)
  const { showModal, openModal } = useContext(ModalContext)

  const SCROLL_LIMIT = 6
  let valueScroll = useScrollPosition(container)
  
  const cardFake = [0, 1, 2, 3, 4, 5, 6]

  if(valueScroll > SCROLL_LIMIT) {
    handleBackground(true)
  } else {
    handleBackground(false)
  }

    return (
        <Container allowEvent={showModal}>
            <Sidebar />
            <Content  ref={container} >
               { cardFake.map(() => <Card />) }
            </Content>
            { showModal && <Modal /> }
        </Container>
    )
}