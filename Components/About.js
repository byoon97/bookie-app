import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 75vh;
  width: 100%;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: calibri, sans-serif;
`;

const ContainerTitle = styled.div`
  font-weight: bold;
  font-size: 3em;
  padding-top: 5rem;
  padding-left: 10rem;
`;

const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
  width: 50rem;
  margin-top: 3.5rem;
  div:hover {
    background-color: rgb(249, 222, 251);
    box-shadow: 2.25px 2.25px 2.25px 2.25px lightgray;
  }
`;

const ReasonDiv = styled.div`
  height: 100%;
  border: 3px solid gray;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReasonTitle = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  padding-left: 4rem;
`;

const ReasonList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const Reason = styled.li`
  font-size: 1em;
`;

export default function About() {
  return (
    <Container>
      <ContainerTitle>Why Use Odds Differential?</ContainerTitle>
      <ReasonContainer>
        <ReasonDiv
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <ReasonTitle>Easy To Use</ReasonTitle>
          <ReasonList>
            <Reason>⚡️ Lightning Fast Odds</Reason>
            <Reason>⚡️ 💸 Lightning Fast Cash Out</Reason>
            <Reason>💻 📱 Many Ways to Play</Reason>
          </ReasonList>
        </ReasonDiv>
        <ReasonDiv
          data-aos="fade-left"
          data-aos-duration="4000"
          data-aos-once="true"
        >
          <ReasonTitle>Every Sport</ReasonTitle>
          <ReasonList>
            <Reason>🏀 🏈 ⚾️ 🏒 American Sports</Reason>
            <Reason>⚽️🏓 International Sports</Reason>
            <Reason>💻 E-Sports</Reason>
          </ReasonList>
        </ReasonDiv>
        <ReasonDiv
          data-aos="fade-left"
          data-aos-duration="6000"
          data-aos-once="true"
        >
          <ReasonTitle>Made By Players</ReasonTitle>
          <ReasonList>
            <Reason>Developed by Players</Reason>
            <Reason>Features and insights from the community</Reason>
            <Reason>Overall user-friendly enjoyable Experience</Reason>
          </ReasonList>
        </ReasonDiv>
      </ReasonContainer>
    </Container>
  );
}
