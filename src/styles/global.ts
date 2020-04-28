import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyles = createGlobalStyle`
 p {
  font-size: ${rem(20)};
  font-weight: normal;
 }
`;


export default GlobalStyles;