import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: "#000000",
    },
    button: {
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#4D96FF",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 20,
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        color: "#ffffff",
        fontWeight: 'bold',
    },
    scanner: {
        width: 300,
        height: 300,
        overflow: 'hidden',
        borderRadius: 20,
    }
});

export default styles