import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { MenuOptions } from "../components/options";
import { PopupHome } from "../components/popup";

export function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <Text style={styles.navbarText}>Início</Text>
            </View>

            {/* Conteúdo Principal */}
            <ScrollView style={styles.homeContainer}>
                {/* Ilustração Inicial */}
                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../assets/logo-horizontal.png')} // Altere o caminho conforme necessário
                        style={styles.bannerImage}
                    />
                    <Text style={styles.bannerText}>
                        "Organize suas tarefas e mantenha seu dia mais leve!"
                    </Text>
                </View>

                {/* Seção de Tarefas */}
                <Text style={styles.sectionTitle}>Tarefas</Text>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Task')}
                    >
                        <Image
                            source={require('../assets/task.png')}
                            style={styles.cardImage}
                        />
                        <Text style={styles.cardText}>Ver Tarefas</Text>
                    </TouchableOpacity>
                </View>

                {/* Seção de Livros Favoritos */}
                <Text style={styles.sectionTitle}>Livros Favoritos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity style={styles.bookCard}>
                        <Image source={require('../assets/book1.jpg')} style={styles.bookImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bookCard}>
                        <Image source={require('../assets/book2.png')} style={styles.bookImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bookCard}>
                        <Image source={require('../assets/book3.jpg')} style={styles.bookImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bookCard}>
                        <Image source={require('../assets/book4.jpg')} style={styles.bookImage} />
                    </TouchableOpacity>
                </ScrollView>

                {/* Frase Motivacional */}
                <View style={styles.motivation}>
                    <Text style={styles.motivationText}>
                        "A cada passo, você se aproxima do seu objetivo!"
                    </Text>
                </View>
            </ScrollView>

            {/* Menu e Popup */}
            <MenuOptions navigation={navigation} selected="home" />
            <PopupHome />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    navbar: {
        width: '100%',
        height: 75,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    navbarText: {
        fontSize: 28,
        fontWeight: '500',
        color: '#f77600',
    },
    homeContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    bannerContainer: {
        alignItems: 'center',
        marginVertical: 20,
        padding: 16,
        backgroundColor: '#003758',
        borderRadius: 10,
    },
    bannerImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    bannerText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    card: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImage: {
        width: 50,
        height: 50,
        marginBottom: 8,
    },
    cardText: {
        fontSize: 16,
        color: '#555',
    },
    horizontalScroll: {
        marginVertical: 10,
    },
    bookCard: {
        width: 100,
        marginRight: 10,
        alignItems: 'center',
    },
    bookImage: {
        width: 90,
        height: 140,
        borderRadius: 8,
    },
    bookTitle: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    motivation: {
        marginVertical: 20,
        padding: 16,
        backgroundColor: '#FFF8E1',
        borderRadius: 8,
        marginBottom: 120,
    },
    motivationText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
});
