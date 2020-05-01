import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import { NavLinkUL } from "../Layout";
import { rem, em } from "polished";

const FooterContainer = styled.footer`
  width: 100%;
  padding: ${em(25)} ${em(50)} ${em(20)} ${em(50)};
  box-sizing: border-box;

  border-top: 1px solid ${(props) => props.theme.backgroundHeader};
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FooterLink = styled(Link)`
  font-size: ${rem(18)};
`;

const StyledNavUL = styled(NavLinkUL)`
  max-width: 200px;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NavLinkContainer>
        <StyledNavUL>
          <li>
            <FooterLink href="https://www.linkedin.com/in/rubendewitte/" target="_blank">
              Linkedin
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://www.xing.com/profile/Ruben_Dewitte/cv" target="_blank">
              Xing
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://github.com/DewitteRuben/" target="_blank">
              Github
            </FooterLink>
          </li>
        </StyledNavUL>
      </NavLinkContainer>
    </FooterContainer>
  );
};

export default Footer;
