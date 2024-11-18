import { StyleSheet, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

export function BackButton() {

    const navigation = useNavigation();

    function goBack() {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            console.log("Nenhuma tela anterior disponível para voltar");
        }

    }

    return (
        <TouchableOpacity
            style={styles.backIcon}
            activeOpacity={0.5}
            onPress={goBack}
        >
            <MaterialCommunityIcons name="keyboard-backspace" size={38} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backIcon: {
        zIndex: 100,
        width: 50,
        height: 50,
        position: 'absolute',
        top: 10,
        left: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 10,
    },
});