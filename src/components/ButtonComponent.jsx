import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtonComponent = ({text, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width : '90%',
        padding : 10,
    },
    button : {
        backgroundColor : 'blue',
        padding : 10,
        borderRadius : 5,
    },
    buttonText : {
        color : 'white',
        textAlign : 'center',
        fontSize : 20,
    }
})

export default ButtonComponent;