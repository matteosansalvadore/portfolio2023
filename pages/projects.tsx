import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Search } from "react-feather";

const ProjectsName = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #111827;
  margin: 0;
`;

const SearchBar = styled.input`
  height: 30px;
  width: 50%;
  background-color: #ffffff;
  color: #9ca3af;
  border: none;
  border-radius: 6px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProjectsComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
`;

const ProjectsBoxes = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 1px rgba(199, 201, 204, 0.76);
  background-color: #ffffff;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  text-align: left;
`;

const ProjectsImg = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 0;
  border-radius: 10px;
`;

const ProjectTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 0 20px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin-left: 20px;
`;

const Main = styled.div`
  height: 100vh;
`;

export default function Projects() {
  return (
    <Main>
      <HeaderContainer>
        <ProjectsName>Projects</ProjectsName>
        <SearchBar placeholder="<Search /> Search Projects"></SearchBar>
      </HeaderContainer>
      <ProjectsComponent>
        <ProjectsBoxes>
          <ProjectsImg src="../forest.jpg"></ProjectsImg>
          <ProjectTitle>Project Name</ProjectTitle>
          <ProjectDescription>(React, Css, Javascript)</ProjectDescription>
        </ProjectsBoxes>
        <ProjectsBoxes>
          <ProjectsImg src="../forest.jpg"></ProjectsImg>
          <ProjectTitle>Project Name</ProjectTitle>
          <ProjectDescription>(React, Css, Javascript)</ProjectDescription>
        </ProjectsBoxes>
        <ProjectsBoxes>
          <ProjectsImg src="../forest.jpg"></ProjectsImg>
          <ProjectTitle>Project Name</ProjectTitle>
          <ProjectDescription>(React, Css, Javascript)</ProjectDescription>
        </ProjectsBoxes>
      </ProjectsComponent>
    </Main>
  );
}
