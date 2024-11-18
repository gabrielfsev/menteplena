import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export function CardBook() {
    const books = [
        { name: 'Como eu me sinto quando estou triste', image: require('../assets/book1.jpg') },
        { name: 'O menino e a raposa', image: require('../assets/book2.png') },
        { name: 'O Homem que Amava Caixas', image: require('../assets/book3.jpg') },
        { name: 'A Ilha Das Emoções', image: require('../assets/book4.jpg') },
    ];

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 20, }}>
            {books.map((book, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#fff',
                        width: 160,
                        height: 200,
                        borderRadius: 10,
                        padding: 10,

                        // Shadow Android
                        elevation: 15,

                        // Shadow iOS
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                    }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                zIndex: 1000,
                                position: 'absolute',
                                right: 2.5,
                                top: 0
                            }}
                        >
                            <AntDesign name="star" size={32} color="#ffd000" />
                        </View>
                        <Image
                            source={book.image}
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

// Pegamos a altura total da tela para garantir que o ScrollView funcione bem.
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export function CardTask() {
    const tasks = [
        { name: 'Arrumar a cama', image: require('../assets/tasks/cama-de-casal.png') },
        { name: 'Escovar os dentes', image: require('../assets/tasks/escovas-de-dente.png') },
        { name: 'Comer', image: require('../assets/tasks/comer.png') },
        { name: 'Lavar as mãos', image: require('../assets/tasks/lavarasmaos.png') },
        { name: 'Tomar banho', image: require('../assets/tasks/tomarbanho.png') },
        { name: 'Estudar', image: require('../assets/tasks/lapis.png') },
        { name: 'Ler', image: require('../assets/tasks/ler.png') },
        { name: 'Brincar', image: require('../assets/tasks/blocodeletrascomcirculo.png') },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {tasks.map((task, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        style={styles.card}
                        onPress={() => Alert.alert('Em Desenvolvimento!')}
                    >
                        <View style={styles.cardContent}>
                            <Image
                                source={task.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.cardText}>
                                {task.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

// Estilos separados para manter o código mais limpo
const styles = StyleSheet.create({
    container: {
        flex: 1, // Garante que o View principal ocupe a tela toda
        backgroundColor: '#f5f5f5', // Cor de fundo opcional
    },
    scrollContainer: {
        paddingHorizontal: '5%',
        gap: 20,
        paddingTop: 35,
        paddingBottom: 200,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',

        // Shadow Android
        elevation: 15,

        // Shadow iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    cardContent: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
});