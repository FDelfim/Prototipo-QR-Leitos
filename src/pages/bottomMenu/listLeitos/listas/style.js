import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerLeitos: {
        paddingTop: 10,
        flex: 1,
        width: '100%'
    },

    leito: {
        alignItems: "center",
        alignSelf: 'center',
        paddingLeft: 10,
        backgroundColor: '#dcdcdc',
        width: '95%',
        flexDirection: 'row',
        height: 75,
        borderRadius: 15,
        marginBottom: 10,
    },

    title: {
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
    },

    livre: {
        fontSize: 20,
    }
});

export default styles