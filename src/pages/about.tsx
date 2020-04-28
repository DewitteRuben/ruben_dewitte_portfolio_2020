import React from "react";
import styled from "styled-components";
import { BackgroundContainer, Card, ContentContainer, PageTitle } from "../components/Layout";
import me from "../images/me.png";

const Article = styled.article`
  text-align: justify;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  display: block;
  float: left;
  border-radius: 4px;

  height: 270px;
  margin-right: 20px;

  filter: contrast(114%) brightness(107%) saturate(113%);

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    float: none;
  }
`;

const About: React.FC = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <PageTitle>About myself</PageTitle>
        <Card>
          <ProfileImage src={me} alt="Ruben Dewitte profile" />
          <Article>
            <p>
              Hi, my name is Ruben Dewitte, I&apos;m a <i>web developer</i> whose passion is to build meaningful and exciting
              products that have an impact.
            </p>
            <p>
              I specialize mostly in web and mobile developement using React.js and React Native, however I keep myself
              entertained with everything JavaScript related.
            </p>
            <p>
              In 2019 at the University of West-Flanders{" "}
              <a href="https://www.howest.be/en" target="_blank">
                Howest
              </a>{" "}
              (Belgium) I obtained my Bachelor&apos;s degree. Other than my degree I currently have one year of professional
              experience as a developer.
            </p>
            <p>As of now I&apos;m looking for opportunities in and around the Rhein-Main area as a Front-end developer.</p>
          </Article>
        </Card>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default About;
