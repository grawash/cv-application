import React, { Component } from "react";
import InputSide from "./components/InputSide";
import Preview from "./components/Preview";
import './styles/style.css'
class App extends Component {
  render() {
    return (
      <div className="generalContainer">
        <InputSide />
        <Preview />
      </div>
    );
  }
}
export default App;
