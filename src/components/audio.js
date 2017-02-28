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


export default class Audio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
   render() {
    return ( 
      <Container>
          <Header>
            <Left>
              <Button transparent>
                  <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title> Audio </Title>
            </Body>
              <Right />
          </Header>
            <Content style={{marginTop: height/2 -50 }}> 
             <Icon name ='ios-rewind' style={{marginLeft: 40 }}/>
             <Icon name ='ios-play' style={{marginRight: 40 }}/>
             
             
            </Content>
                   
      </Container>
           
        );
        
    }
}