import { rem } from "polished";
import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Circular Std";
    src: local("Circular Std"), url("./../fonts/Circular Std Medium.ttf") format('truetype');
  }

  :focus {
    box-shadow: none;
    outline: none;
  }

  .keyboard-focus :focus {
    box-shadow: 0 0 2px 1px #00cdcb;
  }

  * {
    font-family: "Circular Std", Arial, Helvetica, sans-serif;
  }

  html,
  body,
  #root,
  #root > div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    color: #171717;
    flex: 1;
    min-height: 100%;
  }

 p {
  font-size: ${rem(20)};
 }

 ul li {
   font-size: ${rem(18)};
 }
 
 a {
    color: ${(props) => props.theme.text};
  font-size: ${rem(20)};
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
  }

  &:visited {
    color: ${(props) => props.theme.text};
  }
 }
`;

export default GlobalStyles;
