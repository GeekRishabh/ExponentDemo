import * as Exponent from 'exponent';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator } from 'native-base';
import React, { Component } from 'react';
const { width, height } = Dimensions.get('window');

export default class Snapshot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
 
    render() {
      async function getSnap(){
        Exponent.takeSnapshotAsync(2, {
          format: 'jpeg',
          quality: 1,
          result: 'file',
          height: height,
          width: width,
         }).then((result) => console.log('response', result))

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
                        <Title> Facebook </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>getSnap() }>
                  <Text> Snapshot Test </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        }
    }