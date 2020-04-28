import { em, rem } from "polished";
import React from "react";
import styled from "styled-components";
import Icon from "../components/Icon/Icon";
import {
  BackgroundContainer,
  Card,
  ContentContainer,
  PageTitle,
  Spacer,
  SpacerVertical,
  Subtitle,
} from "../components/Layout";

const Input = styled.input`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};
  font-size: ${rem(20)};
  max-height: 50px;
  padding: ${em(10)} ${em(15)};
  margin: 0;
  box-sizing: border-box;

  transition-property: border, box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
  width: 100%;

  &:focus {
    border: 1px solid #00cdcb;
    box-shadow: 0 0 5px 0 rgba(0, 205, 203, 0.15);
  }
`;

const Textarea = styled(Input)`
  min-height: 125px;
  max-width: 100%;
  min-width: 100%;
`;

const Label = styled.label`
  &:first-of-type {
    margin: 0 0 10px 0;
  }

  margin: 10px 0;
  font-weight: bold;
  display: inline-block;
  font-size: ${rem(16)};

  &:hover {
    cursor: pointer;
  }
`;

const Article = styled.article`
  position: relative;
  max-width: 600px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.border};
  padding: ${em(8)} ${em(20)};
  border-radius: 10px;
  font-size: ${rem(18)};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonColor};

  &:hover {
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.buttonBackgroundColor};
    cursor: pointer;
  }
`;

const Vr = styled.div`
  position: absolute;
  border-right: 1px solid ${(props) => props.theme.border};
  height: 335px;
  top: 0;
  right: -75px;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 1140px) {
    max-width: 880px;
    ${Vr} {
      display: none;
    }
  }
`;

const ContactContainer = styled.aside`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  word-break: break-all;
`;

const ContactCard = styled(Card)`
  padding: ${em(20)} ${em(40)};
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const Contact = () => {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <Section>
          <Card>
            <PageTitle>Get in touch</PageTitle>
            <p>Got a question, a request, or want to work together? Do not hesitate to contact me.</p>
          </Card>
        </Section>
        <ContactCard>
          <RowContainer>
            <Article>
              <form action="https://formspree.io/mjvepvde" method="POST">
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" id="name" />
                <Label htmlFor="email">Email:</Label>
                <Input type="email" name="_replyto" id="email" />
                <Label htmlFor="message">Message:</Label>
                <Textarea name="message" as="textarea" id="message" />
                <SpacerVertical />
                <ButtonContainer>
                  <Button type="submit" value="Send">
                    Send message
                  </Button>
                </ButtonContainer>
              </form>
              <Spacer />
              <Vr />
            </Article>
            <ContactContainer>
              <Subtitle>Contact information</Subtitle>
              <Spacer />
              <IconContainer>
                <Icon name="mail" />
                <SpacerVertical />
                <a href="mailto:ruben.dewitte@proximus.be">ruben.dewitte@proximus.be</a>
              </IconContainer>
              <Spacer />
              <IconContainer>
                <Icon name="phone" />
                <SpacerVertical />
                <a href="tel:+3247351307">+32 47 0351307</a>
              </IconContainer>
            </ContactContainer>
          </RowContainer>
        </ContactCard>
      </ContentContainer>
    </BackgroundContainer>
  );
};

export default Contact;
