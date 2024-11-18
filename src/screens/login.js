import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { PopupError01, PopupError02 } from '../components/popup';

import Logo from '../assets/logo-sf.png';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

export function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Estado para controlar o popup de erro
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [showErrorPopup02, setShowErrorPopup02] = useState(false);

    async function handleLogin() {
        if (email === '' || password === '') {
            setShowErrorPopup(true);
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            setShowErrorPopup02(true);
        }
    }

    function redirectRegister() {
        navigation.navigate('Register');
    }

    function inDevelopment() {
        Alert.alert('', 'Em Construção');
    }

    return (
        <>
            {showErrorPopup && (
                <PopupError01 trigger={showErrorPopup} closePopup={() => setShowErrorPopup(false)} /> // Passa a função para fechar o popup
            )}
            {showErrorPopup02 && (
                <PopupError02 trigger={showErrorPopup02} closePopup={() => setShowErrorPopup02(false)} /> // Passa a função para fechar o popup
            )}
            <View style={styles.container} >
                <View style={styles.viewlogo}>
                    {/* Text Logo */}
                    <Text style={{ fontSize: 24, fontWeight: 500, }}>
                        Melhore a
                        <Text style={{ color: '#f77600' }}> cada dia</Text>
                        .
                    </Text>

                    {/* Image Logo */}
                    <Image source={Logo} style={styles.logo} />
                </View>

                <View style={styles.loginForm}>
                    {/* Email */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite Seu E-mail"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        keyboardType="email-address"
                    />

                    {/* Password */}
                    <TextInput
                        style={styles.input}
                        placeholder="Digite Sua Senha"
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry
                    />

                    {/* Forgot Password */}
                    <TouchableOpacity
                        style={styles.btnForgot}
                        activeOpacity={0.6}
                        onPress={() => Alert.alert('E-mail: gabriel@gmail.com \n Senha: 123456')}
                    >
                        <Text style={styles.textForgot} >
                            Esqueceu sua senha?
                        </Text>
                    </TouchableOpacity>

                    {/* Enter Button */}
                    <TouchableOpacity
                        style={styles.btnEnter}
                        activeOpacity={0.8}
                        onPress={handleLogin}
                    >
                        <Text style={styles.textEnterBtn}>
                            Entrar
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

                    {/* Register Account */}
                    <View style={styles.registerContainer}>
                        <Text style={styles.textForgot}>
                            Ainda não tem uma conta?
                        </Text>

                        <TouchableOpacity
                            style={styles.btnRegister}
                            activeOpacity={0.6}
                            onPress={redirectRegister}
                        >
                            <Text style={styles.textRegisterBtn}>
                                Criar sua conta
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
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

    // Login Form
    loginForm: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5%',
        gap: 15,
    },

    // Input e-mail and password
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

    // Forgot Password
    btnForgot: {
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'flex-end',
    },

    textForgot: {
        fontWeight: '600',
        color: '#b0b0b0',
    },

    // Enter Button
    btnEnter: {
        width: '100%',
        height: 45,
        backgroundColor: '#0067a0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    textEnterBtn: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
    },

    // Line Container
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
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

        // Shadow Android
        elevation: 10,

        // Shadow IOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },

    // Register Account
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: '5%',
        gap: 5,
    },

    // Button Register
    btnRegister: {
        backgroundColor: 'transparent',
    },

    // Text Button Register
    textRegisterBtn: {
        color: '#000',
        fontWeight: '500',
    }
});