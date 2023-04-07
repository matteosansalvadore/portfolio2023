import "../styles/globals.css";
import Sidebar from "./components/sideBar";
import ProfileCard from "./components/profileCard";
import MainDiv from "./components/MainDiv";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const BackgroundDiv = styled.div`
  height: 100vh;
  width: 100%;
  /* color: #6b7280; */
  background-color: green;
  /* position: relative; */
  color: yellow;
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Sidebar />
      <BackgroundDiv>
        <Component {...pageProps} />
      </BackgroundDiv>
    </MainContainer>
  );
}
