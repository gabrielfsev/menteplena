import { StyleSheet, TouchableOpacity, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

export function MenuOptions({ selected }) {
    const navigation = useNavigation();

    const menu = [
        { name: 'home', screen: 'Home' },
        { name: 'checksquareo', screen: 'Task' },
        { name: 'staro', screen: 'Favorites' },
        { name: 'user', screen: 'Profile' },
    ];

    function redirectPage(item) {
        navigation.navigate(item.screen);
    }

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}
        >
            <View style={styles.menuContainer}>
                {menu.map((item, index) => (
                    <View style={styles.menuOptions} key={index}>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => redirectPage(item)}>
                            <AntDesign
                                name={item.name}
                                size={32}
                                color={item.name === selected ? '#f77600' : '#000000'}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    menuContainer: {
        minWidth: '65%',
        height: '7.5%',

        paddingHorizontal: 5,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',

        borderColor: '#dadada',
        borderWidth: 1,
        borderRadius: 30,

        // Shadow Androind
        elevation: 15,

        // Shadow IOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
});