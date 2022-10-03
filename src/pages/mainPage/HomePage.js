import {
  StyledHome,
  StyledHomeImage,
  StyledHomeWrapper,
  StyledHomeDiv,
  StyledSection,
  StyledImage,
  StyledHomeContainer,
  StyledBgStyling,
} from "../../components/styles/Styles";
import { StyledHeader } from "../../components/styles/StyledElements";
import "../../App.css";
import { StyledButton, StyledP } from "../../components/styles/StyledElements";
import { Projects } from "./ProjectsPage";
import { About } from "./AboutPage";
import { TextAndContent } from "../../textAndContent/TextAndContent";
import { ScrollToTop } from "../../components/ScrollToTop";

export const Home = () => {
  return (
    <>
      <ScrollToTop />
      <StyledSection id="/">
        <StyledHeader homeSection>
          {TextAndContent.homePage.headline}
        </StyledHeader>

        <StyledHome left top />
        <StyledHome right top yes />

        <StyledHomeWrapper>
          <StyledHomeImage
            img
            src={TextAndContent.homePage.image}
            alt="image"
          />
          <StyledBgStyling homeStyling>
            {/* <StyledHomeDiv> */}
            <StyledP homeP>{TextAndContent.homePage.text}</StyledP>
            <StyledButton>{TextAndContent.homePage.buttonText}</StyledButton>
            <StyledImage homeImg src={TextAndContent.homePage.imageGithub} />
            {/* </StyledHomeDiv> */}
          </StyledBgStyling>
        </StyledHomeWrapper>
        <StyledHome left bottom yes />
        <StyledHome middle bottom yes />
        <StyledHome right bottom />
      </StyledSection>

      <Projects />
      <About />
    </>
  );
};
