import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, ListItem, Input,Button, List, Badge, Picker} from 'native-base';
import Navigation from './Navigation';
import { StockLine } from 'react-native-pathjs-charts'
import axios from '../config/axios';

export default class Dashboard extends Component {
  constructor() {
      super()
      this.state = {
        modalVisible: false,
        brix: '',
        density: '',
        id: '',
        ph: '',
        reactionId: '',
        temperature:'',
        time: '',
        data: [],
        loading: true
      }
  }

  componentDidMount() {
    axios.get('https://b0cdcc49.ngrok.io/api/reactions/881ba792-1ee8-422a-8d7c-a4fd44eff703/measures/')
      .then(response => response.data)
          .then(measure => {
            this.setState({ ...measure[0]});
            console.log(measure[measure.length-1]);
            temperature = this.state.temperature.toFixed(2);
            density = this.state.density.toFixed(3);
            this.setState({temperature: temperature, density: density});
    }).then (
      axios.get('https://b0cdcc49.ngrok.io/api/reactions/881ba792-1ee8-422a-8d7c-a4fd44eff703/measures/graph')
        .then(response => response.data)
          .then(data => {
            this.setState({data: data});
            console.log(this.state.data);
            console.log(this.state.data.length);
          })
          .catch(function (error) {
            alert(error);
        })
    )
      .catch(function (error) {
        alert(error);
    });

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  turnMotor(action) {
    axios.post('https://b0cdcc49.ngrok.io/api/turnon', {
      mode: action,
      port: 17
    })
  }

  turnPump(action) {
    axios.post('https://b0cdcc49.ngrok.io/api/turnon', {
      mode: action,
      port: 22
    })
  }

  validateBrix = (brix) => {
    var re = /^[0-5]+$/;
    return re.test(brix);
}

  updateBrix = (text) => {
    this.setState({brix: text})
  }

  onSubmit = () => {
    if(this.validateBrix(this.state.brix)) {
      this.setModalVisible(!this.state.modalVisible)
      axios.post('https://b0cdcc49.ngrok.io/api/turnon', {
        mode: 'on',
        port: 27
      })
    } else {
      alert("Aumente de 1 a 5 graus brix")
    }
  }

  closeModal = () => {
    this.setModalVisible(!this.state.modalVisible)
  }


  render() {
  let data = this.state.data;
  let options = {
    width: 300,
    height: 200,
    color: '#000000',
    margin: {
      top: 100,
      left: 50,
      bottom: 30,
      right: 10
    },
    animate: {
      type: 'delayed',
      duration: 2000
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      tickValues: [],
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      tickValues: [],
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  }
  if(this.state.data.length === 0 ){
    return (
       <ActivityIndicator size={60} color="#21ba57" style={styles.activity} />
    )
  }
  else {
            return (
              <Container>
                <Content>
                <View>
                <StockLine data={data} options={options} xKey='x' yKey='y' />
                </View>
                <View style={{flexDirection: 'row'}}>
                <View>
                    <List style={{marginLeft: 20, width: 150 }}>
                        <ListItem  style={{borderBottomWidth: 0}}>
                            <Text>Densidade: {this.state.density + " kg/m³"} </Text>
                        </ListItem>
                        <ListItem style={{borderBottomWidth: 0}}>
                            <Text>Ph: {this.state.ph}</Text>
                        </ListItem>
                        <ListItem style={{borderBottomWidth: 0}}>
                            <Text> Grau Brix: {this.state.brix + " ºBx"} </Text>
                        </ListItem>
                    </List>
                    </View>
                    <View>
                        <Badge style={{width: 90, height: 90, borderRadius: 50, marginLeft: 80, marginTop: 40}}>
                          <Text style={{marginTop: 30, }}>{this.state.temperature}º</Text>
                        </Badge>
                    </View>
                    </View>
                    <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60, marginBottom: 20}} onPress={() => {
                       this.setModalVisible(true)
                     }}>
                        <Text>Aumentar Grau Brix</Text>
                    </Button>
                    <View style={{flexDirection: 'row'}}>
                      <Button block iconLeft success style={{marginTop: 40, marginLeft: 60, marginRight: 0, marginBottom: 20, paddingRight: 26}} onPress={() => {
                         this.turnMotor("on")
                       }}>
                          <Text>Ligar motor</Text>
                      </Button>
                      <Button block iconLeft danger style={{marginTop: 40, marginLeft: 0, marginRight: 130, marginBottom: 20}} onPress={() => {
                         this.turnMotor("off")
                       }}>
                          <Text>Desligar motor</Text>
                      </Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Button block iconLeft success style={{marginTop: 40, marginLeft: 60, marginRight: 0, marginBottom: 20, paddingRight: 16}} onPress={() => {
                         this.turnPump("on")
                       }}>
                          <Text>Ligar bomba</Text>
                      </Button>
                      <Button block iconLeft danger style={{marginTop: 40, marginLeft: 0, marginRight: 130, marginBottom: 20}} onPress={() => {
                         this.turnPump("off")
                       }}>
                          <Text>Desligar bomba</Text>
                      </Button>
                    </View>
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
                          <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60}} onPress={this.closeModal}>
                              <Text>Voltar</Text>
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
    }

    const styles = StyleSheet.create({
      container: {
        marginTop: 50,
      },
      activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }

    })
