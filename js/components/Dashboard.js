import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, ListItem, Input,Button, List} from 'native-base';
import Navigation from './Navigation';

export default class Dashboard extends Component {
  constructor() {
      super()
      this.state = {
        modalVisible: false,
        brix: ''
      }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  validateBrix = (brix) => {
    var re = /^[0-9]+$/;
    return re.test(brix);
}

  updateBrix = (text) => {
    this.setState({brix: text})
  }

  onSubmit = () => {
    alert(this.state.brix)
    if(this.validateBrix(this.state.brix)) {
      this.setModalVisible(!this.state.modalVisible)
    }

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
                    <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60}} onPress={() => {
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
                            <Input placeholder='Graus'
                              onChangeText={this.updateBrix}
                              value={this.state.brix}
                            />
                          </Item>
                          <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60}} onPress={this.onSubmit}>
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
