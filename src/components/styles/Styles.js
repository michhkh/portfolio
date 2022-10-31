import styled from "styled-components";
import { TextAndContent } from "../../textAndContent/TextAndContent";

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

export const StyledSection = styled.section`
  width: 85%;
  padding: 1em 0 2em;
  line-height: 1.2;

  margin: auto auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    line-height: 1.6;
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

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledHomeWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 768px) {
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
  margin-top: ${(props) => (props.homeA ? "1.25em" : "0")};
  font-size: 0.8rem;
  color: ${(props) => props.projectsA && "transparent"};
  width: ${(props) => props.projectsA && "100%"};
  padding: ${(props) => props.projectsA && "35% 20%"};

  &:hover {
    opacity: ${(props) => props.projectsA && "0.85"};
    color: ${(props) => props.projectsA && "#fff"};
    font-weight: ${(props) => props.projectsA && "bold"};
    border: ${(props) => props.projectsA && "2px solid #fff"};
    filter: ${(props) => props.projectsA && "drop-shadow(7px 1px 4px black)"};
    background-color: ${(props) => props.projectsA && "#000"};
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    padding: ${(props) => props.projectsA && "30% 20%"};
  }
`;

export const StyledImage = styled.img`
  max-width: ${(props) =>
    props.aboutImg ? "20%" : props.projectsImg ? "5%" : "75%"};
  margin-top: ${(props) => props.homeImg && "2em"};
  width: ${(props) => props.projectsImg && "100%"};
  filter: ${(props) =>
    props.python && "drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.29))"};

  @media screen and (min-width: 768px) {
    max-width: ${(props) =>
      props.aboutImg ? "19%" : props.projectsImg ? "65%" : "25%"};
  }

  @media screen and (min-width: 1200px) {
    max-width: ${(props) => props.aboutImg && "15%"};
  }
`;

export const StyledHomeImage = styled.img`
  min-width: 150px;
  max-width: 250px;
  width: 45%;
  border-radius: 2em;

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

export const StyledBgStyling = styled.div`
  background: ${(props) =>
    props.aboutStyling
      ? "rgba(255, 255, 255, 0.29)"
      : props.homeStyling
      ? "rgba(255, 255, 255, 0.29)"
      : props.firstProject
      ? `url(${TextAndContent.projectsPage.projectImage1})`
      : props.secondProject
      ? `url(${TextAndContent.projectsPage.projectImage2})`
      : props.thirdProject
      ? `url(${TextAndContent.projectsPage.projectImage3})`
      : props.fourthProject
      ? `url(${TextAndContent.projectsPage.projectImage4})`
      : props.fifthProject
      ? `url(${TextAndContent.projectsPage.projectImage5})`
      : props.sixthProject
      ? `url(${TextAndContent.projectsPage.projectImage6})`
      : `rgba(255, 255, 255, 0.29)`};
  background-size: cover;
  background-position: 5% 30%;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: ${(props) =>
    props.aboutStyling
      ? "blur(0px)"
      : props.homeStyling
      ? "blur(0px)"
      : props.projectsStyling
      ? null
      : "blur(0.5px)"};
  -webkit-backdrop-filter: ${(props) =>
    props.aboutStyling
      ? "blur(0px)"
      : props.homeStyling
      ? "blur(0px)"
      : props.projectsStyling
      ? null
      : "blur(0.5px)"};
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
      ? "3em 3.5em"
      : props.projectsStyling
      ? "0"
      : "1em 1.25em"};
  width: ${(props) =>
    props.aboutStyling ? "90%" : props.homeStyling ? "40%" : "100%"};
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
      ? "0 1em 4em"
      : props.aboutStyling
      ? "1em auto"
      : props.homeStyling && "4em 0 0"};

  @media screen and (min-width: 768px) {
    padding: ${(props) =>
      props.aboutStyling
        ? "2em 1em"
        : props.homeStyling
        ? "4em"
        : props.projectsStyling
        ? "0"
        : "4em 2em"};
    width: ${(props) =>
      props.homeStyling ? "40%" : props.projectsStyling && "65%"};
    background-position: 20% 5%;
  }

  &:hover {
    opacity: ${(props) => props.projectsStyling && "0.9"};
    transform: ${(props) => props.projectsStyling && "scale(1.1)"};
    filter: ${(props) =>
      props.projectsStyling && "drop-shadow(2px 12px 22px #fff)"};
  }
`;

export const StyledProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledDiv = styled.div`
  width: ${(props) =>
    props.projectsDiv
      ? "50%"
      : props.aboutTextDiv
      ? "100%"
      : props.aboutDiv && "60%"};
  margin: ${(props) => (props.aboutTextDiv ? "0 auto" : "2em auto")};
  display: ${(props) =>
    props.projectsDiv ? "flex" : props.aboutDiv && "flex"};
  flex-direction: ${(props) =>
    props.projectsDiv ? "column" : props.aboutDiv && "row"};
  align-items: ${(props) =>
    props.projectsDiv ? "center" : props.aboutDiv && "center"};
  justify-content: ${(props) =>
    props.projectsDiv ? "space-between" : props.aboutDiv && "space-evenly"};
  line-height: ${(props) => props.aboutTextDiv && "1.4"};

  @media screen and (min-width: 400px) {
    line-height: ${(props) => props.aboutTextDiv && "1.6"};
  }

  @media screen and (min-width: 768px) {
    flex-direction: ${(props) => props.projectsDiv && "row"};
    width: ${(props) =>
      props.aboutTextDiv
        ? "58%"
        : props.projectsDiv
        ? "90%"
        : props.aboutDiv && "40%"};
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
