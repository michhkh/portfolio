import {
  StyledHome,
  StyledHomeImage,
  StyledHomeWrapper,
} from "../../components/styles/Styles";
import unnamed from "../../images/unnamed.jpg";
import "../../App.css";

export const Home = () => {
  return (
    <StyledHome>
      <h1>name</h1>
      <StyledHomeWrapper>
        <StyledHomeImage>
          <img src={unnamed} className="home-image" alt="image" />
        </StyledHomeImage>
        <div>
          <p>Working as intended</p>
          <button className="btn">My projects</button>
        </div>
      </StyledHomeWrapper>
    </StyledHome>
  );
};
