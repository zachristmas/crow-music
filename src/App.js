import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <React.Fragment>
    <br />
    <br />
    <h1>
      Home
  </h1>
    <br />
    <br />
  </React.Fragment>

)

const About = () => (
  <React.Fragment>
    <br />
    <br />
    <h1>
      About
  </h1>
    <br />
    <br />
  </React.Fragment>
)

const Code = () => (
  <React.Fragment>
    <br />
    <br />
    <h1>
      Code
    </h1>
    <br />
    <br />
  </React.Fragment>
)

const Contact = () => (
  <React.Fragment>
    <br />
    <br />
    <h1>
      Contact
    </h1>
    <br />
    <br />
  </React.Fragment>
)

const info = () => (
  <React.Fragment>
    <br />
    <br />
    <h1>
      info
    </h1>
    <br />
    <br />
  </React.Fragment>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/code">
        <button>code</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
      <Link to="/info">
        <button>info</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <marquee><h1 className="App-title">Welcome to the Machine</h1></marquee>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
