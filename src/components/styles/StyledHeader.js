import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

// export const StyledNavContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   min-height: 5vh;
//   font-size: 2rem;
//   padding: 0.5em 6em 0.5em 8em;
//   border: 1px solid #013a63;
// `;

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
  //   position: fixed;
  //   background-color: var(--clr-dark);
  //   color: var(--clr-light);
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   z-index: 100;

  //   transform: translateX(0%);
  //   transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);

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
  list-style-position: ${(props) => props.aboutList && "inside"};
  width: ${(props) => props.aboutList && "90%"};
  margin: ${(props) => (props.aboutList ? "1em auto 0 auto" : "0")};
  line-height: 1.6;

  @media (min-width: 600px) {
    display: ${(props) => props.showNavs && "flex"};
    width: ${(props) => props.aboutList && "88%"};

    align-items: center;
    font-size: 1.4rem;
  }
`;

export const StyledLi = styled.li`
  padding-top: ${(props) => (props.aboutList ? "1em" : "0")};
`;
