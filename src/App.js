import React, { Component } from "react";
import InputSide from "./components/InputSide";
import Preview from "./components/Preview";
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
    };
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);

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
  render() {
    return (
      <div className="generalContainer">
        <InputSide changeName={this.changeValue} addEducation={this.addEducation} addExperience={this.addExperience} />
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
