import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry } from 'react-native';


import Dashboard from './js/components/Dashboard';
import Reaction from './js/components/Reaction';
import ReactionsHistory from './js/components/ReactionsHistory';

export default class biorreatorApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="dashboard" component={Dashboard} title="Dashboard"  />
          <Scene key="reaction" component={Reaction} title="Criar Reação" initial={true}/>
          <Scene key="reactionsHistory" component={ReactionsHistory} title="Histórico" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('biorreatorApp', () => biorreatorApp);
