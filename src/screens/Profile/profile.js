//import liraries
import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

// create a component
class profile extends Component {
    render() {
        return (
            <View style={styles.container}>
              <StatusBar
        backgroundColor="black"
        barStyle="dark-content"
      />
                <Text>profile</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
      
    },
});

//make this component available to the app
export default profile;
