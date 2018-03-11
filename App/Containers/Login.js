//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import {Metrics, Colors, Fonts, Images} from '../Themes'
import RoundedButton from '../Components/RoundedButton'

// create a component
class Login extends Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image resizeMode = 'contain' style={styles.image} source={Images.logo} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('drawerStack')}>
            <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>;
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.background,
        alignItems:'center'

    },
    button:{
        width: 240,
        height: 60,
        borderRadius: 20,
        backgroundColor: Colors.fire,

    },
    buttonText:{
        color: Colors.background,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical: 10,
        fontSize: Fonts.size.xl
    },
    imageContainer:{
        alignItems: 'center',


    },
    image:{
        width:250,

    }
});

//make this component available to the app
export default Login;
