import styled from "styled-components";
import { useEffect, useState } from "react";
import "../styles/globals.css";

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

function MyApp({ Component, pageProps, props }) {
  // const [loggedIn, setloggedIn] = useState(false);

  // useEffect(() => {
  //   props.cookies ? setloggedIn(true) : setloggedIn(false);
  // }, []);

  // console.log("is a user logged in?", loggedIn);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

// MyApp.getInitialProps = async ({ ctx }) => {
//   const cookies =
//     typeof window === "undefined" ? ctx.req.headers.cookie : document.cookie;

//   return {
//     props: {
//       cookies,
//     },
//   };
// };

export default MyApp;
