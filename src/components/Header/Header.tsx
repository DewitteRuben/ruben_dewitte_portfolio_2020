import styled from "styled-components";
import { rem, em } from "polished";
import React from "react";
import Link from "../Link/Link";
import { NavLink } from "react-router-dom";
import { NavLinkUL } from "../Layout";
import Icon from "../Icon/Icon";
import useClickOutside from "../../hooks/useClickOutside";

const activeClassName = "selected";
const StyledRouterLink = styled(NavLink).attrs({ activeClassName })`
  text-transform: lowercase;

  &.${activeClassName} {
    border-bottom: 2px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;

  font-weight: bold;
  font-size: ${rem(32)};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${em(30)} ${em(50)};
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.backgroundHeader};

  @media screen and (max-width: 415px) {
    padding: ${em(10)} ${em(50)};
  }
`;

interface IResponsiveNavLinkULProps {
  visible?: boolean;
}

const ResponsiveNavLinkUL = styled(NavLinkUL)<IResponsiveNavLinkULProps>`
  width: 450px;
  transition: opacity 0.2s linear;

  @media only screen and (max-width: 700px) {
    width: initial;
    max-width: 100%;
    margin: 0;
    padding: 0;
    padding: 20px 0px;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 92px;
    width: 100%;
    height: 125px;
    list-style-type: none;
    background-color: ${(props) => props.theme.backgroundColor};
    border-top: 1px solid ${(props) => props.theme.backgroundHeader};
    opacity: ${(props) => (props.visible ? "1" : "0")};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const Hamburger = styled(Icon)`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
  }
`;

const ButtonUnstyled = styled.button`
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Header: React.FC = () => {
  const [isVisible, setVisibility] = React.useState(false);
  const closeDropdown = () => {
    setVisibility(false);
  };

  const toggleVisbility = () => {
    setVisibility((prev) => !prev);
  };

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const navRef = useClickOutside<HTMLUListElement>(closeDropdown, buttonRef.current);

  return (
    <>
      <HeaderContainer>
        <Title>Ruben Dewitte</Title>
        <ButtonUnstyled onClick={toggleVisbility} ref={buttonRef}>
          <Hamburger size={36} name="menu" />
        </ButtonUnstyled>
        <ResponsiveNavLinkUL visible={isVisible} ref={navRef}>
          <li>
            <Link onClick={closeDropdown} activeClassName="selected" to="/projects" as={StyledRouterLink}>
              projects
            </Link>
          </li>
          <li>
            <Link onClick={closeDropdown} activeClassName="selected" to="/experience" as={StyledRouterLink}>
              Experience
            </Link>
          </li>
          <li>
            <Link onClick={closeDropdown} activeClassName="selected" to="/about" as={StyledRouterLink}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeDropdown} activeClassName="selected" to="/contact" as={StyledRouterLink}>
              Contact
            </Link>
          </li>
        </ResponsiveNavLinkUL>
      </HeaderContainer>
    </>
  );
};

export default Header;
