import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Dimensions,
    StatusBarIOS,
} from 'react-native';
import * as Exponent from 'exponent';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Separator } from 'native-base';
import changePage from './stores';

import Audio from './components/audio';
import BarCode from './components/barCode';
import Contact from './components/contact';
import Facebook from './components/facebookLogin';
import Font from './components/font';
import Glogin from './components/googleLogin';
import ImagePicker from './components/imagePicker';
import Map from './components/mapView';
import Permission from './components/permission';
import Sensor from './components/sensor';
import Snapshot from './components/snapShot';
import Location from './components/location';
import KeekAwake from './components/keepAwake';




const { width, height } = Dimensions.get('window');

export default class First extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }
    render() {
        return (
            <Snapshot/>
            );
    }
}    