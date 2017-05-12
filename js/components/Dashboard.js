import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, ListItem, Input,Button, List} from 'native-base';
import Navigation from './Navigation';

export default class Dashboard extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
            return (
              <Container>
                <Content>
                    <List style={{marginTop: 50}}>
                        <ListItem >
                            <Text>Densidade: {this.props.density}</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Ph:</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Brix:</Text>
                        </ListItem>
                    </List>
                    <Button style={{marginTop: 60, marginLeft: 120}} onPress={() => {
                       this.setModalVisible(true)
                     }}>
                        <Text>Aumentar Grau Brix</Text>
                    </Button>
                    <Modal
                      animationType={"fade"}
                      transparent={false}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {}}
                      >
                       <View style={{marginTop: 22}}>
                        <View>
                          <Text style={{marginLeft: 120}}>Quantos Grau Brix?</Text>
                          <Item regular>
                            <Input placeholder='Graus'/>
                          </Item>
                          <Button style={{marginTop: 60, marginLeft: 150}} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                          }}>
                              <Text>Finalizar</Text>
                          </Button>
                        </View>
                       </View>
                      </Modal>
                </Content>
                <Footer>
                <Navigation />
                </Footer>
            </Container>

            );
        }
    }

    const styles = StyleSheet.create({
      container: {
        marginTop: 50,

      }
    })
