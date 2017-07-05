import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Input,Button,List, ListItem} from 'native-base';
import axios from '../config/axios';

import Navigation from './Navigation';

export default class ReactionsHistory extends Component {
  constructor() {
      super()
      this.state = {
        reactions: []
      }
  }

  componentDidMount() {
    axios.get('https://biorreator.pagekite.me/api/reactions/')
      .then(response => response.data)
          .then(history => {
            this.setState({reactions: history});
    })
      .catch(function (error) {
        alert(error);
    });

  }
  render() {
      var items = this.state.reactions;
            return (
              <Container>
                <Content style={{ marginTop: 50}}>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item.title}</Text>
                                <Text>{item.startTime}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
                <Footer>
                <Navigation />
                </Footer>
            </Container>

            );
        }
    }
