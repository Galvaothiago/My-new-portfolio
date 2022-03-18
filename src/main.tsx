import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './global'
import { BrowserRouter } from "react-router-dom";
import { HandleHoverProvide } from './context/HandleHoverContext';
import { ModalProvide } from './context/ModalContext';

ReactDOM.render(
  <>
    <BrowserRouter>
      <HandleHoverProvide>
        <ModalProvide>
          <App />
          <GlobalStyle />
        </ModalProvide>
      </HandleHoverProvide>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
