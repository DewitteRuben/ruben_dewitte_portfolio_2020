import styled from "styled-components";
import { rem } from "polished";

const Link = styled.a`
  font-size: ${rem(24)};
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.text};
  }
`;

export default Link;
