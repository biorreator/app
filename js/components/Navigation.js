import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Navigation extends Component {
  render() {
      const goToDashboard = () => Actions.dashboard();
      const goToReactionsHistory = () => Actions.reactionsHistory();
            return (
                        <FooterTab>
                            <Button vertical onPress={goToDashboard}>
                                <Icon active name="flask" />
                                <Text>Reação</Text>
                            </Button>
                            <Button vertical onPress={goToReactionsHistory}>
                                <Icon name="clock" />
                                <Text>Histórico</Text>
                            </Button>
                        </FooterTab>
            );
        }
    }
