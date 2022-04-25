import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import firebase from "../../config/firebase";

const database = firebase.firestore();

export default function Login({ navigation }, props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                var user = userCredential.user;
            })
            .catch((error) => {
                var erroCode = error.erroCode;
                var erroMessage = error.message;
            });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o email:"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite a senha:"
                type="text"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            {errorLogin === true ? (
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>Email ou senha inválidos</Text>
                </View>
            ) : (
                <View />
            )}
            {email === "" || senha === "" ? (
                <TouchableOpacity disabled="true" style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.buttonLogin} onPress={() => { }}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.registration}>
                Não possui uma conta? Se inscreva
                <Text
                    style={styles.linkSubscribe}
                // onPress={navigation.navigate("NewUser")}
                >
                    {" "}
                    aqui
                </Text>
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}