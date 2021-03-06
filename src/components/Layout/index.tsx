import { em } from "polished";
import styled from "styled-components";

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

const MarkdownImage = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 500px;
  transition: transform 0.6s ease-in-out;
`;

const MarkdownGif = styled.img`
  display: block;
  margin: 0 auto;

  max-width: 600px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
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

const Small = styled.span`
  font-size: 75%;
`;

const Spacer = styled.span`
  display: inline-block;
  min-height: 16px;
`;

const SpacerVertical = styled.span`
  display: inline-block;
  height: 100%;
  min-width: 16px;
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
  Spacer,
  SpacerVertical,
  Subtitle,
  BackgroundContainer,
  Card,
  MarkdownImage,
  Small,
  MarkdownGif,
};
