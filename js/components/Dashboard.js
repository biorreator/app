import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Item, Label, Text, ListItem, Input,Button, List, Badge} from 'native-base';
import Navigation from './Navigation';
import { StockLine } from 'react-native-pathjs-charts'

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
    let data = [
    [{
      "x": 0,
      "y": 47782
    }, {
      "x": 1,
      "y": 48497
    }, {
      "x": 2,
      "y": 77128
    }, {
      "x": 3,
      "y": 73413
    }, {
      "x": 4,
      "y": 58257
    }, {
      "x": 5,
      "y": 40579
    }, {
      "x": 6,
      "y": 72893
    }, {
      "x": 7,
      "y": 60663
    }, {
      "x": 8,
      "y": 15715
    }, {
      "x": 9,
      "y": 40305
    }, {
      "x": 10,
      "y": 68592
    }, {
      "x": 11,
      "y": 95664
    }, {
      "x": 12,
      "y": 17908
    }, {
      "x": 13,
      "y": 22838
    }, {
      "x": 14,
      "y": 32153
    }, {
      "x": 15,
      "y": 56594
    }, {
      "x": 16,
      "y": 76348
    }, {
      "x": 17,
      "y": 46222
    }, {
      "x": 18,
      "y": 59304
    }],
    [{
      "x": 0,
      "y": 125797
    }, {
      "x": 1,
      "y": 256656
    }, {
      "x": 2,
      "y": 222260
    }, {
      "x": 3,
      "y": 265642
    }, {
      "x": 4,
      "y": 263902
    }, {
      "x": 5,
      "y": 113453
    }, {
      "x": 6,
      "y": 289461
    }, {
      "x": 7,
      "y": 293850
    }, {
      "x": 8,
      "y": 206079
    }, {
      "x": 9,
      "y": 240859
    }, {
      "x": 10,
      "y": 152776
    }, {
      "x": 11,
      "y": 297282
    }, {
      "x": 12,
      "y": 175177
    }, {
      "x": 13,
      "y": 169233
    }, {
      "x": 14,
      "y": 237827
    }, {
      "x": 15,
      "y": 242429
    }, {
      "x": 16,
      "y": 218230
    }, {
      "x": 17,
      "y": 161511
    }, {
      "x": 18,
      "y": 153227
    }]
  ]
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
                            <Text>Densidade: {this.props.density}</Text>
                        </ListItem>
                        <ListItem style={{borderBottomWidth: 0}}>
                            <Text>Ph:</Text>
                        </ListItem>
                        <ListItem style={{borderBottomWidth: 0}}>
                            <Text>Brix:</Text>
                        </ListItem>
                    </List>
                    </View>
                    <View>
                        <Badge style={{width: 90, height: 90, borderRadius: 50, marginLeft: 80, marginTop: 40}}>
                          <Text style={{marginTop: 30, }}>35º</Text>
                        </Badge>
                    </View>
                    </View>
                    <Button block iconLeft style={{marginTop: 40, marginLeft: 60, marginRight: 60, marginBottom: 20}} onPress={() => {
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
