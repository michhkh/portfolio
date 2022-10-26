import { FaBars } from "react-icons/fa";
import { TextAndContent } from "../textAndContent/TextAndContent";
import {
  StyledNavContainer,
  StyledNavLogo,
  StyledNavWrapper,
  StyledLink,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledMobileIcon,
} from "./styles/StyledHeader";

export const Header = ({ toggle }) => {
  return (
    <StyledNavContainer id="/">
      <StyledNavWrapper>
        <StyledNavLogo>
          <StyledLink to="/" logo="true">
            {TextAndContent.header.mainHome}
          </StyledLink>
        </StyledNavLogo>

        <StyledNav>
          <StyledUl showNavs>
            <StyledLi>
              <StyledLink to="/" item="true">
                {TextAndContent.header.home}
              </StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to="projects" smooth={true} item="true">
                {TextAndContent.header.projects}
              </StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to="about" smooth={true} item="true">
                {TextAndContent.header.about}
              </StyledLink>
            </StyledLi>
          </StyledUl>
        </StyledNav>

        <StyledMobileIcon onClick={toggle}>
          <FaBars />
        </StyledMobileIcon>
      </StyledNavWrapper>
    </StyledNavContainer>
  );
};
