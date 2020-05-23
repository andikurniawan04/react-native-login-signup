import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

const Submit = props => {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.color}]}>
            <Text style={styles.submitText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
    },
    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default Submit;