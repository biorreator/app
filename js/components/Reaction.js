import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, Form, Input,Button,Icon} from 'native-base';
import Navigation from './Navigation';
import axios from '../config/axios';


export default class Reaction extends Component {
  constructor() {
      super()
      this.state = {
        id: '',
        startTime: '',
        status: '',
        title: '',
        volume: ''
      }
  }

  componentDidMount() {
    axios.get('https://b0cdcc49.ngrok.io/api/reactions/')
      .then(response => response.data)
          .then(reaction => {
            this.setState({ ...reaction[reaction.length-1]});
    })
      .catch(function (error) {
        alert(error);
    });
  }

  onSubmit = () => {
      this.goToDashboard();
  }

  goToDashboard = () => {
    Actions.dashboard({volume: this.state.volume , density: this.state.volume, volume: this.state.volume});
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
                            <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60}} onPress={this.onSubmit}>
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
