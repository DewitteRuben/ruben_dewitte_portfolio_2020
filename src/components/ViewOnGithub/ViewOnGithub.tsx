import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import { IconLink } from "../Link/Link";
import { Small } from "../Layout";

interface IViewOnGithubProps {
  href: string;
}

const ViewOnGithubContainer = styled(IconLink)`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
  }

  @media screen and (max-width: 450px) {
    position: static;
  }
`;

const ViewOnGithub: React.FC<IViewOnGithubProps> = ({ href }) => {
  return (
    <ViewOnGithubContainer rel="noopener noreferrer" target="_blank" href={href}>
      <Small>View on Github</Small> <Icon name="github" />
    </ViewOnGithubContainer>
  );
};

export default ViewOnGithub;
