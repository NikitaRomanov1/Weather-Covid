import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Global = createGlobalStyle`
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
`;
