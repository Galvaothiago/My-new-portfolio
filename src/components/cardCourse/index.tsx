import { AdvanceButtonCard, BackButtonCard, Container, Content, ContentSection, OtherInfo, SchoolContent, SchoolProfile, Summary } from "./style";
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

export function CardCourse() {
    return (
        <Container>
            <BackButtonCard>
                <IoArrowBack />
            </BackButtonCard>
            <Content>
                <SchoolProfile>
                    <p>Html e CSS e Javascrit</p>
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGlNHf6y6vFIA/company-logo_200_200/0/1633120102056?e=2147483647&v=beta&t=abf68KB_q4B6AnqhpuUoVd14vlnhsmbgEgUizr6OHZs" alt="udemy logo" />
                        <span>Udemy</span>
                    </div>
                </SchoolProfile>
                <SchoolContent>
                    <Summary>
                        <span>Resumo:</span>
                        <p>is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book.</p>
                    </Summary>
                    <ContentSection>
                        <span>Conteudo:</span>
                        <ul>
                            <li>coisas que aprendi no curso</li>
                            <li>coisas que aprendi no curso</li>
                            <li>coisas que aprendi no curso</li>
                            <li>coisas que aprendi no curso</li>
                            <li>coisas que aprendi no curso</li>
                        </ul>
                    </ContentSection>
                    <OtherInfo>
                        <span>carga horária:</span>
                        <p>33h</p>
                    </OtherInfo>
                </SchoolContent>
            </Content>
            <AdvanceButtonCard>
                < IoArrowForward />
            </AdvanceButtonCard>
        </Container>
    )
}