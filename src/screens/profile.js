import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { MenuOptions } from "../components/options";
import { BackButton } from "../components/backButton";
import { MenuProfile } from "../components/MenuProfile";

import imgProfile from '../assets/perfil.jpeg';

export function Profile({ navigation }) {
    let firstName = 'Gabriel';
    let lastName = 'Ferreira';
    let fullName = `${firstName} ${lastName}`;

    let favoritesNumber = 15;
    let friendsNumber = 10;
    let tasksNumber = 5;

    let gender = 'male';
    let genderText = gender == 'male' ? 'Masculino' : 'Feminino';
    let genderIcon = gender == 'male' ? 'gender-male' : 'gender-female';

    let TEA = 'Não';

    let nationality = 'Brasileiro';

    function redirectPage() {
        navigation.navigate('Favorites');
    }

    return (
        <View style={styles.container}>

            {/* <TouchableOpacity style={styles.settingsIcon} activeOpacity={0.5}>
                <Entypo name="dots-three-vertical" size={26} color="black" />
            </TouchableOpacity> */}

            <View style={styles.contentProfile}>

                <Image
                    source={imgProfile}
                    style={styles.imgProfile}
                />

                <Text
                    style={{
                        color: '#000',
                        fontSize: 24,
                        fontWeight: 600,
                    }}
                >
                    {fullName}
                </Text>

                <Text
                    style={{
                        color: '#666',
                        fontSize: 14,
                        marginTop: 5,
                    }}
                >
                    @gabrielsevf
                </Text>

                <View style={styles.infoProfile}>
                    <TouchableOpacity style={styles.itemInfoProfile} activeOpacity={0.5} >
                        <Text style={styles.textItemProfile}>{friendsNumber}</Text>
                        <Text style={styles.textItemProfile}>Amigos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemInfoProfile} activeOpacity={0.5} onPress={redirectPage} >
                        <Text style={styles.textItemProfile}>{favoritesNumber}</Text>
                        <Text style={styles.textItemProfile}>Favoritos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.itemInfoProfile} activeOpacity={0.5} >
                        <Text style={styles.textItemProfile}>{tasksNumber}</Text>
                        <Text style={styles.textItemProfile}>Tarefas</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.aboutProfile}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: '500',
                    }}
                >
                    Sobre
                </Text>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 15,
                    }}
                >

                    <View style={styles.itemsGroupAboutProfile}>
                        <View style={styles.itemGroup}>
                            <FontAwesome name="birthday-cake" size={26} color="#f77600" />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#777'
                                    }}
                                >
                                    Data de aniversário
                                </Text>
                                <Text>13 Set 2006</Text>
                            </View>
                        </View>

                        <View style={styles.itemGroup}>
                            <MaterialCommunityIcons name={genderIcon} size={26} color="#f77600" />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#777'
                                    }}
                                >
                                    Gênero
                                </Text>
                                <Text>{genderText}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.itemsGroupAboutProfile}>
                        <View style={styles.itemGroup}>
                            <MaterialCommunityIcons name="brain" size={24} color="#f77600" />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#777'
                                    }}
                                >
                                    TEA
                                </Text>
                                <Text>{TEA}</Text>
                            </View>
                        </View>

                        <View style={styles.itemGroup}>
                            <FontAwesome name="globe" size={26} color="#f77600" />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text
                                    style={{
                                        color: '#777'
                                    }}
                                >
                                    Nacionalidade
                                </Text>
                                <Text>{nationality}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

            <View
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#f77600',
                        fontSize: 28,
                        fontWeight: '500',
                        marginVertical: '15%',
                    }}
                >
                    EM DESENVOLVIMENTO
                </Text>
            </View>

            <BackButton />

            <MenuOptions navigation={navigation} selected="user" />

            <MenuProfile insideGestureHandler={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },

    contentProfile: {
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

        borderBottomColor: '#dadada',
        borderBottomWidth: 1,
    },

    settingsIcon: {
        zIndex: 100,
        width: 50,
        height: 50,

        position: 'absolute',
        top: 10,
        right: 10,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 180,
    },

    imgProfile: {
        width: 175,
        height: 175,
        borderWidth: 5,
        borderColor: '#f77600',
        borderRadius: 180,
        marginTop: 15,
        marginBottom: 15,
    },

    infoProfile: {
        width: '100%',
        marginTop: 20,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    itemInfoProfile: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textItemProfile: {
        fontWeight: '500',
        fontSize: 16,
    },

    aboutProfile: {
        width: '100%',
        height: 225,

        backgroundColor: '#fff',

        borderBottomColor: '#dadada',
        borderBottomWidth: 1,

        display: 'flex',
        padding: 20,
        gap: 20,
    },

    itemsGroupAboutProfile: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 20,
    },

    itemGroup: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
    },
});