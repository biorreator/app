import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, ListItem, Input,Button, List} from 'native-base';

export default class Dashboard extends Component {
  render() {
            return (
              <Container>
                <Content>
                    <List>
                        <ListItem >
                            <Text>{this.props.title}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{this.props.title}</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
            );
        }
    }

    const styles = StyleSheet.create({
      container: {
        marginTop: 50,

      }
    })
