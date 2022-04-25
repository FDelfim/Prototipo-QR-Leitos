import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 48,
        color: "#198CFF",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
        padding: 10,
        width: "90%",
        height: 50,
        borderBottomColor: "#198CFF",
        borderBottomWidth: 1,
    },
    buttonLogin: {
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#198CFF",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonLogin: {
        color: "white",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        marginTop: 20,
        color: "#4d5156",
    },
    linkSubscribe: {
        color: "#1877f2",
        fontSize: 16,
    },
});

export default styles;