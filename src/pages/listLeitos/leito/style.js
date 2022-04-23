import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerStatus: {
        paddingTop: 10,
        flex: 1,
        color: "#ffffff",
        alignItems: 'center'
    },

    containerDados: {
        paddingTop: 10,
        flex: 1,
        color: "#ffffff",
        flexDirection: 'column',
        width: "100%"
    },

    title: {
        backgroundColor: '#dcdcdc',
        width: '97%',
        flexDirection: 'row',
        height: 75,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    containerDesc: {
        backgroundColor: '#E7E6E1',
        width: '97%',
        flexDirection: 'column',
        borderRadius: 15,
        marginBottom: 10,
    },

    titleFont: {
        fontSize: 32,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: "#198CFF"
    },

    detailsFont: {
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 10,
    },

    detailsEnd: {
        fontSize: 24,
        paddingLeft: 10,
        paddingTop: 1,

    }
});

export default styles