import React, { Component } from "react";
import Inputs from "./Inputs";
class EditExperienceInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          company: this.props.company,
          position: this.props.position,
          jobDescription: this.props.jobDescription,
          StartDateJob: this.props.StartDateJob,
          endDateJob: this.props.endDateJob,
        };
      }
      handleExperienceEdit = (e) => {
        e.preventDefault();
        let obj ={
            company: e.target.company.value,
            position: e.target.position.value,
            jobDescription: e.target.jobDescription.value,
            start: e.target.StartDateJob.value,
            end: e.target.endDateJob.value,
            id: (Math.random() + 1).toString(36).substring(7)
        }
        this.props.editExperienceHistory(obj, this.props.index);
      }
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
  render() {
    return (
      <>
        <form className="inputForm" onSubmit={this.handleExperienceEdit}>
            <div>
                <label htmlFor="company">Company name:</label>
                <input type="text" id="company" value={this.state.company} onChange={this.handleChange} name="company" />
            </div>
            <div>
                <label htmlFor="position">Position title:</label>
                <input type="text" id="position" value={this.state.position} onChange={this.handleChange} name="position" />
            </div>
            <div>
                <label htmlFor="jobDescription">Job desctiption:</label>
                <input type="text" id="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} name="jobDescription" />
            </div>
            <div>
                <label htmlFor="StartDateJob">Start date:</label>
                <input type="text" id="StartDateJob" value={this.state.StartDateJob} onChange={this.handleChange} name="StartDateJob" />
            </div>
            <div>
                <label htmlFor="endDateJob">End date:</label>
                <input type="text" id="endDateJob" value={this.state.endDateJob} onChange={this.handleChange} name="endDateJob" />
            </div>
            <div className="inputButtons" >
                <button type="submit" className="submitButton">Set</button>
            </div>
        </form>
      </>
    );
  }
}
export default EditExperienceInputs;
