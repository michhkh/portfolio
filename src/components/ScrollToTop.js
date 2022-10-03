import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StyledScrollButton } from "./styles/StyledElements";

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <StyledScrollButton
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      ^
    </StyledScrollButton>
  );

  // const { pathName } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathName]);

  // return null;
};
