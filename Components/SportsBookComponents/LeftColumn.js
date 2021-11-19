import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 10.45rem;
  height: 100%;
`;

const ListTitle = styled.div`
  padding-top: 1.5rem;
  padding-left: 2rem;
  font-weight: bold;
  font-size: 1.255em;
`;

const PopularList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-right: 2.5rem;
`;

const Sports = styled.div`
  padding-bottom: 0.75rem;
  cursor: pointer;
  color: rgb(44, 133, 232);
`;

function LeftColumn(props) {
  const sports = ["NCAAF", "NFL", "NBA", "NCAAB", "NHL", "Golf", "Soccer"];
  //   const [sports, setSports] = useState();

  //   async function fetchSports() {
  //     const res = await fetch(
  //       "https://api.the-odds-api.com/v4/sports?apiKey=64c19dd1362d791d7767beb9a799620c"
  //     );
  //     const data = await res.json();
  //     setSports(data);
  //   }

  //   useEffect(() => {
  //     fetchSports();
  //   }, []);

  //   console.log(sports);

  // NO FUTURES

  //   let results = sports
  //     ? sports.filter((sport) => sport.has_outrights === false)
  //     : null;

  //   console.log("1", results);

  return (
    <Container>
      <ListTitle>Popular</ListTitle>
      <PopularList>
        {sports.map((sport) => {
          return (
            <Link
              href={{
                pathname: `/sportbook/` + sport,
              }}
              passHref
              key={sport}
            >
              <Sports onClick={() => props.handleClick({ sport })}>
                {sport}
              </Sports>
            </Link>
          );
        })}
      </PopularList>
    </Container>
  );
}

export default LeftColumn;
