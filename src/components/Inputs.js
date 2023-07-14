import React, { Component } from "react";
class Inputs extends Component {
    constructor(props) {
        super(props);
    }
    handleEducationSubmit = (e) => {
        e.preventDefault();
        let obj ={
            school: e.target.school.value,
            study: e.target.study.value,
            start: e.target.startDateEducaion.value,
            end: e.target.endDateEducation.value,
            id: (Math.random() + 1).toString(36).substring(7)
        }
        this.props.addEducation(obj);
    }
    handleExperienceSubmit = (e) => {
        e.preventDefault();
        let obj ={
            company: e.target.company.value,
            position: e.target.position.value,
            jobDescribtion: e.target.jobDescribtion.value,
            start: e.target.StartDateJob.value,
            end: e.target.endDateJob.value,
            id: (Math.random() + 1).toString(36).substring(7)
        }
        this.props.addExperience(obj);
    }
    
  render() {
    return (
      <div className="inputs">
        <form className="inputForm">
        <h3>General information:</h3>
            <div>
                <label htmlFor="name">Your name:</label>
                <input type="text" id="name" name="name" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="adress">Adress:</label>
                <input type="text" id="adress" name="adress" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link" onChange={this.props.changeName} />
            </div>
        </form>
        <form className="inputForm" onSubmit={this.handleEducationSubmit}>
            <h3>Education:</h3>
            <div>
                <label htmlFor="school">School name:</label>
                <input type="text" id="school" name="school" />
            </div>
            <div>
                <label htmlFor="study">Title of study:</label>
                <input type="text" id="study" name="study" />
            </div>
            <div>
                <label htmlFor="startDateEducaion">Start date:</label>
                <input type="date" id="startDateEducaion" name="startDateEducaion" />
            </div>
            <div>
                <label htmlFor="endDateEducation">End date:</label>
                <input type="date" id="endDateEducation" name="endDateEducation" />
            </div>
            <button type="submit">Add</button>
        </form>
        <form className="inputForm" onSubmit={this.handleExperienceSubmit}>
            <h3>Experience:</h3>
            <div>
                <label htmlFor="company">Company name:</label>
                <input type="text" id="company" name="company" />
            </div>
            <div>
                <label htmlFor="position">Position title:</label>
                <input type="text" id="position" name="position" />
            </div>
            <div>
                <label htmlFor="jobDescribtion">Job desctiption:</label>
                <input type="text" id="jobDescribtion" name="jobDescribtion" />
            </div>
            <div>
                <label htmlFor="StartDateJob">Start date:</label>
                <input type="date" id="StartDateJob" name="StartDateJob" />
            </div>
            <div>
                <label htmlFor="endDateJob">End date:</label>
                <input type="date" id="endDateJob" name="endDateJob" />
            </div>
            <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default Inputs;
