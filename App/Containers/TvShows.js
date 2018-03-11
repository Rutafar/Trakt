//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Metrics, Colors, Fonts, Images} from '../Themes'

// create a component
class TvShows extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>  </Text>
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
        backgroundColor: Colors.background,
    },
});

//make this component available to the app
export default TvShows;
