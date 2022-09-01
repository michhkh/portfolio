import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  background: #012a4a;
  color: white;
  height: 100vh;
  text-align: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5vh;
  font-size: 2rem;
  padding: 0.5em 6em 0.5em 8em;
  border: 1px solid #013a63;
`;

export const StyledLeftLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.25em;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledRightLink = styled(Link)`
  margin-right: 2em;
  text-decoration: none;
  color: white;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledHome = styled.div`
  text-align: center;
`;

export const StyledHeader = styled.h1`
  font-size: 4rem;
  font-size: bold;
  margin-top: 0;
  margin-bottom: 1em;
  padding: 1em;
`;

export const StyledHomeWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
`;

export const StyledHomeImage = styled.img`
  max-width: 60%;
  border-radius: 2em;
`;
