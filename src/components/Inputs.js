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
            start: e.target.startDateEducation.value,
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
                <input type="text" id="name" name="name" placeholder="John Doe" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="something@somewhere.com" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="phone">Phone number:</label>
                <input type="text" id="phone" name="phone" placeholder="(123) 456-7891" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="adress">Adress:</label>
                <input type="text" id="adress" name="adress" placeholder="New york, NY" onChange={this.props.changeName} />
            </div>
            <div>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" name="link" placeholder="github.com/..." onChange={this.props.changeName} />
            </div>
        </form>
        <form className="inputForm" onSubmit={this.handleEducationSubmit}>
            <h3>Education:</h3>
            <div>
                <label htmlFor="school">School name:</label>
                <input type="text" id="school" name="school" placeholder="New york, NY" />
            </div>
            <div>
                <label htmlFor="study">Title of study:</label>
                <input type="text" id="study" name="study" placeholder="Computer science" />
            </div>
            <div>
                <label htmlFor="startDateEducation">Start date:</label>
                <input type="text" id="startDateEducation" placeholder="2023-07-15" name="startDateEducation" />
            </div>
            <div>
                <label htmlFor="endDateEducation">End date:</label>
                <input type="text" id="endDateEducation" placeholder="2023-07-15" name="endDateEducation" />
            </div>
            <div className="inputButtons" >
                <button type="submit" className="submitButton">Add</button>
                <button type="button" onClick={() => this.props.handleEditClick('education')} className="submitButton">Edit</button>    
            </div>
        </form>
        <form className="inputForm" onSubmit={this.handleExperienceSubmit}>
            <h3>Experience:</h3>
            <div>
                <label htmlFor="company">Company name:</label>
                <input type="text" id="company" name="company" placeholder="Google" />
            </div>
            <div>
                <label htmlFor="position">Position title:</label>
                <input type="text" id="position" name="position" placeholder="Web developer" />
            </div>
            <div>
                <label htmlFor="jobDescribtion">Job desctiption:</label>
                <input type="text" id="jobDescribtion" name="jobDescribtion" placeholder="build web applications using different tools and languages." />
            </div>
            <div>
                <label htmlFor="StartDateJob">Start date:</label>
                <input type="text" id="StartDateJob" placeholder="2023-07-15" name="StartDateJob" />
            </div>
            <div>
                <label htmlFor="endDateJob">End date:</label>
                <input type="text" id="endDateJob" placeholder="2023-07-15" name="endDateJob" />
            </div>
            <div className="inputButtons" >
                <button type="submit" className="submitButton">Add</button>
                <button type="button" onClick={() => this.props.handleEditClick('experience')} className="submitButton">Edit</button>    
            </div>
        </form>
      </div>
    );
  }
}
export default Inputs;
