import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import axios from 'axios';

export const ChillScreen = () => {
    const [question, setQuestion] = useState('');

    const fetchRandomQuestion = async () => {
        try {
            const response = await axios.get('http://192.168.0.14:3000/questions/random'); // Asegúrate de usar la IP correcta
            setQuestion(response.data.pregunta);
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    useEffect(() => {
        fetchRandomQuestion();
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/azulito.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.form}>
                <Text style={styles.textInput}>{question}</Text>
                <Button title="Siguiente Pregunta" onPress={fetchRandomQuestion} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    form: {
        width: '85%',
        height: '50%',
        alignSelf: 'center',
        backgroundColor: '#82EDFD',
        position: 'absolute',
        top: 150,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 20,
    },
    textInput: {
        fontSize: 35,
        flex: 1,
        textAlign: 'center',
        flexDirection: 'column',
        marginVertical: 20,
        padding: 25,
        fontWeight: 'bold',
    },
});

export default ChillScreen;
