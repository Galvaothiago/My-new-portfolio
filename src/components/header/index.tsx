import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, LogoName, Menu } from "./style";

export function Header() {
    const links = ['sobre', 'projetos', 'cursos', 'experiências']
    const linksPath = ['/about', '/projects', '/couses', '/experience']

    const [ linkSelected, setLinkSelected ] = useState<String>('')

    const handleChangeLinkStyle = (option: string) => {
        setLinkSelected(option)
    }

    return (
        <Container>
            <Link onClick={() => setLinkSelected('')} to="/">
                <LogoName>
                    TG
                </LogoName>
            </Link>    
            <Menu>
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
        </Container>
    )
}