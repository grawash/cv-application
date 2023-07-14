import React, { Component } from "react";
class Preview extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
        <div className="preview">
            <div className="resumeContainer">
                <div className="generalInfo">
                    <h1 className="previewName">{this.props.name}</h1>
                    <div className="contacts">
                        <p>{this.props.email}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.adress}</p>
                        <p>{this.props.link}</p>
                    </div>
                </div>
                    <div className="nameBorder"></div>
                <div className="education">
                    <h2>Education</h2>
                        {!this.props.education.length && 
                        <div >
                            <p>Harvard</p>
                            <p>Computer science</p>
                            <p>11/9/13</p>
                            <p>21/6/17</p>
                        </div>
                        }
                        {
                            this.props.education.map((val,index) => {
                                return(
                                    <div key={val.id}>
                                        <p>{val.school}</p>
                                        <p>{val.study}</p>
                                        <p>{val.start}</p>
                                        <p>{val.end}</p>
                                    </div>
                                ) 
                            })
                        }
                </div>
                <div className="experience">
                    <h2>Experience</h2>
                    {!this.props.experience.length && 
                        <div >
                            <p>google</p>
                            <p>web developer</p>
                            <p>build cuttion web applications using different tools and languages.</p>
                            <p>11/9/18</p>
                            <p>21/6/23</p>
                        </div>
                    }
                    {
                            this.props.experience.map((val,index) => {
                                return(
                                    <div key={val.id}>
                                        <p>{val.company}</p>
                                        <p>{val.position}</p>
                                        <p>{val.jobDescribtion}</p>
                                        <p>{val.start}</p>
                                        <p>{val.end}</p>
                                    </div>
                                ) 
                            })
                        }
                </div>
            </div>
        </div>
        );
    }
}
export default Preview;
