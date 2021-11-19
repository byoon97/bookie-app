import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

const SportTitle = styled.div``;

const WagerTypeContainer = styled.div``;

const WagerType = styled.div``;

const GameContainer = styled.div``;

const ContainerHeader = styled.div``;

const GameDiv = styled.div``;

const Teams = styled.div``;

const Divider = styled.div``;

const SpreadContainer = styled.div``;

const AwaySpread = styled.div``;

const HomeSpread = styled.div``;

const MLContainer = styled.div``;

const AwayML = styled.div``;

const HomeML = styled.div``;

const TotalContainer = styled.div``;

const Under = styled.div``;

const Over = styled.div``;

const Time = styled.div``;

const MoreWagers = styled.div``;

export default function MiddleColumn(props) {
  const [sportsLines, setSportsLines] = useState([]);
  let currentSport = props.props.sport;
  console.log(currentSport);

  async function fetchSports() {
    const res = await fetch(
      "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&apiKey=64c19dd1362d791d7767beb9a799620c"
    );
    const data = await res.json();
    setSportsLines(data);
  }

  useEffect(() => {
    if (currentSport) currentSport === "NBA" ? fetchSports() : null;
  }, []);

  console.log(sportsLines);
  return (
    <Container>
      <SportTitle></SportTitle>
      <WagerTypeContainer></WagerTypeContainer>
      <GameContainer>
        <ContainerHeader></ContainerHeader>
      </GameContainer>
    </Container>
  );
}
