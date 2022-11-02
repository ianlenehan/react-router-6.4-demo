import { Link } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="center">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Router Demo</h1>

      <Link to="users">Users Page</Link>
    </div>
  );
}

export default App;
