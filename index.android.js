import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry } from 'react-native';


import PageOne from './js/components/PageOne';
import PageTwo from './js/components/PageTwo';

export default class biorreatorApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('biorreatorApp', () => biorreatorApp);
