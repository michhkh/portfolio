import React from "react";
import { StyledMainContainer } from "./components/styles/Styles";

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <p style={{ color: "red" }}>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
