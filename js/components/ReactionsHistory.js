import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Input,Button,List, ListItem} from 'native-base';

import Navigation from './Navigation';

export default class ReactionsHistory extends Component {
  render() {
      var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
            return (
              <Container>
                <Content>
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
