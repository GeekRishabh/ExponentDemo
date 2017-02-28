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

export default class Font extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    render() {
      function loadFont(){
        Exponent.Font.loadAsync({
          title: 'http://url/to/font1.ttf',
          cursive: 'http://url/to/font2.ttf',
        });
      }
        return ( 
            <Container >
                <Header >
                    <Left >
                        <Button transparent >
                            <Icon name = 'back' / >
                         </Button> 
                     </Left > 
                	<Body>
                    	<Title > Fonts </Title> 
              	    </Body > <Right/>
                </Header>
            	<Content>
               		<Button block info onPress={() =>loadFont() }>
           				<Text> Load Font </Text> 
           			</Button> 
            	</Content>

           </Container>);
        }
    }