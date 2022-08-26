import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="App-header">
      <div className="left-link">
        <Link to="/">Home</Link>
      </div>
      <div className="right-link">
        <Link to="/">Home2</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
