import React, { Component } from "react";
class Preview extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
        <div className="preview">
            <div className="resumeContainer">
                <h1>{this.props.name}</h1>
                <p>education</p>
                <p>jobs</p>
            </div>
        </div>
        );
    }
}
export default Preview;
