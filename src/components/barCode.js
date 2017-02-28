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

export default class BarCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
            hasCameraPermission: null,
        };
    }
    async componentWillMount() {
        const { status } = await Exponent.Permissions.askAsync(Exponent.Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }


    render() {
      handleBarCodeRead = (data) => {
        alert(JSON.stringify(data));
      }

      const { hasCameraPermission } = this.state;
    if (typeof hasCameraPermission === 'null') {
      return <Text>No Permissions to camera</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
       <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> BarCode </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Exponent.Components.BarCodeScanner
                   onBarCodeRead={this.handleBarCodeRead} />
                </Content>           
            </Container>
         
      );
    }
  
           
       
      }
    }