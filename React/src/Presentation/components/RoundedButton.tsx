import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

interface Props {
    text: string;
    onPress: () => void;
}


export const RoundedButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            style={styles.roundedButton}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'crimson',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
})