import { StyledP } from "../../components/styles/StyledElements";
import {
  StyledAboutDiv,
  StyledAboutWrapper,
  StyledBg,
  StyledBgStyling,
  StyledDiv,
  StyledImage,
  StyledSection,
} from "../../components/styles/Styles";
import { StyledHeader } from "../../components/styles/StyledElements";
import { TextAndContent } from "../../textAndContent/TextAndContent";
import { StyledUl, StyledLi } from "../../components/styles/StyledHeader";

export const About = () => {
  return (
    <StyledBg aboutBg>
      <StyledSection id="about">
        <StyledAboutWrapper>
          <StyledHeader>{TextAndContent.aboutPage.headline}</StyledHeader>
          <StyledP>{TextAndContent.aboutPage.text}</StyledP>
          <StyledBgStyling aboutStyling>
            {/* <StyledUl aboutList>
              <StyledLi aboutList>
                {TextAndContent.aboutPage.listItem1}
              </StyledLi>
              {/* Hobbies /}
              <StyledLi aboutList>
                {TextAndContent.aboutPage.listItem2}
              </StyledLi>
              {/* Interest /}
              <StyledLi aboutList>
                {TextAndContent.aboutPage.listItem3}
              </StyledLi>
              {/* Basic info /}
            </StyledUl> */}
            <StyledDiv aboutTextDiv>
              <StyledP aboutText>{TextAndContent.aboutPage.listItem1}</StyledP>
              <StyledP aboutText>{TextAndContent.aboutPage.listItem2}</StyledP>
              <StyledP aboutText>{TextAndContent.aboutPage.listItem3}</StyledP>
            </StyledDiv>
            <StyledDiv aboutDiv>
              <StyledImage aboutImg src={TextAndContent.aboutPage.imageHTML} />
              <StyledImage aboutImg src={TextAndContent.aboutPage.imageCSS} />
              <StyledImage aboutImg src={TextAndContent.aboutPage.imageJS} />
              <StyledImage
                aboutImg
                src={TextAndContent.aboutPage.imagePython}
              />
              <StyledImage aboutImg src={TextAndContent.aboutPage.imageFigma} />
            </StyledDiv>
          </StyledBgStyling>
        </StyledAboutWrapper>
      </StyledSection>
    </StyledBg>
  );
};
