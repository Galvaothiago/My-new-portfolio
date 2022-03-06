import { Header } from "./components/header"
import { Container, Content } from "./global"
import { Home } from "./pages/home"

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Home />
      </Content>
    </Container>
  )
}

export default App
