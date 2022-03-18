import { createContext, ReactNode, useState } from "react";

interface ModalProps {
    showModal: boolean,
    closeModal: () => void,
    openModal: () => void,
}

interface ChildrenProps {
    children: ReactNode
}
export const ModalContext = createContext({} as ModalProps)


export function ModalProvide({ children }: ChildrenProps) {
    const [ showModal, setShowModal ] = useState<boolean>(false)

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <ModalContext.Provider
            value={{
                showModal,
                closeModal,
                openModal
            }}
        >
            { children }
        </ModalContext.Provider>
    )
}