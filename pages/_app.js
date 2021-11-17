import styled from "styled-components";

const Container = styled.div`
  margin: 0;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
export default MyApp;
