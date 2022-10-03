import { StyledP } from "../../components/styles/StyledElements";
import {
  StyledBgStyling,
  StyledSection,
  StyledDiv,
  StyledBg,
  StyledProjectsDiv,
  StyledProjectsContainer,
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
              <StyledBgStyling projectsStyling>Project 1</StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>Project 2</StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>

          <StyledDiv projectsDiv>
            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>Project 3</StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling>Project 4</StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>
        </StyledProjectsContainer>
      </StyledSection>
    </StyledBg>
  );
};
