import { useState } from "react";
import { Header } from "../components/Header";
import { Home } from "./mainPage/HomePage";
import { StyledMainPageContainer } from "../components/styles/Styles";
import { Sidebar } from "../components/Sidebar";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMainPageContainer>
      <Header toggle={toggle} />
      <Home />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </StyledMainPageContainer>
  );
};

export default MainPage;
