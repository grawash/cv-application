import React, { Component } from "react";
import EditInputs from "./EditInputs";
class Edit extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className={this.props.expanded === true ? 'edit expanded' : "edit"}>

        <h3>Education history :</h3>
        {
            this.props.education.map((val,index) => {
                return(
                    <div key={val.id} className="infoContent">
                        <EditInputs index={index} school={val.school} study={val.study} startDateEducation={val.start} endDateEducation={val.end} editEducationHistory={this.props.editEducationHistory} />
                    </div> 
                ) 
            })
        }
      </div>
    );
  }
}
export default Edit;
