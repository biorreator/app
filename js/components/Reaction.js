import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Form, Input,Button,Icon} from 'native-base';
import Navigation from './Navigation';


export default class Reaction extends Component {
  render() {
      const goToDashboard = () => Actions.dashboard({title: 'Reação 1', density:'2', volume:'4'});
            return (
              <Container >
                    <Content >
                        <Form style={{ marginTop: 50}}>
                            <Item floatingLabel>
                                <Label>Título</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Densidade</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Volume</Label>
                                <Input />
                            </Item>
                            <Button iconLeft style={{marginLeft: 100, marginTop: 10}} onPress={goToDashboard}>
                                <Icon name='flame' />
                                <Text>Iniciar reação</Text>
                            </Button>
                        </Form>
                    </Content>
                    <Footer>
                    <Navigation />
                    </Footer>
                </Container>
            );
        }
    }
