import { FaBars } from "react-icons/fa";
import { TextAndContent } from "../textAndContent/TextAndContent";
import {
  StyledNavContainer,
  StyledNavLogo,
  StyledNavWrapper,
  StyledRouteLink,
  StyledLink,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledMobileIcon,
} from "./styles/StyledHeader";

export const Header = ({ toggle }) => {
  return (
    <StyledNavContainer>
      <StyledNavWrapper>
        <StyledNavLogo>
          <StyledRouteLink to="/">
            {TextAndContent.header.mainHome}
          </StyledRouteLink>
        </StyledNavLogo>

        <StyledNav>
          <StyledUl showNavs>
            <StyledLi>
              <StyledLink to="/">{TextAndContent.header.home}</StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to="projects" smooth={true}>
                {TextAndContent.header.projects}
              </StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink to="about" smooth={true}>
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
