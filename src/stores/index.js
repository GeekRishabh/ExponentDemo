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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
});
import Map from '../components/mapView';

  let page;

 function changePage(page){
  this.page=page;
 console.log('page', page);
  switch (page) {
      
      case 'Map':
      console.log('match');
        return (
            <Map/>
        );
     
      case 'Contact':
        return (
          <View style={styles.container}>
            <Contact/>
          </View>
        );
        default: console.log('default');
    }
   
}
export default changePage ;