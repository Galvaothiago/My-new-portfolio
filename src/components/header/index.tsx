import { Container, Link, LogoName, Menu } from "./style";

export function Header() {
    return (
        <Container>
            <LogoName>TG</LogoName>
            <Menu>
                <div>
                    <Link>sobre</Link>
                    <Link>projetos</Link>
                    <Link>cursos</Link>
                    <Link>experiência</Link>
                </div>
            </Menu>
        </Container>
    )
}