import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../stylesheets/App.scss';
import HomePage from './ui/HomePage';
import AboutPage from './ui/AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => (
        <HomePage />
      )}/>
      <Route exact path="/about-me" render={() => (
        <AboutPage />
      )}/>
      </div>
    );
  }
}

export default App;
