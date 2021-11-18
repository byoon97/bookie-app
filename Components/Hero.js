import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: calibri, sans-serif;
`;

const HeroBG = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const HeroHeader = styled.div`
  height: 30vh;
  width: 50%;
  background-color: rgb(249, 247, 252);
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  font-size: 2em;
  color: rgb(73, 122, 235);
  margin-top: 10rem;
  box-shadow: 2.25px 2.25px 2.25px 2.25px lightgray;
`;

const HeroTitle = styled.h4`
  margin-bottom: 3.5rem;
`;

const HeroP = styled.p`
  color: white;
  font-size: 0.75em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  width: 65%;
  bottom: 0;
`;

const HelperDiv = styled.div`
  height: 12.5rem;
`;

const LogInButton = styled.button`
  background-color: rgb(223, 239, 250);
  border-radius: 7.5px;
  height: 5rem;
  width: 25rem;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  box-shadow: 1.25px 2.25px 2.25px 2.25px lightgray;
`;

const SportsBookButton = styled.button`
  background-color: #b8a8ba;
  border-radius: 7.5px;
  height: 5rem;
  width: 25rem;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  box-shadow: 1.25px 2.25px 2.25px 2.25px rgb(213, 106, 237);
`;

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <HeroContainer>
      <HeroBG src="heros2.jpeg" />
      <HeroHeader data-aos="fade-right" data-aos-once="true">
        <HeroTitle>Welcome to Odds Clash</HeroTitle>
        <HeroP>Dream Big, Win Big.</HeroP>
      </HeroHeader>
      <HelperDiv />
      <ButtonContainer>
        <Link href={{ pathname: "/LogIn" }} passHref>
          <LogInButton data-aos="fade-up" data-aos-once="true">
            Log In
          </LogInButton>
        </Link>
        <Link href={{ pathname: "/SportsBook" }} passHref>
          <SportsBookButton data-aos="fade-up" data-aos-once="true">
            Sports Book
          </SportsBookButton>
        </Link>
      </ButtonContainer>
    </HeroContainer>
  );
}
