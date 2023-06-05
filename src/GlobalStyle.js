import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Poppins', sans-serif;
  padding: 16px;
  background: ${({ theme }) => theme.color.whisper};
  color: ${({ theme }) => theme.color.black}
}
`;