import React, { Component } from "react";

export default class Home extends Component {


  componentDidMount() {
    document.title = 'Home';
  }

  render() {
    return (
      <div className="App">
        <div class="animated-title">
          <div className="text-top">
            <div>
              <span>Roberto</span>
              <span>Carro Gastélum</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>Web developer</div>
          </div>
        </div>
      </div>
    );
  }
}
