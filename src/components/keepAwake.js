import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import * as Exponent from 'exponent';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';

const { width, height } = Dimensions.get('window');


export default class KeepAwake extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

   render() {
      activate = () => {
        Exponent.Components.KeepAwake.activate();
      }

      deactivate = () => {
        Exponent.Components.KeepAwake.deactivate();
      }
      return ( 
          <Container>
              <Header>
                <Left>
                  <Button transparent>
                      <Icon name='arrow-back' />
                  </Button>
                </Left>
              <Body>
                <Title> Awake </Title>
              </Body>
                <Right />
              </Header>
                <Content style={{marginTop: height/2 -50}}>	
                  <Button block info onPress={() =>activate() }>
                    <Text> Stay Awake </Text> 
                  </Button>
                  <Button block success onPress={() =>deactivate()} style={{ marginTop: 10 }}>
                    <Text> Remove Stay Awake </Text> 
                  </Button>
               </Content>
                   
          </Container>
           
        );
        
    }
}