import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  width: 100%;
  background-color: rgb(234, 232, 220);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default function Footer() {
  return (
    <Container>
      <a href="https://my-portfolio-7xgmvmo84-byoon.vercel.app/">
        My Portfolio
      </a>
      <a href="https://github.com/byoon97">My Github</a>
      <a href="https://www.linkedin.com/in/brandon-yoon-24479715b/">
        Linked In
      </a>
    </Container>
  );
}
