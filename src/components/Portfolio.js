import React, { Component } from "react";

export default class Portfolio extends Component {

    componentDidMount() {
        document.title = 'Portfolio';
    }

  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="allProjects">
          <div className="cardProject">
            <a
              href="https://muerteink.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Muerte Ink - Landing Page</p>
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1598390493/portfolio/portfolio_MuerteInk_jr7mzt.gif"
                alt="MuerteInk"
              />
              <div className="cardTools">
                <p className="tools">React</p>
                <p className="tools">Javascript</p>
                <p className="tools">CSS</p>
                <p className="tools">HTML5</p>
                <p className="tools">Express</p>
                <p className="tools">Handlebars</p>
                <p className="tools">Nodemailer</p>
              </div>
            </a>
          </div>
          <div className="cardProject">
            <a
              href="https://mynba-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>NBA APP </p>
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1598390483/portfolio/portfolio_NBA_jpjqll.gif"
                alt="NBA-APP"
              />

              <div className="cardTools">
                <p className="tools">React</p>
                <p className="tools">Javascript</p>
                <p className="tools">CSS</p>
                <p className="tools">My own NBA-API</p>
                <p className="tools">Axios</p>
                <p className="tools">material-ui</p>
              </div>
            </a>
          </div>
          <div className="cardProject">
            <a
              href="https://mynba-api.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>NBA API </p>
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1598390485/portfolio/portfolio_APINBA_muxysl.gif"
                alt="NBA-API"
              />
              <div className="cardTools">
                <p className="tools">Javascript</p>
                <p className="tools">CSS</p>
                <p className="tools">HTML5</p>
                <p className="tools">Express</p>
                <p className="tools">Handlebars</p>
                <p className="tools">MongoDB</p>
              </div>
            </a>
          </div>
          <div className="cardProject">
            <a
              href="https://mywiki-countries.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Wiki Countries</p>
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1598390477/portfolio/portfolio_Wiki_oif2qm.gif"
                alt="WikiCountries"
              />
              <div className="cardTools">
                <p className="tools">React</p>
                <p className="tools">Javascript</p>
                <p className="tools">CSS</p>
                <p className="tools">Axios</p>
                <p className="tools">API REST Countries</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
