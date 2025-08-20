import React from 'react';
import { View, ScrollView, StyleSheet,Text, Image } from 'react-native';

export const CitasScreen = () => {

    return (
        <View style={styles.container}>
            <Image
            source={require("../../../../assets/azulito.jpg") }
            style={styles.imageBackground}
        />
        
        <View style={styles.form}>
      <Text style={styles.textInput}>
      ¿Qué superpoder te gustaría tener por un día y por qué?
      </Text>
        </View>
        
        </View>
    )
    
};

        const styles = StyleSheet.create({

            container: {
                flex: 1,
                backgroundColor: 'white',
                },
                    
            imageBackground: {
                width: '100%',
                height: '100%'
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
                padding: 20
                },
            textInput: {
                fontSize: 35,
                flex: 1,
                textAlign: 'center',
                flexDirection: 'column',
                marginVertical: 20,
                padding: 25,
                fontWeight: 'bold'
            }
        })

export default CitasScreen;
