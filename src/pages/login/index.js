import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginFirebase = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Menu", { idUser: user.uid });
            })
            .catch((error) => {
                setErrorLogin(true);
                const errorCode = error.errorCode;
                const errorMessage = error.errorMessage;
            });
    };

    // useEffect(() => {
    //   firebase.onAuthStateChanged(function (user) {
    //     if (user) {
    //       navigation.navigate("ListLeitos", { idUser: user.uid });
    //     }
    //   });
    // }, []);

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
                <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>Entrar</Text>
                </TouchableOpacity>
            )}
            {/* <Text style={styles.registration}>
        Não possui uma conta? Se inscreva
        <Text
          style={styles.linkSubscribe}
          // onPress={navigation.navigate("NewUser")}
        >
          {" "}
          aqui
        </Text>
      </Text> */}
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
}