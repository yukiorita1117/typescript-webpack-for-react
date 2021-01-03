import * as React from "react";
import * as ReactDOM from "react-dom";
import { Sub } from "./sub";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Sub name="TypeScript-React-Webpack" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
