import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import {Drawer, Stack} from './src/config/router'
export default class App extends React.Component {
  
  render() {
   
      return (
        <View style={styles.container}>
         <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
         <Drawer/>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  }
});
