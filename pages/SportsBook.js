import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Components/SportsBookComponents/Nav";
import LeftColumn from "../Components/SportsBookComponents/LeftColumn";
import MainContainer from "../Components/SportsBookComponents/MainContainer";

const Container = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 1320px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const UnderNav = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export default function SportsBook() {
  const [sportType, setSportType] = useState("");

  //Creating a callback function to change currentLink
  const getCurrentLink = (sportType) => {
    setSportType(sportType);
    console.log(sportType);
  };

  return (
    <Container>
      <Nav />
      <UnderNav>
        <LeftColumn handleClick={getCurrentLink} />
        <MainContainer />
      </UnderNav>
    </Container>
  );
}
