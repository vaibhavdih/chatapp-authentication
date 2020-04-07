import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginAndSign from './components/LoginAndSign';
import Dashboard from './components/dashboard';
import Preference from './components/Preference';
import queryString from 'query-string';



class App extends Component {
  


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={LoginAndSign} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/preference" component={Preference} />



        </div>
      </Router>
    );
  }
}

export default App;
