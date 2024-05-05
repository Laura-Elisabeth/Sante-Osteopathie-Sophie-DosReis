import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    * {

    }

    body {
        margin: 0;
    }

    header {
      
    }

    footer {
        margin-top: 1rem;
        position: absolute;
        width: 100%;

    }

`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle