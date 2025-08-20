import React, { useState } from "react";
import { ApiApp } from "../../../Data/source/remote/api/ApiApp";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";

const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value})
    }
    
    const register =  async() => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('Result: ' + JSON.stringify(response));
        }
    }

    const isValidForm = (): boolean => {
        if (values.name === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.email === '') {
            setErrorMessage('Ingresa tu email');
            return false;
        }
        if (values.password === '') {
            setErrorMessage('Ingresa tu contraseña');
            return false;
        }
        if (values.confirmPassword === '') {
            setErrorMessage('Confirma tu contraseña');
            return false;
        }
        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden');
            return false;
        }

        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;