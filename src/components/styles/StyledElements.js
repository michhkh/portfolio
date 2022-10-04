import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const StyledButton = styled(LinkScroll)`
  display: inline-block;
  padding: 0.25em 1.5em;
  background: radial-gradient(#013a63 59%, #01497c 30%);

  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.8rem;
  transition: transform 200ms ease-in-out;
  border-radius: 30px;
  line-height: 1;

  :hover {
    transform: scale(1.1);
    background: radial-gradient(#01497c 79%, #013a63 30%);
  }

  @media (min-width: 600px) {
    font-size: 1.2rem;
    padding: 0.5em 2.5em;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: ${(props) => (props.homeSection ? ".5em" : "0.5em")};
  padding: 0.5em;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledP = styled.p`
  font-size: 1.2rem;
  padding: ${(props) => props.aboutP && ".25em 1em"};
  margin-bottom: ${(props) =>
    props.projectsP ? "1em" : props.homeP && ".5em"};
  margin-top: ${(props) => props.aboutText && ".8em"};

  @media (min-width: 800px) {
    font-size: ${(props) => (props.aboutText ? "1.4rem" : "1.6rem")};
  }
`;

export const StyledScrollButton = styled(LinkScroll)`
  padding: 1.25em 1.25em;
  background-color: rgba(255, 255, 255, 0.29);
  border: none;
  border-radius: 100%;
  cursor: pointer;
  position: fixed;
  bottom: 12px;
  left: 80%;
  width: 40px;
  height: 40px;
  color: #000;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    left: 93%;
  }
`;
