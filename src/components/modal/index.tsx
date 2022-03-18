import { CloseButton, Container, ModalContent } from "./style";
import { VscClose } from 'react-icons/vsc'
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export function Modal() {
    const { closeModal } = useContext(ModalContext)

    return (
        <Container>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <VscClose />
                </CloseButton>
            </ModalContent>
        </Container>
    )
}