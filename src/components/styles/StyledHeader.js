import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const StyledNavContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  border-bottom: 1px solid grey;
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const StyledNavLogo = styled.div`
  margin: 0;
`;

export const StyledNav = styled.nav`
  @media screen and (min-width: 600px) {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const StyledMobileIcon = styled.div`
  position: relative;
  top: -18px;
  right: -30px;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const StyledRouteLink = styled(LinkRouter)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.25em;
  font-family: "Slackey", cursive;

  :hover {
    text-decoration: underline;
  }

  @media (min-width: 600px) {
    font-size: 2.8rem;
  }
`;

export const StyledLink = styled(LinkScroll)`
  margin-left: 1.5em;
  text-decoration: none;
  color: white;
  font-size: 1.6rem;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledUl = styled.ul`
  list-style: ${(props) => props.showNavs && "none"};
  display: ${(props) => props.showNavs && "none"};
  margin: 0;
  line-height: 1.6;

  @media (min-width: 600px) {
    display: ${(props) => props.showNavs && "flex"};
    align-items: center;
    font-size: 1.4rem;
  }
`;

export const StyledLi = styled.li`
  padding-top: 0;
`;
