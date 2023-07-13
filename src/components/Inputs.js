import React, { Component } from "react";
class Inputs extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className="inputs">
        <form className="inputForm">
        <h3>General information:</h3>
            <div>
                <label for="name">Your name:</label>
                <input type="text" id="name" name="name" onChange={this.props.changeName} />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label for="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" />
            </div>
            <div>
                <label for="adress">Adress:</label>
                <input type="text" id="adress" name="adress" />
            </div>
            <div>
                <label for="link">Link:</label>
                <input type="text" id="link" name="link" />
            </div>
        </form>
        <form className="inputForm">
        <h3>Education:</h3>
            <div>
                <label for="school">School name:</label>
                <input type="text" id="school" name="school" />
            </div>
            <div>
                <label for="study">Title of study:</label>
                <input type="text" id="study" name="study" />
            </div>
            <div>
                <label for="startDateEducaion">Start date:</label>
                <input type="date" id="startDateEducaion" name="startDateEducaion" />
            </div>
            <div>
                <label for="endDateEducation">End date:</label>
                <input type="date" id="endDateEducation" name="endDateEducation" />
            </div>
        </form>
        <form className="inputForm">
        <h3>Experience:</h3>
            <div>
                <label for="company">Company name:</label>
                <input type="text" id="company" name="company" />
            </div>
            <div>
                <label for="position">Position title:</label>
                <input type="text" id="position" name="position" />
            </div>
            <div>
                <label for="jobDescribtion">Job desctiption:</label>
                <input type="text" id="jobDescribtion" name="jobDescribtion" />
            </div>
            <div>
                <label for="StartDateJob">Start date:</label>
                <input type="date" id="StartDateJob" name="StartDateJob" />
            </div>
            <div>
                <label for="endDateJob">End date:</label>
                <input type="date" id="endDateJob" name="endDateJob" />
            </div>
        </form>
      </div>
    );
  }
}
export default Inputs;
