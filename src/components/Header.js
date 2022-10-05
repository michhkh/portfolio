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
          <StyledLink linkLogo to="/">
            {TextAndContent.header.mainHome}
          </StyledLink>
        </StyledNavLogo>

        <StyledNav>
          <StyledUl showNavs>
            <StyledLi>
              <StyledLink linkItem to="/">
                {TextAndContent.header.home}
              </StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink linkItem to="projects" smooth={true}>
                {TextAndContent.header.projects}
              </StyledLink>
            </StyledLi>

            <StyledLi>
              <StyledLink linkItem to="about" smooth={true}>
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
