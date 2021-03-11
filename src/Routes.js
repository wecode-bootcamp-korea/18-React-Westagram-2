import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginYoojin from './Pages/yoojinkwon/Login/Login.js';
import MainYoojin from './Pages/yoojinkwon/Main/Main.js';

import LoginChanho from './Pages/chanhoyoon/login/login.js';
import MainChanho from './Pages/chanhoyoon/layout/AppLayout.js';
import Join from './Pages/chanhoyoon/join/Join.js'

import LoginJaewook from './Pages/jaewookjung/Login/Login.js';
import MainJaewook from './Pages/jaewookjung/Main/Main.js';
import LoginYoungkyun from './Pages/youngkyunkwon/Login/Login.js';
import MainYoungkyun from './Pages/youngkyunkwon/Main/Main.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-yoojin" component={LoginYoojin} />
          <Route exact path="/main-yoojin" component={MainYoojin} />
          <Route exact path="/login-chanho" component={LoginChanho} />
          <Route exact path="/main-chanho" component={MainChanho} />
          <Route exact path="/join-chanho" component={Join} />
          <Route exact path="/login-jaewook" component={LoginJaewook} />
          <Route exact path="/main-jaewook" component={MainJaewook} />
          <Route exact path="/login-youngkyun" component={LoginYoungkyun} />
          <Route exact path="/main-youngkyun" component={MainYoungkyun} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;