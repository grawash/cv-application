import React, { Component } from "react";
import InputSide from "./components/InputSide";
import Preview from "./components/Preview";
import Edit from "./components/Edit";
import './styles/style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      email: 'something@somewhere.com',
      phone: '(123) 456-7891',
      adress: 'New york, NY',
      link: 'github.com/...',
      education: [],
      experience: [],
      isExpanded: false,
      editTopic: '',
    };
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.editEducationHistory = this.editEducationHistory.bind(this);


  }
  changeValue = (e) => {
    let key = e.target.name
    this.setState(
      {
        [key]: e.target.value,
      }
    )
  }
  addEducation(obj){
    this.setState(
      {
        education: this.state.education.concat(obj),
      }
    )
    console.log(this.state.education);
  }
  addExperience(obj){
    this.setState(
      {
        experience: this.state.experience.concat(obj),
      }
    )
    console.log(this.state.experience);
    console.log(this.state.education);

  }
  handleEditClick(val){
    console.log(this.state.editTopic);
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
      editTopic: val,
    }));
  }
  editEducationHistory = (obj, index) => {
    this.setState(prevState => {
        const updatedItems = [...prevState.education];
        updatedItems[index] = obj;
        return{education: updatedItems}
      }
    )
  }
  editExperienceHistory = (obj, index) => {
    this.setState(prevState => {
        const updatedItems = [...prevState.experience];
        updatedItems[index] = obj;
        return{experience: updatedItems}
      }
    )
  }
  render() {
    return (
      <div className="generalContainer">
        <InputSide changeName={this.changeValue} addEducation={this.addEducation} addExperience={this.addExperience} handleEditClick={this.handleEditClick} />
        <Edit 
        expanded={this.state.isExpanded} 
        editTopic={this.state.editTopic}
        education={this.state.education}
        experience={this.state.experience}
        editEducationHistory={this.editEducationHistory}
        editExperienceHistory={this.editExperienceHistory}
         />
        <Preview 
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        adress={this.state.adress}
        link={this.state.link}
        education={this.state.education}
        experience={this.state.experience}

          />

      </div>
    );
  }
}
export default App;
