import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './global'
import { BrowserRouter } from "react-router-dom";
import { HandleHoverProvide } from './context/HandleHoverContext';

ReactDOM.render(
  <>
      <HandleHoverProvide>
    <BrowserRouter>
        <App />
        <GlobalStyle />
    </BrowserRouter>
      </HandleHoverProvide>
  </>,
  document.getElementById('root')
)
