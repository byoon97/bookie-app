import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 1320px) {
    margin-right: 1rem;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const ButtonSet1 = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HomeButton = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const MyBetButton = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const ButtonSet2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 25rem;
`;

const JoinNow = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const Login = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
`;

const HelperDiv = styled.div`
  height: 100%;
  width: 40rem;
`;

function Nav() {
  return (
    <Container>
      <Logo src="Motive Logo.png" />
      <ButtonSet1>
        <HomeButton>Home</HomeButton>
        <MyBetButton>My Bets</MyBetButton>
      </ButtonSet1>
      <HelperDiv />
      <ButtonSet2>
        <JoinNow>Register</JoinNow>
        <Login>Log In</Login>
      </ButtonSet2>
    </Container>
  );
}

export default Nav;
