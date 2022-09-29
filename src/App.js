import styled from "styled-components";
import Content from "./assets/components/Content";
import Logo from "./assets/components/Logo";
import ProfileSection from "./assets/components/ProfileSection";
import SearchBar from "./assets/components/SearchBar";
import SideMenu from "./assets/components/SideMenu";

// import { Colors } from "./assets/Theme";

const AppEl = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  justify-items: center;
  justify-content: center;
  padding: 0.5rem 0 0 0;
  position: relative;
  gap: 0.5rem;
  align-items: center;
  min-height: 100vh;
  height: 100vh;

  /* background-color: lightcoral; */
`;

function App() {
  return (
    <AppEl>
      <Logo>Grts</Logo>
      <SearchBar />
      <ProfileSection />
      <SideMenu />
      <Content />
    </AppEl>
  );
}

export default App;
