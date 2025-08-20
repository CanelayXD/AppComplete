import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

interface Props {
    text: string;
    onPress: () => void;
}


export const ColorButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            style={styles.colorButton}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    colorButton: {
        width: 220,
        height: 50,
        backgroundColor: 'floralwhite',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textButton: {
        color: 'navy',
        fontWeight: 'bold',
        fontSize: 25
    }
})