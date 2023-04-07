import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";
import { Folder } from "react-feather";
import { Mail } from "react-feather";

const Main = styled.div`
  width: 250px;
  height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: absolute;
`;

const Name = styled.p`
  font-size: 20px;
  color: #111827;
  font-weight: bold;
  margin: 0;
`;

const Job = styled.div`
  background-color: #dbeafe;
  padding: 4px 10px;
  color: #1e40af;
  border-radius: 12px;
  font-size: 14px;
  width: fit-content;
  margin: 10px 0;
`;

const NavItem = styled.a`
  color: #9ca3af;
  text-decoration: none;
  padding: 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;

  & .logo {
    margin-right: 10px;
  }
`;

export default function Navbar() {
  return (
    <div>
      <Main>
        <Name>Matteo</Name>
        <Name>Sansalvadore</Name>
        <Job>Frontend Developer</Job>
        <NavItem href="#">
          <Home className="logo" />
          Home Page
        </NavItem>
        <NavItem href="#">
          <Folder className="logo" />
          Projects
        </NavItem>
        <NavItem href="#">
          <Mail className="logo" />
          Contacts
        </NavItem>
      </Main>
    </div>
  );
}
