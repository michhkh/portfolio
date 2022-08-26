import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "./mainPage/Home";
import { Projects } from "./mainPage/Projects";
import { About } from "./mainPage/About";
import { StyledHeader } from "../components/styles/StyledHeader";

const MainPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default MainPage;
