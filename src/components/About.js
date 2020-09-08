import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p className="aboutB">
          I am a web developer from CDMX, México. I am passionate about IT
          focused on social causes, I am very interested in working with
          companies that make digital tools aimed at the same and that allow me
          to acquire more experience as a web developer.
        </p>
        <div className="cardAllTools">
          <div className="cardTools">
            <p className="tools">React</p>
            <p className="tools">Javascript</p>
            <p className="tools">CSS</p>
            <p className="tools">HTML5</p>
            <p className="tools">Express</p>
            <p className="tools">Bootstrap</p>
            <p className="tools">MongoDB</p>
            <p className="tools">EMMET</p>
            <p className="tools">Git/Gihub</p>
          </div>
        </div>
      </div>
    );
  }
}
