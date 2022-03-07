import { useState } from "react";
import { ContainerAbout, Content, GeometricShape } from "./style";
import { Container } from "./style";
import { AiFillHome } from 'react-icons/ai'
import { Link } from "react-router-dom";

export function About() {
    const about_me = `Meu nome é Thiago Silva Galvão, atualmente moro em Vinhedo - SP. 
    Nascido e criado em uma pequena cidade no interior do estado do Espírito Santo, 
    me mudei para São Paulo com 18 anos, naquele momento fazia muito sentido essa mudança, 
    então decidi fazer.
    Sempre adorei desafios, durante todo processo, obtendo sucesso ou não, 
    o aprendizado é garantido. Poucos meses antes dessa mudança, eu tinha finalizado meu curso 
    técnico em Automação Industrial, que por sinal foi como a programação no geral me foi introduzida. 
    Busquei a princípio trabalho nessa área, e durante esse período surgiu a oportunidade de trabalhar 
    na Telefônica Vivo, atuando em um setor diferente do meu propósito, mas toda minha trajetória na 
    empresa foi de grande valor, entender mais sobre as regras de negócios e ver como uma empresa desse 
    porte atua. Em outubro de 2020, durante minhas férias, resolvi procurar alguns vídeos a respeito de 
    programação de arduino, para relembrar um pouco, como se passaram algum tempo desde meu último código 
    escrito para arduino, quando eu caí em um tutorial de JavaScript mostrando alguns loops e interações 
    por Arrays meus olhos brilharam, bom, posso dizer que fiquei completamente extasiado e triste ao mesmo tempo, 
    no exato momento eu tinha me dado conta do tempo que eu perdido.
    `

    const [ showAllText, setShowAllText] = useState<Boolean>(false)

    const trucate = (text: string, numbersCharacter: number = 800) => {
        if(showAllText) {
            return text
        }

        return text.substring(0, numbersCharacter - 1) + '...'
    }

    const handleShowAllText = () => {
        setShowAllText(oldState => !oldState)
    } 



    return (
        <Container>
            <GeometricShape>
                <Link to="/">
                    < AiFillHome />
                </Link>
            </GeometricShape>
            <Content>
                <ContainerAbout>
                    <p>{ trucate(about_me)}</p>
                    <a href="#" onClick={handleShowAllText}>{ showAllText ? 'reduzir' : 'Ler mais'}</a>
                </ContainerAbout>
            </Content>
        </Container>
    )
}