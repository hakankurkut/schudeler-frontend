import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Switch, Route } from 'react-router-dom';
import Schudele from './views/schudele';
import Events from './views/events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Schudele />} />
          <Route exact path='/events' render={() => <Events />} />
        </Switch>

      </div>
    );
  }
}

export default App;
