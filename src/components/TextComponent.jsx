import { View, Text } from 'react-native'
import React from 'react'

const TextComponent = ({text, textSize, isBold}) => {
    return (
        <View>
            <Text style={{fontSize : textSize, fontWeight : isBold && 'bold'}}>{text}</Text>
        </View>
    );
};

export default TextComponent;