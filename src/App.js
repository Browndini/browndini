import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-header">
          <div className="header-item name">Kyle Brown</div>
          <div className="navi header-item">
            <a href="https://www.linkedin.com/in/browndini" className="link" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
            <a href="https://github.com/Browndini" className="link" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://www.instagram.com/browndini" className="link" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com/Browndinii" className="link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
