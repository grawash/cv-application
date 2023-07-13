import React, { Component } from "react";
import InputSide from "./components/InputSide";
import Preview from "./components/Preview";
class App extends Component {
  render() {
    return (
      <div>
        <InputSide />
        <Preview />
      </div>
    );
  }
}
export default App;
