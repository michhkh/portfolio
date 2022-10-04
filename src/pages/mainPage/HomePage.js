import {
  StyledHome,
  StyledHomeImage,
  StyledHomeWrapper,
  StyledSection,
  StyledBgStyling,
  StyledA,
} from "../../components/styles/Styles";
import { StyledHeader } from "../../components/styles/StyledElements";
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
        <StyledHome right top transform />

        <StyledHomeWrapper>
          <StyledHomeImage
            img
            src={TextAndContent.homePage.image}
            alt="image"
          />
          <StyledBgStyling homeStyling>
            {/* <StyledHomeDiv> */}
            <StyledP homeP>{TextAndContent.homePage.text}</StyledP>
            <StyledButton to="projects" smooth={true}>
              {TextAndContent.homePage.buttonText}
            </StyledButton>
            <StyledA homeA href="https://github.com/michhkh" target="_blank">
              <img
                src={TextAndContent.homePage.imageGithub}
                width="80"
                height="80"
              />
            </StyledA>
            {/* </StyledHomeDiv> */}
          </StyledBgStyling>
        </StyledHomeWrapper>
        <StyledHome center transformIt hideIt />
        <StyledHome centerDuo transformIt hideIt />
        <StyledHome left bottom transformIt />
        <StyledHome middle bottom transformIt />
        <StyledHome right bottom />
      </StyledSection>

      <Projects />
      <About />
    </>
  );
};
