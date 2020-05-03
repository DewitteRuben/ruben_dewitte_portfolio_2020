import React from "react";
import { ContentContainer, PageTitle, BackgroundContainer } from "../components/Layout";
import styled from "styled-components";
import { rem, em } from "polished";
import { Route, useRouteMatch, useHistory } from "react-router-dom";

/* eslint import/no-webpack-loader-syntax: off */
/* eslint-disable import/no-unresolved */
import Decoworld, { frontMatter as decoFrontMatter } from "!babel-loader!mdx-loader!../projects/decoapp.mdx";
import GpsApp, { frontMatter as gpsFrontMatter } from "!babel-loader!mdx-loader!../projects/gpsapp.mdx";
import ViewOnGithub from "../components/ViewOnGithub/ViewOnGithub";

const projects = [
  { Component: Decoworld, frontMatter: decoFrontMatter },
  { Component: GpsApp, frontMatter: gpsFrontMatter },
];

interface IProjectItemContainerProps {
  bgURL?: string;
  yPos?: number | string;
}

const ProjectItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProjectItemImage = styled.div<IProjectItemContainerProps>`
  filter: blur(3px);
  
  width: 100%;
  height: 20em;
  opacity: 0.8;

  transition: all 0.2s ease, background-position 0ms;

  background-image: url(${(props) => (props.bgURL ? props.bgURL : "")});
  background-repeat: no-repeat;
  background-size: auto 212%;
  background-position-x: center;
  background-position-y: ${(props) => (props.yPos ? props.yPos : em(55))}};
  
  &:hover {
    cursor: pointer;
    filter: none;
    background-size: auto 222%;
    opacity: 1;
  }  
`;

const ProjectPageContainer = styled.div`
  position: relative;
`;

const ProjectItemTitle = styled.span`
  position: absolute;
  text-shadow: 2px 2px 1px #fff;
  top: 45%;
  left: 5.5%;
  z-index: 2;

  font-size: ${rem(38)};
  font-weight: bold;
  pointer-events: none;
`;

interface IProjectItem {
  title: string;
  route: string;
  background?: string;
  yPos?: number | string;
}

const ProjectItem: React.FC<IProjectItem> = ({ title, route, background, yPos }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(route);
  };

  return (
    <ProjectItemContainer>
      <ProjectItemTitle>{title}</ProjectItemTitle>
      <ProjectItemImage yPos={yPos} bgURL={background} onClick={handleOnClick} />
    </ProjectItemContainer>
  );
};

const Projects: React.FC = () => {
  const match = useRouteMatch();

  return (
    <BackgroundContainer>
      <ContentContainer>
        <Route path={match.url} exact>
          <PageTitle>Projects</PageTitle>
          {projects.map(({ frontMatter }) => (
            <ProjectItem
              key={frontMatter.route}
              route={`${match.url}/${frontMatter.route}`}
              yPos={frontMatter.yPosThumb}
              background={frontMatter.thumb}
              title={frontMatter.title}
            />
          ))}
        </Route>
        <ProjectPageContainer>
          {projects.map(({ Component, frontMatter }) => (
            <Route key={`${match.url}/${frontMatter.route}`} path={`${match.url}/${frontMatter.route}`}>
              {frontMatter.repo && <ViewOnGithub href={frontMatter.repo} />}
              <Component />
            </Route>
          ))}
        </ProjectPageContainer>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Projects;
