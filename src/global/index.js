import {createGlobalStyle} from 'styled-components'
import wallpaper from '../assets/wallpaper.png'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100%;
    }

    body{
        background: url(${wallpaper});
        background-repeat: repeat;
        background-size: contain;
        color: #222222;
        font-family: "Merriweather Sans", sans-serif;
    }

    a{
        text-decoration: none;
        color: #222222;
    }
`
export default GlobalStyle

// como importar as fontes

// .unifrakturcook-bold {
//     font-family: "UnifrakturCook", cursive;
//     font-weight: 700;
//     font-style: normal;
//   }

  // <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 300 to 800

// .merriweather-sans-<uniquifier> {
//     font-family: "Merriweather Sans", sans-serif;
//     font-optical-sizing: auto;
//     font-weight: <weight>;
//     font-style: normal;
//   }

//   .creepster-regular {
//   font-family: "Creepster", system-ui;
//   font-weight: 400;
//   font-style: normal;
// }

// .nosifer-regular {
//   font-family: "Nosifer", sans-serif;
//   font-weight: 400;
//   font-style: normal;
// }
