import React, { Component } from "react";

export default class Contact extends Component {

    componentDidMount() {
        document.title = 'Contact';
    }

  render() {
    return (
      <div >
        <h2>Contact</h2>
        <div className="contact">
            <a href="https://github.com/robcg1102" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i> </a> 
            <a href="https://www.linkedin.com/in/roberto-carro/" target="_blank" rel="noopener noreferrer"><i class="ri-linkedin-box-fill"></i></a>
            <a href="mailto:robcg1102@gmail.com"> <i class="ri-mail-open-fill"></i> </a>
        </div>
      </div>
    );
  }
}
