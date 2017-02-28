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

export default class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
 
   render() {
      function getLocation () {
           Exponent.Location.getCurrentPositionAsync({enableHighAccuracy: true})
            .then((result) => console.log(result.coords.latitude,result.coords.longitude))
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
                        <Title> location </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}>	
                <Button block info onPress={() =>getLocation() }>
                  <Text> Get Current location </Text> 
                </Button>
                </Content>
                   
            </Container>
           
        );
        
    }
}