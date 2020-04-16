import React, { Component } from 'react';
import classes from './App.css';

import Blackboard from './containers/Blackboard/Blackboard';
import StudentBlackboad from './containers/StudentBlackboard/StudentBlacjboard';
import TextEditor from './containers/TextEditor/TextEditor';

import { Switch, Route } from 'react-router-dom';

import socketIOClient from 'socket.io-client';
import StudentTextEditor from './containers/StudentTextEditor/StudentTextEditor';

import TeacherApp from './apps/Teacher/Teacher';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = socketIOClient("http://127.0.0.1:7500");
  }
  
  render() {
    let routes = (
      <Switch>
        {/* <Route path="/" exact render={props => <Blackboard {...props} socket={this.socket} />} /> */}
        {/* <Route path="/student" exact render={props => <StudentBlackboad {...props} socket={this.socket} />} /> */}
        <Route path="/" exact render={props => <TeacherApp {...props} socket={this.socket} />} />
        <Route path="/student" exact render={props => <StudentTextEditor {...props} socket={this.socket} />} />
      </Switch>
    );


    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    );
  }
}

export default App;
