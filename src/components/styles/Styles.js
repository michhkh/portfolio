import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";
import { InitialStyle } from "./InitialStyling";

export const StyledMainPageContainer = styled.div`
  margin: 0;
  padding: 0;
  background: #012a4a;
  color: white;
  text-align: center;
  font-family: var(--ff-secondary);
`;

export const StyledMainPageWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export const StyledHome = styled.div`
  width: 15%;
  max-width: 150px;
  height: 8vh;
  transform: ${(props) =>
    props.yes ? "rotate(0.443turn)" : "rotate(0.015turn)"};

  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.2px);
  -webkit-backdrop-filter: blur(1.2px);
  border: 1px solid rgba(255, 255, 255, 0.26);
  left: ${(props) =>
    props.left ? "10%" : props.right ? "76%" : props.middle && "45%"};
  top: ${(props) => (props.top ? "6em" : props.bottom && "45em")};
  position: absolute;
  opacity: ${(props) => props.yes && "0.27"};

  @media screen and (min-width: 600px) {
    height: 12vh;
    left: ${(props) =>
      props.left ? "10%" : props.right ? "80%" : props.middle && "45%"};
    top: ${(props) => (props.top ? "6em" : props.bottom && "40em")};
  }
`;

export const StyledSection = styled.section`
  width: 85%;
  padding: 1em 0 2em;
  position: ${(props) => props.intro && "relative"};
  line-height: 1.6;

  background: ${(props) => props.glass && "rgba(22, 224, 189, 0.04)"};
  border-radius: ${(props) => props.glass && "16px"};
  box-shadow: ${(props) => props.glass && "0 4px 30px rgba(0, 0, 0, 0.1)"};
  backdrop-filter: ${(props) => props.glass && "blur(4.7px)"};
  -webkit-backdrop-filter: ${(props) => props.glass && "blur(4.7px)"};
  border: ${(props) => props.glass && "1px solid rgba(22, 224, 189, 0.12)"};
  width: ${(props) => props.aboutTest && "70%"};
  margin: auto auto;
  height: 100vh;

  @media (min-width: 600px) {
    display: ${(props) => props.intro && "grid"};
    width: ${(props) => props.intro && "min-content"};
    margin: ${(props) => props.intro && "0 auto"};
    grid-column-gap: ${(props) => props.intro && "1em"};
    grid-template-areas: ${(props) =>
      props.intro && `"img title" "img subtitle"`};
    grid-template-columns: ${(props) =>
      props.intro && "min-content max-content"};
  }
`;

export const StyledBg = styled.div`
  background: ${(props) =>
    props.projectBg ? "#013A63" : props.aboutBg && "#01497C"};
`;

export const StyledHomeContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 60vh;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */

  @media (min-width: 600px) {
    width: 100%;
    /* flex-direction: row;
    justify-content: flex-start; */
  }
`;

export const StyledHomeWrapper = styled.div`
  width: 100%;
  height: 62vh;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 600px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledHomeDiv = styled.div`
  margin-top: 2em;
`;

export const StyledA = styled.a`
  margin-top: ${(props) => (props.homeA ? "1.5em" : "0")};
  font-size: 1.2rem;
  color: ${(props) => props.projectsA && "#013A63"};
`;

export const StyledImage = styled.img`
  max-width: ${(props) =>
    props.aboutImg ? "15%" : props.projectsImg ? "100%" : "75%"};
  margin-top: ${(props) => props.homeImg && "2em"};
  width: ${(props) => props.projectsImg && "100%"};

  @media screen and (min-width: 600px) {
    max-width: ${(props) => (props.aboutImg ? "15%" : "25%")};
  }
`;

export const StyledHomeImage = styled.img`
  max-width: 45%;
  border-radius: 2em;
  z-index: 10;

  @media (min-width: 600px) {
    max-width: 25%;
  }
`;

export const StyledBgStyling = styled.div`
  background: ${(props) =>
    props.aboutStyling
      ? "rgba(255, 255, 255, 0.29)"
      : props.homeStyling
      ? "rgba(255, 255, 255, 0.29)"
      : "rgba(22, 224, 189, 0.54)"};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: ${(props) =>
    props.aboutStyling
      ? "blur(1.2px)"
      : props.homeStyling
      ? "blur(1.2px)"
      : "blur(2.5px)"};
  -webkit-backdrop-filter: ${(props) =>
    props.aboutStyling
      ? "blur(1.2px)"
      : props.homeStyling
      ? "blur(1.2px)"
      : "blur(2.5px)"};
  border: ${(props) =>
    props.aboutStyling
      ? "1px solid rgba(255, 255, 255, 0.26)"
      : props.homeStyling
      ? "1px solid rgba(255, 255, 255, 0.26)"
      : "1px solid rgba(22, 224, 189, 0.24)"};
  opacity: ${(props) =>
    props.aboutStyling ? "0.88" : props.homeStyling ? "0.92" : "1"};
  padding: ${(props) =>
    props.aboutStyling
      ? ".25em 1em"
      : props.homeStyling
      ? "1em 2.5em"
      : "2em 1em"};
  width: ${(props) =>
    props.aboutStyling ? "90%" : props.homeStyling ? "40%" : "60%"};
  display: flex;
  flex-direction: ${(props) =>
    props.aboutStyling ? "column" : props.homeStyling ? "column" : "row"};
  align-items: ${(props) =>
    props.homeStyling ? "center" : props.projectsStyling && "space-evenly"};
  justify-content: ${(props) =>
    props.homeStyling ? "center" : props.projectsStyling && "center"};
  margin: ${(props) =>
    props.leftStyling
      ? "0 0 2em"
      : props.rightStyling
      ? "0 0 8em"
      : props.projectsStyling
      ? "0 1em 2em"
      : props.aboutStyling
      ? "1em auto"
      : props.homeStyling && "0"};

  @media (min-width: 600px) {
    padding: ${(props) =>
      props.aboutStyling ? "1em" : props.homeStyling ? ".25em" : "4em 2em"};
    width: ${(props) => props.homeStyling && "40%"};
  }
`;

export const StyledProjectsContainer = styled.div`
  width: 100%;
`;

export const StyledDiv = styled.div`
  width: ${(props) =>
    props.projectsDiv
      ? "90%"
      : props.aboutTextDiv
      ? "90%"
      : props.aboutDiv && "60%"};
  margin: ${(props) => (props.aboutTextDiv ? "0 auto" : "2em auto")};
  display: ${(props) =>
    props.projectsDiv ? "flex" : props.aboutDiv && "flex"};
  flex-direction: ${(props) =>
    props.projectsDiv ? "column" : props.aboutDiv && "row"};
  align-items: ${(props) =>
    props.projectsDiv ? "center" : props.aboutDiv && "center"};
  justify-content: ${(props) =>
    props.projectsDiv ? "center" : props.aboutDiv && "space-evenly"};

  @media screen and (min-width: 600px) {
    flex-direction: ${(props) => props.projectsDiv && "row"};
    width: ${(props) => props.aboutTextDiv && "58%"};
  }
`;

export const StyledProjectsDiv = styled.div`
  width: 90%;
  margin: auto auto;
  display: flex;
  justify-content: center;
`;

export const StyledAboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledAboutWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
