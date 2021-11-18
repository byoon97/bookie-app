import React, { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { setCookie } from "nookies";
import PasswordStrengthBar from "react-password-strength-bar";
import Link from "next/link";

//fix styling
//input div containers, show password, fix button, add disclaimer, already have an acc?

const Container = styled.div`
  height: 98vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ProximaNova, sans-serif;
`;

const BGImg = styled.img`
  height: 100%;
  width: 100%;
  background-position: center top;
  background-size: cover;
  position: absolute;
  z-index: -1;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45em;
  width: 26.5em;
  background-color: white;
  border-radius: 5px;
`;

const ContainerTitle = styled.div`
  color: rgb(50, 72, 105);
  font-size: 20px;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

const AlreadyHaveButton = styled.button`
  width: 85%;
  height: 2.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  background-color: rgb(37, 69, 109);
  border: none;
  color: white;
  border-radius: 4.5px;
  cursor: pointer;
`;

const InputFields = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  div {
  }
`;

const Input = styled.input`
  width: 22rem;
  height: 4rem;
  border-radius: 4px;
  border-width: 1px;
  font-family: inherit;
  margin-bottom: 1rem;

  ${
    "" /* ::placeholder {
    margin-top: 1rem;
  } */
  }
`;

const UsernamePassword = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -1;
`;

const SignUp = styled.button``;

export default function Register(props) {
  console.log("login", props);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  //Log In logic
  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };

    const register = await fetch(`http://localhost:1337/auth/local/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    });

    const registerResponse = await register.json();

    if (registerResponse.error) {
      setError(registerResponse.message[0].messages[0].message);
    } else {
      setCookie(null, "jwt", registerResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      // props.handleClick(true);

      Router.push("/");
    }
  }

  return (
    <Container>
      <BGImg src="auth.jpeg" />
      <RegisterContainer>
        <ContainerTitle>Create your Account</ContainerTitle>
        <Link href="/LogIn" passHref>
          <AlreadyHaveButton>
            Already Have an Account with us?
          </AlreadyHaveButton>
        </Link>

        <InputFields>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
        </InputFields>
        <UsernamePassword>
          <InputFields>
            <div>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="username"
              />
            </div>
          </InputFields>
          <InputFields>
            <div>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
              />
              <PasswordStrengthBar password={password} />
            </div>
          </InputFields>
        </UsernamePassword>

        <SignUp onClick={() => handleRegister()}>Register</SignUp>
        {error ? error : null}
      </RegisterContainer>
    </Container>
  );
}
