import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GridRowLayout = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Introduction = styled.div`
  height: 300px;
  background-color: black;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  padding: 30px;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 3;
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
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 1px rgba(199, 201, 204, 0.76);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-size: 18px;
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
        <GridRowLayout>
          <Introduction>
            <Hey>Hey, I'm Matteo!</Hey>
            <Presentation>
              A frontend developer and Amazon seller from Italy.
            </Presentation>
          </Introduction>
          <ProfileCard>
            <Img src="../FotoMatteo.jpeg"></Img>
            <Name>Matteo Sansalvadore</Name>
          </ProfileCard>
        </GridRowLayout>
        <GridRowLayout>
          <ProfileCard>
            <Img src="../FotoMatteo.jpeg"></Img>
            <Name>Matteo Sansalvadore</Name>
          </ProfileCard>
          <ProfileCard>
            <Img src="../FotoMatteo.jpeg"></Img>
            <Name>Matteo Sansalvadore</Name>
          </ProfileCard>
          <ProfileCard>
            <Img src="../FotoMatteo.jpeg"></Img>
            <Name>Matteo Sansalvadore</Name>
          </ProfileCard>
        </GridRowLayout>
      </Container>
    </>
  );
}
