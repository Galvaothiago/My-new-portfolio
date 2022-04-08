import { useState } from "react";
import { ContainerAbout, Content, SocialMedia } from "./style";
import { Container } from "./style";
import { Sidebar } from "../../components/sidebar";

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

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

    const EMAIL = 'thiagogalvaodev@outlook.com'
    const GITHUB = 'https://github.com/Galvaothiago'
    const LINKEDIN = 'https://www.linkedin.com/in/thiago-galvao-155062208/'

    const trucate = (text: string, numbersCharacter: number = 800) => {
        if(showAllText) {
            return text
        }

        return text.substring(0, numbersCharacter - 1) + '...'
    }

    const handleShowAllText = () => {
        setShowAllText(oldState => !oldState)
    }

    const copyCodeToClipboard = () => {
        if(!navigator.clipboard) {
            alert("navegador não suporta a função de copiar texto para o 'clipboard'")
            return
        }

        navigator.clipboard.writeText(EMAIL)
        alert("email copiado para área de transferência")
    }



    return (
        <Container>
            <Sidebar />
            <Content>
                <ContainerAbout>
                    <div>
                        <p>{ trucate(about_me)}</p>
                        <span onClick={handleShowAllText}>{ showAllText ? 'reduzir' : 'Ler mais'}</span>
                    </div>
                    <SocialMedia>
                        <a href={GITHUB} target="_blank">
                            <AiFillGithub />
                        </a>
                        <a href={LINKEDIN} target="_blank">
                            <AiFillLinkedin />
                        </a>
                        <MdEmail  onClick={copyCodeToClipboard}/>
                    </SocialMedia>
                </ContainerAbout>
            </Content>
        </Container>
    )
}