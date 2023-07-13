import React, { Component } from "react";
import InputSide from "./components/InputSide";
import Preview from "./components/Preview";
import './styles/style.css'
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'John Doe',
      task: { text: ''},
      tasks: [],
    };
  }
  changeName = (e) => {
    this.setState(
      {
        name: e.target.value,
      }
    )
  }
  render() {
    return (
      <div className="generalContainer">
        <InputSide changeName={this.changeName} />
        <Preview name={this.state.name}  />
      </div>
    );
  }
}
export default App;
