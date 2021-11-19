import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../SportsBookComponents/Nav";
import LeftColumn from "../SportsBookComponents/LeftColumn";
import MiddleColumn from "./MiddleColumn";

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

export default function MainContainer() {
  const [sportType, setSportType] = useState("");

  //Creating a callback function to change currentLink
  const getCurrentLink = (sportType) => {
    setSportType(sportType);
  };

  return (
    <Container>
      <Nav />
      <UnderNav>
        <LeftColumn handleClick={getCurrentLink} />
        <MiddleColumn props={sportType} />
      </UnderNav>
    </Container>
  );
}
