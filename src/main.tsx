import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './global'
import { BrowserRouter } from "react-router-dom";
import { HandleHoverProvide } from './context/HandleHoverContext';

ReactDOM.render(
  <>
    <BrowserRouter>
      <HandleHoverProvide>
        <App />
        <GlobalStyle />
      </HandleHoverProvide>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
