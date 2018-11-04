import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive';
import PageAdmin from '../PageAdmin/PageAdmin';

class App extends Component {

  componentDidMount(){
    //this.getFeedback();
  }
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route exact path="/" component={PageOne} />
        <Route path="/PageTwo" component={PageTwo} />
        <Route path="/PageThree" component={PageThree} />
        <Route path="/PageFour" component={PageFour} />
        <Route path="/PageFive" component={PageFive} />
        <Route path="/PageAdmin" component={PageAdmin} />
      </div>
      </Router>
    );
  }
}


export default connect()(App);
