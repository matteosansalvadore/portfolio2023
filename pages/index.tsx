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
  background-color: black;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  width: 100%;
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
      </Container>
    </>
  );
}
