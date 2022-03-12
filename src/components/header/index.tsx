import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HoverContext } from "../../context/HandleHoverContext";
import { Container, LogoName, Menu } from "./style";

export function Header() {
    const [ linkSelected, setLinkSelected ] = useState<String>('')
    const { showBackground } = useContext(HoverContext)
    
    const links = ['sobre', 'projetos', 'cursos', 'experiências']
    const linksPath = ['/about', '/projects', '/courses', '/experience']

    const handleChangeLinkStyle = (option: string) => {
        setLinkSelected(option)
    }

    return (
        <Container bgLinear={showBackground}>
            <Menu bgLinear={showBackground}>
                <div>
                    { links.map((link, index) => (
                        <Link 
                            style={{ backgroundColor: `${linkSelected === link ? '#c71f37' : ''}`,
                                color: `${linkSelected === link ? 'white' : ''}`
                            }} 
                            to={linksPath[index]} 
                            key={`${link}-${index}`}
                            onClick={() => handleChangeLinkStyle(link)}
                        >{ link }</Link>
                    )) }
                </div>
            </Menu>
            <Link onClick={() => setLinkSelected('')} to="/">
                <LogoName>
                    TG
                </LogoName>
            </Link>    
        </Container>
    )
}