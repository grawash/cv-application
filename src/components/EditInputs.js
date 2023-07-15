import React, { Component } from "react";
import Inputs from "./Inputs";
class EditInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          school: this.props.school,
          study: this.props.study,
          startDateEducation: this.props.startDateEducation,
          endDateEducation: this.props.endDateEducation,
          link: this.props.link,
        };
      }
      handleEducationEdit = (e) => {
        e.preventDefault();
        let obj ={
            school: e.target.school.value,
            study: e.target.study.value,
            start: e.target.startDateEducation.value,
            end: e.target.endDateEducation.value,
            id: (Math.random() + 1).toString(36).substring(7)
        }
        this.props.editEducationHistory(obj, this.props.index);
      }
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
  render() {
    return (
      <>
        <form className="inputForm" onSubmit={this.handleEducationEdit}>
            <div>
                <label htmlFor="school">School name:</label>
                <input type="text" id="school" value={this.state.school} onChange={this.handleChange} name="school" />
            </div>
            <div>
                <label htmlFor="study">Title of study:</label>
                <input type="text" id="study" value={this.state.study} onChange={this.handleChange} name="study" />
            </div>
            <div>
                <label htmlFor="startDateEducation">Start date:</label>
                <input type="text" id="startDateEducation" value={this.state.startDateEducation} onChange={this.handleChange} name="startDateEducation" />
            </div>
            <div>
                <label htmlFor="endDateEducation">End date:</label>
                <input type="text" id="endDateEducation" value={this.state.endDateEducation} onChange={this.handleChange} name="endDateEducation" />
            </div>
            <div className="inputButtons" >
                <button type="submit" className="submitButton">Set</button>
            </div>
        </form>
      </>
    );
  }
}
export default EditInputs;
