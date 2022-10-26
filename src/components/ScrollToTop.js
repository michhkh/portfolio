import { useEffect } from "react";
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
};
