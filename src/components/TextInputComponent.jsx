import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextInputComponent = ({value, placeholder, onChangeText, style}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, style]}
            />
        </View>
    );
};

TextInputComponent.propTypes = {
    value : PropTypes.string,
    placeholder : PropTypes.string,
    onChangeText : PropTypes.func,
    style : PropTypes.object,
};
TextInputComponent.defaultProps = {
    value : null,
    placeholder: 'Enter text',
    onChangeText: null,
    style: {},
};
const styles = StyleSheet.create({
    container : {
        width : '100%',
        alignItems : 'center',
    },  
    input : {
        borderWidth: 1, 
        width: '80%', 
        padding: 10, 
        marginVertical: 10,
        borderRadius : 8,
        fontSize : 16
    }
});
export default TextInputComponent;