import React from "react";
import { ContentContainer, PageTitle, Spacer, BackgroundContainer, Card } from "../components/Layout";
import styled from "styled-components";
import { rem, em } from "polished";
import { ReactComponent as AdagioLogo } from "../images/adagio.svg";
import StudioHyperdriveLogo from "../images/studio-hyperdrive.jpg";
import HowestLogo from "../images/howest.png";

const ExperienceItem = styled(Card)`
  position: relative;
  padding: ${em(30)} ${em(45)};
`;

const TitleBlock = styled.h3`
  margin: 0;
  display: block;
  font-size: ${rem(20)};
`;

const ListTitle = styled.h3`
  margin: 0;
  font-weight: 500;

  display: block;
  font-size: ${rem(18)};
`;

const DataList = styled.ul`
  margin: 0;
  padding: 0;

  font-size: ${rem(18)};

  list-style-type: none;
`;

const StyledLink = styled.a`
  font-size: ${rem(18)};
`;

const ImageContainer = styled.div`
  position: absolute;
  top: ${em(18)};
  right: ${em(40)};
  max-width: 250px;

  @media screen and (max-width: 700px) {
    position: static;
  }

  img,
  svg {
    height: 70px;
    width: 100%;
    object-fit: contain;
  }

  img:hover,
  svg:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  margin-bottom: 10px;
`;

const Experience = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <PageTitle>Experience</PageTitle>
        <ExperienceItem>
          <ImageContainer>
            <a target="_blank" rel="noopener noreferrer" href="https://adagio.company/">
              <AdagioLogo />
            </a>
          </ImageContainer>
          <TitleBlock>Front end developer</TitleBlock>
          <DataList>
            <li>
              <i>Adagio</i>
            </li>
            <li>Sep. 2019 &ndash; Now</li>
          </DataList>
          <Spacer />
          <Spacer />
          <ListTitle>Tech stack</ListTitle>
          <DataList>
            <li>React.js, Redux/MobX, SASS, Node.js, MongoDb, Typescript, Docker, Webpack</li>
            <li>(Legacy): jQuery, Grunt/ Gulp</li>
          </DataList>
          <Spacer />
          <Spacer />
          <ListTitle>Role</ListTitle>
          <DataList>
            <li>
              Development of web and mobile applications for customers such as Janssen Pharmaceutica, Universal, Bayer and
              the Belgian post
            </li>
          </DataList>
          <Spacer />
          <ListTitle>Website</ListTitle>
          <DataList>
            <li>
              <StyledLink rel="noopener noreferrer" href="https://adagio.company/" target="_blank">
                https://adagio.company/
              </StyledLink>
            </li>
          </DataList>
        </ExperienceItem>
        <Spacer />
        <Spacer />
        <ExperienceItem>
          <ImageContainer>
            <a target="_blank" rel="noopener noreferrer" href="https://studiohyperdrive.be/">
              <img src={StudioHyperdriveLogo} alt="Studio Hyperdrive logo" />
            </a>
          </ImageContainer>

          <TitleBlock>Fullstack JavaScript Developer</TitleBlock>
          <DataList>
            <li>
              <i>Studio Hyperdrive</i>
            </li>
            <li>Feb. 2019 &ndash; May. 2019</li>
          </DataList>
          <Spacer />
          <ListTitle>Tech stack</ListTitle>
          <DataList>
            <li>React.js, React Native, Vue.js, Angular2+, Redux, SASS, Node.js, MongoDb, Typescript, Docker, Webpack</li>
          </DataList>
          <Spacer />
          <ListTitle>Role</ListTitle>
          <DataList>
            <li>
              Assisting development of ‘
              <StyledLink href="http://centenspel.be/" target="_blank">
                Centenspel
              </StyledLink>
              ’ , an online, educative video game where you take the position of Minister of Finance in Belgium.
            </li>
            <li>&nbsp;</li>
            <li>
              Assisting development of ‘
              <StyledLink rel="noopener noreferrer" href="https://www.slimnaarantwerpen.be/en/home" target="_blank">
                Smart ways to Antwerp
              </StyledLink>
              ’, a custom built CMS system and platform that combines and presents route information for in and around
              Antwerp, monthly visited by 10.000’s of users.
            </li>
          </DataList>
          <Spacer />
          <ListTitle>Website</ListTitle>
          <DataList>
            <li>
              <StyledLink rel="noopener noreferrer" href="https://studiohyperdrive.be/" target="_blank">
                https://studiohyperdrive.be/
              </StyledLink>
            </li>
          </DataList>
        </ExperienceItem>
        <Spacer />
        <Spacer />
        <Spacer />
        <PageTitle>Education</PageTitle>
        <ExperienceItem>
          <ImageContainer>
            <a target="_blank" rel="noopener noreferrer" href="https://www.howest.be/en">
              <img src={HowestLogo} alt="University Howest logo" />
            </a>
          </ImageContainer>
          <TitleBlock>Bachelor’s degree: Software Engineer</TitleBlock>
          <DataList>
            <li>
              University of West-Flanders (
              <StyledLink rel="noopener noreferrer" href="https://www.howest.be/en" target="_blank">
                Howest
              </StyledLink>
              , Belgium)
            </li>
            <li>Great distinction (magna cum laude)</li>
            <li>Feb. 2016 &ndash; May 2019</li>
          </DataList>
        </ExperienceItem>
        <Spacer />
        <Spacer />
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Experience;
