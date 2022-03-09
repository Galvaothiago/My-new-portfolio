import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "./style";

export function Sidebar() {
    return (
        <Container>
            <Link to="/">
                < AiFillHome />
            </Link> 
        </Container>
    )
}