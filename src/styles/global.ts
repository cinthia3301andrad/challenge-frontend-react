import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`

:root{
    --background: #E5E5E5;
    --background-header: #202020;
    
    
    --blue: #5429CC;
    --green: #33CC95;
    --red: #F43735;
    --blue-light: #6933FF;

    --text-title: #212121;
    --text-body: #969cb3;

    --shape: #FFFFFF
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
/*   1 REM é o tamanho da font-size da pagina */
    html {
      @media(max-width: 1080px) {
        font-size: 93.75%; /* 15px */
      }  
      @media(max-width: 720px) {
        font-size: 87.5%; /* 14px */
      }  
    }
    a { 
      text-decoration: none;
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
    button {
      cursor: pointer;
      transition: filter 0.3s;
        &:hover {
            filter: brightness(0.91);
        }
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
 
    .ant-popover-inner-content {
    
      p {
        margin: 0;
      }
    }
 

`
export default GlobalStyle
