import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { AppRegistry } from 'react-native';
import {Platform} from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

import Dashboard from './js/components/Dashboard';
import Reaction from './js/components/Reaction';
import ReactionsHistory from './js/components/ReactionsHistory';

export default class biorreatorApp extends Component {
  componentDidMount() {
        FCM.getFCMToken().then(token => {
            console.log(token)
            alert(token)
            // run `react-native log-android` to get device token
        });
        this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
            // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
              FCM.presentLocalNotification({
                id:  Math.floor(Math.random()*20),                               // (optional for instant notification)
                title: notif['key1'],                     // as FCM payload
                body: notif['key1'],                    // as FCM payload (required)
                sound: "default",                                   // as FCM payload
                priority: "high",                                   // as FCM payload                                        // as FCM payload IOS only, set 0 to clear badges
                ticker: "My Notification Ticker",                   // Android only
                auto_cancel: true,                                  // Android only (default true)
                large_icon: "ic_launcher",                           // Android only
                icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
                color: "red",                                       // Android only
                vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
                tag: 'some_tag',                                    // Android only
                group: "group",                                     // Android only
                picture: "https://google.png",                      // Android only bigPicture style
                lights: true,                                       // Android only, LED blinking (default false)
                show_in_foreground: true                                  // notification when app is in foreground (local & remote)
              });
        });
        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
            console.log(token)
            // fcm token may not be available on first load, catch it here
        });
    }

    componentWillUnmount() {
        // stop listening for events
        this.notificationListener.remove();
        this.refreshTokenListener.remove();
    }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="dashboard" component={Dashboard} title="Dashboard" animation="fade"/>
          <Scene key="reaction" component={Reaction} title="Criar Reação" initial={true}/>
          <Scene key="reactionsHistory" component={ReactionsHistory} title="Histórico" animation="fade"/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('biorreatorApp', () => biorreatorApp);
