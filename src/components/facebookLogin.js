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
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
const io = require('socket.io-client');

const host = 'http://10.0.1.36:3030';
const socket = io(host, { transports: ['websocket'] });
const app = feathers()
            .configure(socketio(socket));


const { width, height } = Dimensions.get('window');


export default class Facebook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
 componentWillMount()
 {
    socket.on('getuser', () => {
        console.log('socket connected');
  });
  socket.on('eventName', (data) => {
    console.log('socket', data);
 });
}
   render() {
    async function facebookLogin() {
      console.log('in login function');
      const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
        '1580645588617791', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert(
          'Logged in!',
          `Hi ${(await response.json()).name}!`,
        );
      }
    }
    function socketEmit () {
         app.service('users')
      .find()
      .then((result) => {
        console.log('newly created message:', result);
      })
      .catch(error => console.log(error));
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
                <Button block info onPress={() =>facebookLogin() }>
                  <Text> Sign In with Facebook </Text> 
                </Button>
                <Button block danger onPress={() =>socketEmit() }>
                  <Text> Socket Test </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        
    }
}