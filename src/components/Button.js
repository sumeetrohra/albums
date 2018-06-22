import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
            {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'transparent',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        textAlign: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export default Button;
