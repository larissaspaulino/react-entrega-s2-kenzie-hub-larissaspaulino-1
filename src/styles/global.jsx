import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    :root {
      --primary: #FF577F;
      --primary-focus: #FF427F;
      --primary-negative: #59323F;
      --grey-4: #121214;
      --grey-3: #212529;
      --grey-2: #343B41;
      --grey-1: #868E96;
      --grey-0: #F8F9FA;
      --success: #3FE864;
      --negative: #E83F5B;
      

      --title-1: 18px;
      --title-2: 16px;
      --title-3: 14px;

      --border-radius: 4px;
      --border-input: 1.2182px solid var(--grey-2);;
      --border-white: 1.2182px solid #F8F9FA; 
      --border-red: 1.2182px solid #E83F5B;

        --height: 48px;
        --main-maxWidth: 780px;
    }

    body {
        background-color: var(--grey-4);
        color: var(--grey-0);
    }
    
    body, input {
        font-family: 'Inter', sans-serif; //monospace
        font-size: 12px;
        font-weight: 400;
    }

    h1, h2, h3 {
        /* font-family: 'Inter', sans-serif; */
        font-family: monospace;
        font-weight: bold;
    }

    button {
        font-family: 'Inter', sans-serif; //monospace
        cursor: pointer;
        font-weight: 500;
    }

    a {
        text-decoration: none;
    }
`


export const grey0 = "#F8F9FA"
export const grey1 = "#868E96"
export const grey2 = "#343B41"
export const grey3 = "#212529"
export const grey4 = "#121214"

export const primary = "#FF577F"
export const primaryFocus = "#F8F9FA"
export const primaryNegative = "#59323F"


