import "../styles/globals.css";
import Sidebar from "./components/sideBar";
import ProfileCard from "./components/profileCard";
import MainDiv from "./components/MainDiv";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const BackgroundDiv = styled.div`
  height: 100%;
  background-color: #e5e7eb;
  margin-left: 270px;
  padding: 30px;
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
