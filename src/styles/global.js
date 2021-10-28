import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { css } from "styled-components";
export const Global = createGlobalStyle`
    @font-face { 
         font-family: 'OpenSans';  
         src:url('../assets/fonts/OpenSans/OpenSans-Medium.ttf'),        
        }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    h1 {
        color: ${theme.colors.darkBlue}
    }
    h2 {
        color: ${theme.colors.darkBlue}
    }
   body {
       font-family: "OpenSans", sans-serif;
   }
    `;
