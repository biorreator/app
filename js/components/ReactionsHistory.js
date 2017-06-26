import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Input,Button,List, ListItem} from 'native-base';

import Navigation from './Navigation';

export default class ReactionsHistory extends Component {
  render() {
      var items = ['Reação 1','Reação 2','Reação 3','Reação 4','Reação 5'];
            return (
              <Container>
                <Content style={{ marginTop: 50}}>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
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
