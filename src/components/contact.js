import * as Exponent from 'exponent';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator, Text } from 'native-base';
const { width, height } = Dimensions.get('window');

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    render() {
      async function getContact() {
        const contacts = await Exponent.Contacts.getContactsAsync([
          Exponent.Contacts.PHONE_NUMBERS,
          Exponent.Contacts.EMAILS,
        ]);
        if (contacts.length > 0) {
          Alert.alert(
            'Your first contact is...',
            `Name: ${contacts[0].name}\n` +
            `Phone: ${JSON.stringify(contacts[0].phoneNumbers)}\n` +
            `Email: ${JSON.stringify(contacts[0].emails)}`
          );
        }
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
                        <Title> Contact </Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{marginTop: height/2 -50}}> 
                <Button block info onPress={() =>getContact() }>
                  <Text> Fetch Contact </Text> 
                </Button>
                </Content>
                   
            </Container>
        );    
      }
    }