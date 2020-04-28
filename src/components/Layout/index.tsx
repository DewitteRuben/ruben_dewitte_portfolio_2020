import styled from "styled-components";
import { rem, em } from "polished";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 1140px;
  max-width: 1140px;
  padding: ${em(20)};
  box-sizing: border-box;

  @media screen and (max-width: 1140px) {
    width: 100%;
  }
`;

const NavLinkUL = styled.ul`
  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }
`;

const PageTitle = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto 20px auto;
  max-width: 100%;
  height: 300px;
  border-radius: 4px;

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

const Paragraph = styled.p`
  font-size: ${rem(20)};
  font-weight: normal;
`;

const TextLink = styled.a`
  color: ${(props) => props.theme.text};
  font-size: ${rem(20)};
  text-decoration: underline;

  &:hover {
    opacity: 0.6;
  }

  &:visited {
    color: ${(props) => props.theme.text};
  }
`;

const Spacer = styled.span`
  display: inline-block;
  height: 16px;
`;

const SpacerVertical = styled.span`
  display: inline-block;
  height: 100%;
  width: 16px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  background-color: #e3e3e340;
  /* background-color: #d3e0e3; */
  /* background-color: #d8ebf2; */
`;

const Card = styled.div`
  box-sizing: border-box;

  padding: ${em(20)};
  width: 100%;

  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export {
  PageContainer,
  ContentContainer,
  NavLinkUL,
  PageTitle,
  Image,
  Paragraph,
  TextLink,
  Spacer,
  SpacerVertical,
  Subtitle,
  BackgroundContainer,
  Card,
};
