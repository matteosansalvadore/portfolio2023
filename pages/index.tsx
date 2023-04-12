import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Introduction = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../forest.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 2px 5px 1px rgba(199, 201, 204, 0.76);
`;

const Hey = styled.h1`
  color: white;
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 20px 0;
`;

const Presentation = styled.h2`
  color: white;
  font-size: 22px;
  margin: 0;
`;

const ProfileCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 3px 4px 1px rgba(199, 201, 204, 0.76);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 1px rgba(199, 201, 204, 0.76);
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 20px 0 5px 0;
  text-shadow: 0px 2px 5px 1px rgba(199, 201, 204, 0.76);
`;

const JobTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  text-shadow: 0px 2px 5px 1px rgba(199, 201, 204, 0.76);
`;

const Location = styled.div`
  background-color: #d1fae5;
  padding: 4px 10px;
  color: #065f46;
  border-radius: 12px;
  font-size: 14px;
  width: fit-content;
  margin: 10px 0;
  box-shadow: 0px 3px 3px 1px rgba(199, 201, 204, 0.76);
`;

const SkillsComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
`;

const SkillsBoxes = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  height: 90px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 1px rgba(199, 201, 204, 0.76);
  background-color: #ffffff;
  align-items: center;
  padding-left: 20px;
  display: flex;
  margin-bottom: 20px;
`;

const Skills = styled.p`
  font-size: 18px;
  color: #111827;
`;

const SkillsImg = styled.img`
  width: 50px;
`;

const SkillsText = styled.p`
  font-size: 16px;
  color: #111827;
  margin-left: 20px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Matteo Sansalvadore</title>
        <meta name="description" content="Matteo Sansalvadore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Introduction>
          <Hey>Hey, I'm Matteo!</Hey>
          <Presentation>
            A frontend developer and Amazon seller from Italy.
          </Presentation>
        </Introduction>
        <ProfileCard>
          <Img src="../FotoMatteo.jpeg"></Img>
          <Name>Matteo Sansalvadore</Name>
          <JobTitle>Frontend Developer</JobTitle>
          <Location>Turin, Italy</Location>
        </ProfileCard>
      </Container>
      <Skills>Skills</Skills>
      <SkillsComponent>
        <SkillsBoxes>
          <SkillsImg src="../Javascript-logo.png"></SkillsImg>
          <SkillsText>JavaScript (ES6+)</SkillsText>
        </SkillsBoxes>
        <SkillsBoxes>
          <SkillsImg src="../React-icon.png"></SkillsImg>
          <SkillsText>React</SkillsText>
        </SkillsBoxes>
        <SkillsBoxes>
          <SkillsImg src="../nextjs-icon.svg"></SkillsImg>
          <SkillsText>NextJs</SkillsText>
        </SkillsBoxes>
      </SkillsComponent>
      <SkillsComponent>
        <SkillsBoxes>
          <SkillsImg src="../css.png"></SkillsImg>
          <SkillsText>CSS</SkillsText>
        </SkillsBoxes>
        <SkillsBoxes>
          <SkillsImg src="../sc.png"></SkillsImg>
          <SkillsText>Styled Components</SkillsText>
        </SkillsBoxes>
        <SkillsBoxes>
          <SkillsImg src="../Ruby_On_Rails_Logo.png"></SkillsImg>
          <SkillsText>Ruby on Rails</SkillsText>
        </SkillsBoxes>
      </SkillsComponent>
    </>
  );
}
