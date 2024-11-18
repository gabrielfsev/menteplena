import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

import FontAwesome from '@expo/vector-icons/FontAwesome';


// Popup error 01
export function PopupError01({ trigger, closePopup }) {
    // Remove o controle local de isVisible
    const [isVisible, setIsVisible] = useState(trigger);

    // Atualiza a visibilidade quando o prop "trigger" mudar
    useEffect(() => {
        setIsVisible(trigger);
    }, [trigger]);

    return (
        <View style={styles.transparentBackground}>
            {/* Visible */}
            {isVisible && (
                <View style={styles.containerPopup}>
                    <View style={styles.contentPopup}>
                        {/* Título */}
                        <Text style={{ fontSize: 24, fontWeight: 600, }}>
                            <Text style={{ color: "#f77600" }}>Erro</Text>
                        </Text>

                        {/* Descrição do Erro */}
                        <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 400, letterSpacing: 0 }}>
                            Preencher todos os campos.
                        </Text>

                        {/* Botão Ok */}
                        <View style={{ position: "absolute", alignItems: 'flex-end', right: 20, bottom: '17.5%', }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={closePopup} // Também fecha o popup
                            >
                                <Text style={{ fontSize: 14, fontWeight: 600, color: "#0067A0" }}>
                                    Ok
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export function PopupError02({ trigger, closePopup }) {
    // Remove o controle local de isVisible
    const [isVisible, setIsVisible] = useState(trigger);

    // Atualiza a visibilidade quando o prop "trigger" mudar
    useEffect(() => {
        setIsVisible(trigger);
    }, [trigger]);

    return (
        <View style={styles.transparentBackground}>
            {/* Visible */}
            {isVisible && (
                <View style={styles.containerPopup}>
                    <View style={styles.contentPopup}>
                        {/* Título */}
                        <Text style={{ fontSize: 24, fontWeight: 600, }}>
                            <Text style={{ color: "#f77600" }}>Erro</Text>
                        </Text>

                        {/* Descrição do Erro */}
                        <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 400, letterSpacing: 0 }}>
                            Usuário ou senha inválidos
                        </Text>

                        {/* Botão Ok */}
                        <View style={{ position: "absolute", alignItems: 'flex-end', right: 20, bottom: '17.5%', }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={closePopup} // Também fecha o popup
                            >
                                <Text style={{ fontSize: 14, fontWeight: 600, color: "#0067A0" }}>
                                    Ok
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export function PopupError03({ trigger, closePopup }) {
    // Remove o controle local de isVisible
    const [isVisible, setIsVisible] = useState(trigger);

    // Atualiza a visibilidade quando o prop "trigger" mudar
    useEffect(() => {
        setIsVisible(trigger);
    }, [trigger]);

    return (
        <View style={styles.transparentBackground}>
            {/* Visible */}
            {isVisible && (
                <View style={styles.containerPopup}>
                    <View style={styles.contentPopup}>
                        {/* Título */}
                        <Text style={{ fontSize: 24, fontWeight: 600, }}>
                            <Text style={{ color: "#f77600" }}>Erro</Text>
                        </Text>

                        {/* Descrição do Erro */}
                        <Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 400, letterSpacing: 0 }}>
                            Os campos de senha estão divergindo
                        </Text>

                        {/* Botão Ok */}
                        <View style={{ position: "absolute", alignItems: 'flex-end', right: 20, bottom: '17.5%', }}>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={closePopup} // Também fecha o popup
                            >
                                <Text style={{ fontSize: 14, fontWeight: 600, color: "#0067A0" }}>
                                    Ok
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

// Popup Home Page
export function PopupHome() {
    // Var useSate para fechar popup
    const [isVisible, setIsVisible] = useState(true);

    // Define a visibilidade do popup
    const closePopup = () => {
        setIsVisible(false);
    }

    let name = "Gabriel";

    return (
        <View style={styles.transparentBackground}>
            {/* Visible */}
            {
                isVisible && (
                    <View style={styles.containerPopup}>
                        <View style={styles.contentPopup}>
                            {/* Title */}
                            <Text style={styles.text}>
                                Bem Vindo <Text style={{ color: "#f77600" }}>{name}</Text>
                            </Text>

                            {/* Desc Popup */}
                            <Text style={{ fontSize: 14, paddingTop: 10, fontWeight: 400, letterSpacing: 0.1, }}>
                                Este aplicativo oferece recursos interativos e educativos para pessoas no espectro autista.
                            </Text>

                            <View style={{ height: '40%', alignItems: 'center', justifyContent: 'flex-end', }}>
                                <TouchableOpacity
                                    activeOpacity={0.4}
                                    onPress={closePopup}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#f77600" }}>
                                        Divirta-se!
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            }
            {/* Not Visible */}
            {
                !isVisible && (
                    <View style={{ display: 'none' }}>

                    </View>
                )
            }
        </View>

    );
};

const styles = StyleSheet.create({
    // Popup
    transparentBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    containerPopup: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#0000005e',
        zIndex: 1000,

        paddingHorizontal: '5%',
    },

    contentPopup: {
        width: '100%',
        height: '20%',
        paddingVertical: '5%',
        paddingHorizontal: '5%',

        backgroundColor: '#fff',
        borderRadius: 15,

        // Shadow Android
        elevation: 15,

        // Shadow IOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },

    closeBtn: {
        position: 'absolute',
        top: '15%',
        right: 20,
    },

    text: {
        color: '#333',
        fontSize: 20,
        fontWeight: '500',
    },
});