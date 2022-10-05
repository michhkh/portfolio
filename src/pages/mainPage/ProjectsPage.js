import { StyledP } from "../../components/styles/StyledElements";
import {
  StyledBgStyling,
  StyledSection,
  StyledDiv,
  StyledBg,
  StyledProjectsDiv,
  StyledProjectsContainer,
  StyledA,
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
                  projectsA
                  href={TextAndContent.projectsPage.projectLink1}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName1}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink2}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName2}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>

          <StyledDiv projectsDiv>
            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink3}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName3}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink4}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName4}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>
        </StyledProjectsContainer>
      </StyledSection>
    </StyledBg>
  );
};
