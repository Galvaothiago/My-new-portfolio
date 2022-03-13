import { Container, Main, MoreInfo } from "./style";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io'
import { useState } from "react";

export function CardExperience() {
    const [ showInfo, setShowInfo ] = useState<boolean>(false)

    const showMoreInfo = () => {
        setShowInfo(oldState => !oldState)
    }
    return (
        <Container>
            <Main>
                <img src="https://www.minhaoperadora.com.br/wp-content/uploads/2021/04/novo-logotipo-telefonica.jpg" alt="Telefonica VIVO" />
                <div>
                    <h3>Telefonica VIVO</h3>
                    <p>Um breve resumo sobre o cargo</p>
                    <span>2021 - Atualmente</span>
                </div>
                { showInfo ? <IoMdArrowDropupCircle onClick={showMoreInfo} /> : < IoMdArrowDropdownCircle onClick={showMoreInfo}/> }
            </Main>
                { showInfo && <MoreInfo>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
        
                    </MoreInfo> }
        </Container>
    )
}