import React from "react";
import { useHistory } from "react-router-dom";
import Link from "../Link/Link";
import { Small } from "../Layout";
import styled from "styled-components";
import Icon from "../Icon/Icon";

interface IGoBackProps extends React.ComponentPropsWithoutRef<"div"> {
  text: string;
  align?: "left" | "right" | "center";
}

const propToFlexMap: Record<string, string> = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

interface IGoBackContainerProps {
  align?: string;
}

const GoBackContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 450px) {
    margin-bottom: 30px;
  }
`;

const StyledLink = styled(Link)<IGoBackContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.align ? propToFlexMap[props.align] : "flex-start")};

  span {
    margin-left: 10px;
  }

  &:hover {
    border: none;
  }
`;

const GoBack: React.FC<IGoBackProps> = ({ text, align, className }) => {
  const history = useHistory();
  return (
    <GoBackContainer className={className}>
      <StyledLink align={align} onClick={history.goBack}>
        <Icon size={20} name="back" />
        <Small>{text}</Small>
      </StyledLink>
    </GoBackContainer>
  );
};

export default GoBack;
