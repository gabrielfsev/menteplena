import React, { useState } from 'react';

import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { PopupError01, PopupError03 } from '../components/popup';

import Logo from '../assets/logo-sf.png';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConnection';

export function Register({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // Estado para controlar o popup de erro
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [showErrorPopup03, setShowErrorPopup03] = useState(false);


    async function handleRegister() {

        if (name === '' || email === '' || password === '' || passwordConfirm === '') {
            setShowErrorPopup(true);
            return;
        }

        try {
            if (password === passwordConfirm) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert('Usuário Cadastrado com sucesso');

                // Zerar os inputs
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirm('');

            } else {
                setShowErrorPopup03(true);
                return;
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Erro ao cadastrar', error.message);
        }
    }

    function redirectLogin() {
        navigation.replace('Login')
    }

    function inDevelopment() {
        Alert.alert('', 'Em Construção');
    }

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f9f9f9'
            }}
        >
            {showErrorPopup && (
                <PopupError01 trigger={showErrorPopup} closePopup={() => setShowErrorPopup(false)} /> // Passa a função para fechar o popup
            )}
            {showErrorPopup03 && (
                <PopupError03 trigger={showErrorPopup03} closePopup={() => setShowErrorPopup03(false)} /> // Passa a função para fechar o popup
            )}

            <View style={styles.container} >
                {/* Title */}
                <View style={styles.viewlogo}>
                    {/* Title */}
                    <Text style={{ fontSize: 24, fontWeight: 500, }}>
                        Faça seu
                        <Text style={{ color: '#f77600' }}> registro</Text>
                        .
                    </Text>

                    {/* Image Logo */}
                    <Image source={Logo} style={styles.logo} />
                </View>

                <View style={styles.registerForm}>

                    {/* Name */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite Seu Nome"
                        value={name}
                        onChangeText={value => setName(value)}
                    />

                    {/* E-mail */}
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu email"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        keyboardType="email-address"
                    />

                    {/* Password */}
                    <TextInput
                        style={styles.input}
                        placeholder="Insira sua senha"
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry
                    />

                    {/* Confirm Password */}
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme Sua Senha"
                        value={passwordConfirm}
                        onChangeText={value => setPasswordConfirm(value)}
                        secureTextEntry
                    />

                    {/* Enter Button */}
                    <TouchableOpacity
                        style={styles.btnRegister}
                        activeOpacity={0.8}
                        onPress={handleRegister}
                    >
                        <Text style={styles.textRegisterBtn}>
                            Registrar
                        </Text>
                    </TouchableOpacity>

                    {/* Line */}
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={styles.textLine}>ou</Text>
                        <View style={styles.line} />
                    </View>

                    {/* Method Login */}
                    <View style={styles.methodLogin}>
                        <TouchableOpacity
                            style={styles.methodBtn}
                            activeOpacity={0.8}
                            onPress={inDevelopment}
                        >
                            <FontAwesome name="google" size={42} color="red" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.methodBtn}
                            activeOpacity={0.8}
                            onPress={inDevelopment}
                        >
                            <FontAwesome name="facebook" size={42} color="#3578e5" />
                        </TouchableOpacity>
                    </View>

                    {/* Login Account Container */}
                    <View style={styles.loginContainer}>
                        <Text style={styles.textLogin}>
                            Já possui uma conta?
                        </Text>

                        <TouchableOpacity
                            style={styles.btnLogin}
                            activeOpacity={0.6}
                            onPress={redirectLogin}
                        >
                            <Text style={styles.textLoginBtn}>
                                Fazer Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );


};

const styles = StyleSheet.create({
    // Screen
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingVertical: '10%',
        paddingHorizontal: '5%',
    },

    // Logo
    viewlogo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
    },

    // Register Form
    registerForm: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5%',
        gap: 15,
    },

    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#c1c1c1',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#000',
    },

    btnRegister: {
        width: '100%',
        height: 45,
        backgroundColor: '#0067a0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    textRegisterBtn: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
    },

    // Line Container
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },

    // Lines
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#aaa',
    },

    // Text Line
    textLine: {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#aaa',
    },

    // Method Login
    methodLogin: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    // Icon Button
    methodBtn: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 180,

        // Shadow Androind
        elevation: 10,

        // Shadow IOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },

    // Login Account
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: '5%',
        gap: 5,
    },

    // Button Login
    textLogin: {
        fontWeight: '600',
        color: '#b0b0b0',
    },

    btnLogin: {
        backgroundColor: 'transparent',
    },

    // Text Button Login
    textLoginBtn: {
        color: '#000',
        fontWeight: '500',
    }
});