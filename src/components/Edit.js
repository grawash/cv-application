import React, { Component } from "react";
import EditEducationInputs from "./EditEducationInputs";
import EditExperienceInputs from "./EditExperienceInputs";

class Edit extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className={this.props.expanded === true ? 'edit expanded' : "edit"}>
        {this.props.editTopic === "education" && 
            <h3 className="editHeader">Education history :</h3>
        }
        {this.props.editTopic === "education" && 
            this.props.education.map((val,index) => {
                return(
                    <div key={val.id} className="infoContent">
                        <EditEducationInputs index={index} school={val.school} study={val.study} startDateEducation={val.start} endDateEducation={val.end} editEducationHistory={this.props.editEducationHistory} />
                    </div> 
                ) 
            })
        }
        {this.props.editTopic === "experience" && 
            <h3 className="editHeader">Working experience :</h3>
        }
        {this.props.editTopic === "experience" && 
            this.props.experience.map((val,index) => {
                return(
                    <div key={val.id} className="infoContent">
                        <EditExperienceInputs index={index} company={val.company} position={val.position} jobDescription={val.jobDescription} StartDateJob={val.start} endDateJob={val.end} editExperienceHistory={this.props.editExperienceHistory} />
                    </div> 
                ) 
            })
        }


      </div>
    );
  }
}
export default Edit;
