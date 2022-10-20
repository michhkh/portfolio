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
              <StyledBgStyling projectsStyling firstProject>
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
              <StyledBgStyling projectsStyling secondProject>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink2}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName2}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling thirdProject>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink3}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName3}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>

          <StyledDiv projectsDiv>
            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling fourthProject>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink4}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName4}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling fifthProject>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink5}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName5}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>

            <StyledProjectsDiv projectsDiv>
              <StyledBgStyling projectsStyling sixthProject>
                <StyledA
                  projectsA
                  href={TextAndContent.projectsPage.projectLink6}
                  target="_blank"
                >
                  {TextAndContent.projectsPage.projectName6}
                </StyledA>
              </StyledBgStyling>
            </StyledProjectsDiv>
          </StyledDiv>
        </StyledProjectsContainer>
      </StyledSection>
    </StyledBg>
  );
};
