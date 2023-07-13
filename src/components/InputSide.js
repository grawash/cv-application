import React, { Component } from "react";
import Inputs from "./Inputs";
class InputSide extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className="inputsSide">
        <Inputs changeName={this.props.changeName} />
      </div>
    );
  }
}
export default InputSide;
