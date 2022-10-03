import { StyledP } from "../../components/styles/StyledElements";
import {
  StyledBgStyling,
  StyledSection,
  StyledDiv,
  StyledBg,
  StyledProjectsDiv,
  StyledProjectsContainer,
  StyledA,
  StyledImage,
} from "../../components/styles/Styles";
import { StyledHeader } from "../../components/styles/StyledElements";
import { TextAndContent } from "../../textAndContent/TextAndContent";

export const Projects = () => {
  return (
    <StyledBg projectBg>
      <StyledSection id="projects">
        <StyledHeader>{TextAndContent.projectsPage.headline}</StyledHeader>
        <StyledP projectsP>{TextAndContent.projectsPage.text}</StyledP>
        <StyledProjectsContainer>
          <StyledDiv projectsDiv>
            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  href="https://michhkh.github.io/invoice-creator/"
                  target="_blank"
                >
                  Invoice Creator
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  href="https://michhkh.github.io/collatz/"
                  target="_blank"
                >
                  Collatz
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>

          <StyledDiv projectsDiv>
            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  href="https://michhkh.github.io/adventure/"
                  target="_blank"
                >
                  Adventure
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  href="https://michhkh.github.io/react-app/"
                  target="_blank"
                >
                  React App
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>
        </StyledProjectsContainer>
      </StyledSection>
    </StyledBg>
  );
};
