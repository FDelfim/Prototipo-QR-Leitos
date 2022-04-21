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
// import firebase from "../../config/firebaseconfig";

export default function NewUser({ navigation }, props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
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
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome:"
        type="text"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
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
      {errorRegister === true ? (
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
      {email === "" || senha === "" || nome === "" ? (
        <TouchableOpacity disabled="true" style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>Cadastrar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonRegister} onPress={() => {}}>
          <Text style={styles.textButtonRegister}>Cadastrar</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.login}>
        Já possui uma conta? Entre
        <Text
          style={styles.linkLogin}
          onPress={() => navigation.navigate("Perfil")}
        >
          {" "}
          aqui
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
