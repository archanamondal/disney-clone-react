import React from "react";
import styled from "styled-components";
import LogoUrl from "../logo.svg";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100vw;
  background-color: #000;
`;

const Logo = styled.img`
  height: 30px;
  width: auto;
  margin-left: 20px;
`;

const LoginButton = styled.button`
  margin-right: 20px;
  height: 30px;
  width: 80px;
  border: 1px solid #fff;
  outline: none;
  background: transparent;
  color: #fff;
  border-radius: 3px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={LogoUrl} />
      <LoginButton>Login</LoginButton>
    </NavbarContainer>
  );
}

export default Navbar;
