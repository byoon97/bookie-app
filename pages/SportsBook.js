import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Components/SportsBookComponents/Nav";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function SportsBook() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}
