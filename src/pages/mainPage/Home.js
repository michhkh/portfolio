import {
  StyledHeader,
  StyledHome,
  StyledHomeImage,
  StyledHomeWrapper,
} from "../../components/styles/Styles";
import marc from "../../images/marc-mintel-1iYTusNPlSk-unsplash.jpg";
import "../../App.css";

export const Home = () => {
  return (
    <StyledHome>
      <StyledHeader>Michael</StyledHeader>

      <StyledHomeWrapper>
        <div>
          <StyledHomeImage img src={marc} className="home-image" alt="image" />
        </div>
        <div>
          <p>Working as intended</p>
          <button className="btn">My projects</button>
        </div>
      </StyledHomeWrapper>
    </StyledHome>
  );
};
