import React, { Component } from "react";
import Inputs from "./Inputs";
class InputSide extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className="inputsSide">
        <Inputs changeName={this.props.changeName} addEducation={this.props.addEducation} addExperience={this.props.addExperience} handleEditClick={this.props.handleEditClick} />
      </div>
    );
  }
}
export default InputSide;
