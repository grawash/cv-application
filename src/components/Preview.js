import React, { Component } from "react";
import evnelope from "./icons/envelope-solid.svg"
import github from "./icons/github.svg"
import phone from "./icons/phone-solid.svg"
import location from "./icons/location-dot-solid.svg"
import briefcase from "./icons/briefcase-solid.svg"
import graduation from "./icons/graduation-cap-solid.svg"
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
                        <div>
                            <img src={evnelope} alt="email" width="15" height="15" />
                            <p>{this.props.email}</p>
                        </div>
                        <div>
                            <img src={phone} alt="email" width="15" height="15" />
                            <p>{this.props.phone}</p>
                        </div>
                        <div>
                            <img src={location} alt="email" width="15" height="15" />
                            <p>{this.props.adress}</p>
                        </div>
                        <div>
                            <img src={github} alt="email" width="15" height="15" />
                            <p>{this.props.link}</p>
                        </div>
                    </div>
                </div>
                <div className="nameBorder"></div>
                <div className="education">
                    <div className="contentHeader">
                        <img src={graduation} alt="email" width="40" height="40" />
                        <h2>Education</h2>
                    </div>
                    <div className="hederLine"></div>
                    {!this.props.education.length && 
                        <div className="infoContent">
                            <div className="contentLeft">
                            <p>Harvard</p>
                            <p>Computer science</p>
                            </div>
                            <div className="contentRight">
                            <p>11/9/13</p>
                            <p>21/6/17</p>
                        </div>
                    </div>
                    }
                    {
                        this.props.education.map((val,index) => {
                            return(
                                <div key={val.id} className="infoContent">
                                    <div className="contentLeft">
                                        <p>{val.school}</p>
                                        <p>{val.study}</p>
                                    </div>
                                    <div className="contentRight">
                                        <p>{val.start}</p>
                                        <p>{val.end}</p>
                                    </div>
                                </div> 
                            ) 
                        })
                    }
                </div>
                <div className="experience">
                <div className="contentHeader">
                        <img src={briefcase} alt="email" width="40" height="40" />
                        <h2>Experience</h2>
                    </div>
                    <div className="hederLine"></div>
                    {!this.props.experience.length && 
                        <div className="infoContent">
                            <div className="contentLeft">
                            <p>google</p>
                            <p>web developer</p>
                            <p>build web applications using different tools and languages.</p>
                            </div>
                            <div className="contentRight">
                            <p>11/9/18</p>
                            <p>21/6/23</p>
                        </div>
                    </div>
                    }
                    {
                            this.props.experience.map((val,index) => {
                                return(
                                <div key={val.id} className="infoContent">
                                    <div className="contentLeft">
                                        <p>{val.company}</p>
                                        <p>{val.position}</p>
                                        <p>{val.jobDescription}</p>
                                    </div>
                                    <div className="contentRight">
                                        <p>{val.start}</p>
                                        <p>{val.end}</p>
                                    </div>
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
