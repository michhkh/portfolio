import {
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
      <StyledSection>
        <StyledHeader homeSection>
          {TextAndContent.homePage.headline}
        </StyledHeader>

        <StyledHomeWrapper>
          <StyledHomeImage
            img
            src={TextAndContent.homePage.image}
            alt="image"
          />
          <StyledBgStyling homeStyling>
            <StyledP homeP>{TextAndContent.homePage.text}</StyledP>
            <StyledButton to="projects" smooth={true}>
              {TextAndContent.homePage.buttonText}
            </StyledButton>
            <StyledA
              homeA
              href={TextAndContent.homePage.imageLink}
              target="_blank"
            >
              <img
                src={TextAndContent.homePage.imageSource}
                width="75px"
                height="75px"
                alt="github logo"
              />
            </StyledA>
          </StyledBgStyling>
        </StyledHomeWrapper>
      </StyledSection>

      <Projects />
      <About />
    </>
  );
};
