import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Form, Input,Button,Icon} from 'native-base';
import Navigation from './Navigation';


export default class Reaction extends Component {
  constructor() {
      super()
      this.state = {
        reactionTitle: '',
        density: '',
        volume: ''
      }
  }

  updateTitle = (text) => {
    this.setState({reactionTitle: text})
  }

  updateDesinty = (text) => {
    this.setState({density: text})
  }

  updateVolume = (text) => {
    this.setState({volume: text})
  }

  onSubmit = () => {
    if (!this.validateForm()) {
      this.goToDashboard()
    }
    else {
      alert("Preencha os campos em branco")
    }
  }

  goToDashboard = () => {
    Actions.dashboard({reactionTitle: this.state.reactionTitle ,density: this.state.density, volume: this.state.reactionTitle});
  }

  validateForm = () => {
    if (this.state.reactionTitle === '' || this.state.density === '' || this.state.volume === '') {
      return false
    }
    else {
      return true
    }
  }

  render() {
            return (
              <Container >
                    <Content >
                        <Form style={{ marginTop: 50}}>
                            <Item floatingLabel>
                                <Label>Título</Label>
                                <Input
                                  onChangeText = {this.updateTitle}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Densidade</Label>
                                <Input
                                  onChangeText = {this.updateDesinty}
                                 />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Volume</Label>
                                <Input
                                  onChangeText = {this.updateVolume}
                                />
                            </Item>
                            <Button iconLeft style={{marginLeft: 100, marginTop: 10}} onPress={this.onSubmit}>
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
