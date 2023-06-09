import React from "react";
import styled from "styled-components";
import { Home } from "react-feather";
import { Folder } from "react-feather";
import { Mail } from "react-feather";
import Link from "next/link";

const Main = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
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

const NavItem = styled.div`
  color: #4b5563;
  text-decoration: none;
  padding: 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;

  & .logo {
    margin-right: 10px;
  }

  & .styledLink {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
  }
`;

const MyUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function Navbar() {
  return (
    <div>
      <Main>
        <Name>Matteo</Name>
        <Name>Sansalvadore</Name>
        <Job>Frontend Developer</Job>
        <MyUl>
          <li>
            <NavItem>
              <Home className="logo" />
              <Link href="/" className="styledLink">
                Home
              </Link>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <Folder className="logo" />
              <Link href="/projects" className="styledLink">
                Projects
              </Link>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <Mail className="logo" />
              <Link href="/contacts" className="styledLink">
                Contacts
              </Link>
            </NavItem>
          </li>
        </MyUl>
      </Main>
    </div>
  );
}
