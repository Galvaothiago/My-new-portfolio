import { CardCourse } from "../../components/cardCourse";
import { Sidebar } from "../../components/sidebar";
import { Container, Content } from "./style";

export function Courses() {
    return (
        <Container>
            <Sidebar />
            <Content>
                <CardCourse />
            </Content>
        </Container>
    )
}