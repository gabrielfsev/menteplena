import { StyleSheet, View, Text } from "react-native";

import { MenuOptions } from "../components/options";
import { BackButton } from "../components/backButton";
import { CardTask } from "../components/card";

export function Task({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: 500,
                        color: '#f77600',
                    }}
                >
                    Tarefas
                </Text>
            </View>

            <View style={styles.taskContainer}>
                <CardTask />
            </View>

            <BackButton />
            <MenuOptions navigation={navigation} selected="checksquareo" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },

    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
    },

    taskContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f9f9',
        borderTopColor: '#dadada',
        borderTopWidth: 1,
    },
});