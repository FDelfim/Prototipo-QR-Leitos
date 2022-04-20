import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: "center",
    },

    containerLeitos: {
        paddingTop: 10,
        alignItems: "flex-start",
    },

    leito: {
        paddingLeft: 10,
        textAlign: "center",
        backgroundColor: '#dcdcdc',
        width: '97%',
        height: 75,
        borderRadius: 15,
        marginBottom: 10,
        justifyContent: "center",
    },

    titleOcupados: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },

    titleLivres: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },

    texto: {
        paddingTop: 5,
        fontSize: 12,
    },

    status: {
        left: '350%',
    }

});

export default styles