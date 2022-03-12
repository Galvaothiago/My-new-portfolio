import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { Container, Content } from "./global"
import { About } from "./pages/about"
import { Courses } from "./pages/courses"
import { Experience } from "./pages/experience"
import { Home } from "./pages/home"
import { Projects } from "./pages/projects"

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Routes>
          <Route path="/experience" element={< Experience/>} />
          <Route path="/courses" element={< Courses/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default App
