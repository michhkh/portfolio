import "./App.css";
import { InitialStyle } from "./components/styles/InitialStyling";
import MainPage from "./pages/MainPage";
import MyErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <MyErrorBoundary>
        <InitialStyle />
        <MainPage />
      </MyErrorBoundary>
    </>
  );
}

export default App;
