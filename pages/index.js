import styled from "styled-components";
import "aos/dist/aos.css";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Footer from "../Components/Footer";

const Container = styled.div`
  height: 200vh;
  width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Footer />
    </Container>
  );
}
