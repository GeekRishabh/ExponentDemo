import * as Exponent from 'exponent';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Dimensions,
} from 'react-native';

import First from './src/app';
import Map from './src/components/mapView'

const { width, height } = Dimensions.get('window');
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator } from 'native-base';


class App extends React.Component {
    render() {
        return <First / > ;
    }
}


Exponent.registerRootComponent(App);