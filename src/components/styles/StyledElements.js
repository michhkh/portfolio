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

// export const StyledH1 = styled.h1`
//   font-weight: ${(props) =>
//     props.notBold ? "var(--fw-reg)" : "var(--fw-bold)"};
//   font-size: ${(props) =>
//     props.large ? "3.5rem" : props.medium ? "2.5rem" : "2rem"};
//   color: ${(props) => props.colorYes && "var(--clr-accent)"};
//   position: ${(props) => props.colorYes && "relative"};
//   margin-bottom: 0.25em;
//   line-height: 1;

//   &::after {
//     content: ${(props) => props.colorYes && `''`};
//     display: ${(props) => props.colorYes && `block`};
//     width: ${(props) => props.colorYes && "2em"};
//     height: ${(props) => props.colorYes && "1px"};
//     margin: ${(props) => props.colorYes && "0.5em auto 1em"};
//     background: ${(props) => props.colorYes && "#fff"};
//     opacity: ${(props) => props.colorYes && "0.25"};
//   }

//   @media (min-width: 800px) {
//     font-size: ${(props) =>
//       props.large ? "4rem" : props.medium ? "3.75rem" : "2rem"};
//   }
// `;

export const StyledHeader = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: ${(props) => (props.homeSection ? "1.5em" : "0.5em")};
  padding: 0.5em;

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledP = styled.p`
  font-size: 1.2rem;
  font-family: ${(props) => props.subIntro && `Source Code Pro, monospace`};
  display: ${(props) => props.subIntro && "inline-block"};
  background: ${(props) => props.subIntro && "var(--clr-accent)"};
  padding: ${(props) => props.subIntro || (props.aboutP && ".25em 1em")};
  margin-bottom: ${(props) =>
    props.projectsP ? "1em" : props.homeP && ".5em"};

  @media (min-width: 600px) {
    align-self: ${(props) => props.subIntro && "start"};
    grid-column: ${(props) => props.subIntro && "-1 / 1"};
    grid-row: ${(props) => props.subIntro && "2"};
    text-align: ${(props) => props.subIntro && "right"};
    position: ${(props) => props.subIntro && "relative"};
    left: ${(props) => props.subIntro && "-1.5em"};
    width: ${(props) => props.subIntro && "calc(100% + 1.5em)"};
  }

  @media (min-width: 800px) {
    font-size: 1.6rem;
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
