import React from "react";
import { ContentContainer, PageTitle, BackgroundContainer } from "../components/Layout";
import styled from "styled-components";
import { rem } from "polished";
import { Route, useRouteMatch, useHistory } from "react-router-dom";

/* eslint import/no-webpack-loader-syntax: off */
/* eslint-disable import/no-unresolved */
import Decoworld, { frontMatter as decoFrontMatter } from "!babel-loader!mdx-loader!../projects/decoapp.mdx";
import Gpsapp, { frontMatter as gpsFrontMatter } from "!babel-loader!mdx-loader!../projects/gpsapp.mdx";

const projects = [
  { component: Decoworld, frontMatter: decoFrontMatter },
  { component: Gpsapp, frontMatter: gpsFrontMatter },
];

interface IProjectItemContainerProps {
  bgURL?: string;
}

const ProjectItemContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProjectItemImage = styled.div<IProjectItemContainerProps>`
  width: 100%;
  height: 260px;
  background-repeat: no-repeat;
  background-size: auto 200%;
  background-position-x: center;
  background-position-y: 55px;
  height: 20em;
  transition: all 0.2s ease, background-position 0ms;

  filter: blur(3px);
  opacity: 0.8;

  background-image: url(${(props) => (props.bgURL ? props.bgURL : "")});

  &:hover {
    cursor: pointer;
    filter: none;
    background-size: auto 210%;
    opacity: 1;
  }
`;

const ProjectItemTitle = styled.span`
  position: absolute;
  text-shadow: 2px 2px 1px #fff;
  top: 45%;
  left: 60px;
  z-index: 2;

  font-size: ${rem(38)};
  font-weight: bold;
  pointer-events: none;
`;

interface IProjectItem {
  title: string;
  route: string;
  background?: string;
}

const ProjectItem: React.FC<IProjectItem> = ({ title, route, background }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(route);
  };

  return (
    <ProjectItemContainer>
      <ProjectItemTitle>{title}</ProjectItemTitle>
      <ProjectItemImage bgURL={background} onClick={handleOnClick} />
    </ProjectItemContainer>
  );
};

const Projects: React.FC = () => {
  const match = useRouteMatch();

  return (
    <BackgroundContainer>
      <ContentContainer>
        <PageTitle>Projects</PageTitle>
        <Route path={match.url} exact>
          {projects.map(({ component, frontMatter }) => (
            <ProjectItem
              key={frontMatter.route}
              route={`${match.url}/${frontMatter.route}`}
              background={frontMatter.thumb}
              title={frontMatter.title}
            />
          ))}
        </Route>
        {projects.map(({ component, frontMatter }) => (
          <Route
            key={`${match.url}/${frontMatter.route}`}
            path={`${match.url}/${frontMatter.route}`}
            component={component}
          />
        ))}
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Projects;
