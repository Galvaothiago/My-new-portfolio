import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { Container, Content } from "./global"
import { About } from "./pages/about"
import { Home } from "./pages/home"

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Home />
      </Content>
    </Container>
  )
}

export default App
