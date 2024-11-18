import React, { useRef, useState } from 'react';
import {
    Animated,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Easing,
    Alert,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Constantes de Cores e Estilos
const COLORS = {
    black: '#000',
    white: '#fff',
    grayDark: '#212121',
    border: '#dadada',
};

const SHADOW = {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 25, // Android
};

// Botão Flutuante
const FloatingButton = ({ onPress }) => (
    <TouchableOpacity
        activeOpacity={0.5}
        style={styles.floatingButton}
        onPress={onPress}
    >
        <Feather name="more-vertical" size={32} color={COLORS.black} />
    </TouchableOpacity>
);

// Botão do Menu
const MenuButton = ({ icon, label, onPress }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonMenu} onPress={onPress}>
        {icon}
        <Text style={styles.textButtonMenu}>{label}</Text>
    </TouchableOpacity>
);

// Componente Principal com Animação de Arraste
export function MenuProfile() {
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const translateY = useRef(new Animated.Value(300)).current; // Menu começa fora da tela

    // Função para abrir o menu
    const openMenu = () => {
        setIsOpen(true);
        Animated.timing(translateY, {
            toValue: 0, // Move para a tela
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    // Função para fechar o menu
    const closeMenu = () => {
        Animated.timing(translateY, {
            toValue: 300, // Volta para fora da tela
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => setIsOpen(false));
    };

    // PanResponder para detectar arraste para baixo
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) =>
                Math.abs(gestureState.dy) > 10,
            onPanResponderMove: (_, gestureState) => {
                if (gestureState.dy > 0) {
                    translateY.setValue(gestureState.dy);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100) {
                    closeMenu();
                } else {
                    Animated.spring(translateY, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    // Funções para Entrar e Sair

    const signOut = () => {
        navigation.navigate('Login');
        closeMenu();
    };

    return (
        <>
            <FloatingButton onPress={openMenu} />

            {isOpen && (
                <Animated.View
                    {...panResponder.panHandlers}
                    style={[styles.container, { transform: [{ translateY }] }]}
                >
                    <View style={styles.barMenu} />

                    <MenuButton
                        icon={<Ionicons name="settings-sharp" size={28} color={COLORS.black} />}
                        label="Configurações"
                        onPress={() => Alert.alert('Em desenvolvimento')}
                    />

                    <MenuButton
                        icon={<Feather name="log-out" size={28} color={COLORS.black} />}
                        label="Sair"
                        onPress={signOut}
                    />
                </Animated.View>
            )}
        </>
    );
}

// Estilos
const styles = StyleSheet.create({
    floatingButton: {
        zIndex: 100,
        width: 50,
        height: 50,
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        zIndex: 200,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 250,
        borderColor: COLORS.border,
        borderWidth: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: COLORS.white,
        ...SHADOW,
    },
    barMenu: {
        backgroundColor: COLORS.grayDark,
        width: 100,
        height: 10,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 25,
        alignSelf: 'center',
    },
    buttonMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginHorizontal: 25,
        marginVertical: 10,
    },
    textButtonMenu: {
        fontSize: 18,
        fontWeight: '600',
    },
});
