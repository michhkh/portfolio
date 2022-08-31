import { Link } from "react-router-dom";
import {
  StyledLeftLink,
  StyledLink,
  StyledLinkWrapper,
  StyledNav,
  StyledRightLink,
} from "./styles/Styles";

export const Header = () => {
  return (
    <StyledNav>
      <div>
        <StyledLeftLink to="/">Michael.</StyledLeftLink>
      </div>
      <div>
        <StyledRightLink to="/">Home</StyledRightLink>
        <StyledRightLink to="/projects">Projects</StyledRightLink>
        <StyledRightLink to="/about">About</StyledRightLink>
      </div>
    </StyledNav>
  );
};
