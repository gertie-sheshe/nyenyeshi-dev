import { createGlobalStyle } from "styled-components";
import theme from "@blog/theme/theme";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: ${theme.font.primary};
  font-size: 1rem;
  background-color: ${theme.colors.background.main};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

a {
  color: inherit
}

 * {
    box-sizing: border-box;
}
`;
