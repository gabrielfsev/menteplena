import { StyleSheet, Text, View } from 'react-native';

import { BackButton } from "../components/backButton";
import { MenuOptions } from "../components/options";
import { CardBook } from '../components/card';

export function Favorites({ navigation }) {
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
                    Favoritos
                </Text>
            </View>

            <View style={styles.favoriteContainer}>
                <View style={styles.booksFavorites}>
                    <Text
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            fontWeight: 500,
                            fontSize: 28,
                            color: "#0694FE"
                        }}
                    >
                        Livros
                    </Text>

                    <View style={styles.cardBookContainer}>
                        <CardBook />
                    </View>
                </View>
            </View>

            <MenuOptions navigation={navigation} selected="staro" />
            <BackButton />
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

    favoriteContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f9f9',
    },

    booksFavorites: {
        width: '100%',
        paddingVertical: '5%',
        backgroundColor: '#f9f9f9',

        alignItems: 'center',
        justifyContent: 'flex-start',

        borderTopColor: '#dadada',
        borderTopWidth: 1,
    },

    cardBookContainer: {
        width: '100%',
        height: '100%',

        paddingVertical: '7.5%',

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: 20,
    },

    taskFavorites: {
        width: '100%',
        height: '100%',

        backgroundColor: '#fff',

        borderTopColor: '#dadada',
        borderTopWidth: 1,
    },
});