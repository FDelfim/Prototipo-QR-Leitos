import React from "react";
4;
import { useEffect, useState } from "react";
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import database from "../../config/database";
import Lista from "./lista";

export default function ListTipo({ route, navigation }) {

    const { leitos, cor } = route.params

    const [adulto, setAdulto] = useState([]);
    const [infantil, setInfantil] = useState([]);

    useEffect(() => {

        const listA = [];
        const listC = []

        leitos.forEach((Leito) => {
            if (Leito.endereco[2] == "adulto") {
                listA.push(Leito);
            }
        });

        leitos.forEach((Leito) => {
            if (Leito.endereco[2] == "infantil") {
                listC.push(Leito);
            }
        });

        setAdulto(listA);
        setInfantil(listC);
    }, []);


    return (
        <View>
            <View>
                {infantil.length != 0 && <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Lista de Leitos", {
                            leitos: infantil,
                            cor: cor,
                        });
                    }}
                >
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome name='child' color={cor} style={styless.convenio} />
                                <Text style={[styless.title]}>   LEITOS INFANTIS - {infantil.length}
                                </Text>
                            </View>
                            <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                        </View>
                    </View>
                </TouchableOpacity>}
                <View>
                    {adulto.length != 0 && <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Lista de Leitos", {
                                leitos: adulto,
                                cor: cor,
                            });
                        }}
                    >
                        <View style={[styless.container]}>
                            <View style={[styless.lives]}>
                                <View style={[styless.head]}>
                                    <FontAwesome name='user' color={cor} style={styless.convenio} />
                                    <Text style={[styless.title]}>   LEITOS ADULTOS - {adulto.length}
                                    </Text>
                                </View>
                                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    );
}

const styless = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
    },
    lives: {
        flexDirection: "column",
        backgroundColor: "#dcdcdc",
        width: "94%",
        height: 120,
        paddingTop: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    convenio: {
        fontSize: 26,
    },
    head: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 20,
    },
    text: {
        color: '#6495ED',
        paddingTop: 15,
        fontSize: 12,
        alignSelf: 'center'
    },
});