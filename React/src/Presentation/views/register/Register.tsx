import React, { useEffect } from 'react'
import { Image, Text, View, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';
import useViewModel from "./ViewModel";
import { CustomeTextInput } from '../../components/CustomeTextInput';


export const RegisterScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { name, email, password, confirmPassword, errorMessage, onChange, register} = useViewModel();

  useEffect(() => {
    if (errorMessage != '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage])

    return (
        <View style={styles.container}>
    
          {/*Imagen de fondo*/}
          <Image
          source={require("../../../../assets/FondoLogin.jpg") }
          style={styles.imageBackground}
          />
    
          {/*Logo de la app*/}
          <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/logo.png") }
            style={styles.logoImage}
            />
            
            {/*Nombre de al app*/}
          <Text style={styles.logoText}>AMODRINKS</Text>
          </View>

          
    
          {/*Titulo del formulario*/}
          <View style={styles.form}>

          <ScrollView>

          <Text style={styles.formText}>
            REGISTRATE
          </Text>


          {/* Cajita con el segundo input*/}
          <CustomeTextInput
            image={require ('../../../../assets/perfil.png')}
            placeholder='Nombre'
            keyboardType='default'
            property='name'
            onChangeText={ onChange }
            value={ name }/>

    
          {/* Cajita con el segundo input*/}
          <CustomeTextInput
            image={require ('../../../../assets/mensaje.png')}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            property='email'
            onChangeText={ onChange }
            value={ email }/>

    
          {/* Cajita con el tercer input*/}
          <CustomeTextInput
            image={require ('../../../../assets/candado.png')}
            placeholder='Contraseña'
            keyboardType='default'
            property='password'
            onChangeText={ onChange }
            value={ password }
            secureTextEntry= { true }
            />


          {/* Cajita con el cuarto input*/}
          <CustomeTextInput
            image={require ('../../../../assets/candado.png')}
            placeholder='Confirmar contraseña'
            keyboardType='default'
            property='confirmPassword'
            onChangeText={ onChange }
            value={ confirmPassword }
            secureTextEntry= { true }
            />
            

    
          <View style={{marginTop: 30}}>
    
            <RoundedButton text ='ACEPTAR' onPress={ () => register()}/>
    
          </View>

          </ScrollView>
    
          </View>
    
    
        </View>
      );
    }
    
    
    
    
    
    const styles = StyleSheet.create({
    //Para el fondo de pantalla
    container: {
    flex: 1,
    backgroundColor: 'white',
    },
    
    //Para ajustar la imagen del fondo de pantalla
    imageBackground: {
    width: '100%',
    height: '100%'
    },
    
    //El cuadro blanco donde va el registro
    form: {
    width: '85%',
    height: '60%',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 180,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 35
    },
    
    //El logo de la aplicación
    logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '2.5%'
    },
    
    //Ajustar el logo de la aplicación
    logoImage: {
    width: 100,
    height: 100
    },
    
    //Ajustar el nombre de la aplicación
    logoText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
    },
    
    //Darle forma al texto de ingresar
    formText:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'deeppink'
    },
    
    //La barra debajo del formulario para iniciar sesión
    formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'crimson',
    marginLeft: 15
    },
    
    //Para ajustar la imagen con la caja de texto input
    formInput: {
    flexDirection: 'row',
    marginTop: 30
    },
    
    //Para ajustar los iconos del formulario
    formIcon: {
    width: 25,
    height: 25,
    marginLeft: 5
    },
    
    //Texto debajo del botón
    formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
    },
    
    //Enlace para crear una cuenta
    formRegisterText: {
    fontStyle: 'italic',
    color: 'crimson',
    borderBottomWidth: 1,
    borderBottomColor: 'crimson',
    fontWeight: 'bold',
    marginLeft: 10
    }
    });
    