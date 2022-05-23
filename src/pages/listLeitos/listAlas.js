import React from "react";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ListAlas({ route, navigation }) {

    const { leitos, cor } = route.params

    const [sul, setSul] = useState([]);
    const [norte, setNorte] = useState([]);
    const [leste, setLeste] = useState([]);
    const [oeste, setOeste] = useState([]);

    useEffect(() => {

        const listN = [];
        const listS = [];
        const listO = [];
        const listL = [];

        leitos.forEach((Leito) => {
            if (Leito.endereco[0] == "ala norte") {
                listN.push(Leito);
            }
        });

        leitos.forEach((Leito) => {
            if (Leito.endereco[0] == "ala sul") {
                listS.push(Leito);
            }
        });

        leitos.forEach((Leito) => {
            if (Leito.endereco[0] == "ala leste") {
                listL.push(Leito);
            }
        });

        leitos.forEach((Leito) => {
            if (Leito.endereco[0] == "ala oeste") {
                listO.push(Leito);
            }
        });

        setNorte(listN);
        setSul(listS);
        setLeste(listL);
        setOeste(listO);

    }, []);


    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Convênio', {
                            leitos: norte,
                            cor: cor
                        });
                    }}
                >
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome name='arrow-circle-up' color={cor} style={styless.alas} />
                                <Text style={[styless.title]}>   LEITOS ALA NORTE - {norte.length}
                                </Text>
                            </View>
                            <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Convênio', {
                                leitos: sul,
                                cor: cor
                            });
                        }}
                    >
                        <View style={[styless.container]}>
                            <View style={[styless.lives]}>
                                <View style={[styless.head]}>
                                    <FontAwesome name='arrow-circle-down' color={cor} style={styless.alas} />
                                    <Text style={[styless.title]}>   LEITOS ALA SUL - {sul.length}
                                    </Text>
                                </View>
                                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Convênio', {
                        leitos: leste,
                        cor: cor
                    });
                }}
            >
                <View style={[styless.container]}>
                    <View style={[styless.lives]}>
                        <View style={[styless.head]}>
                            <FontAwesome name='arrow-circle-right' color={cor} style={styless.alas} />
                            <Text style={[styless.title]}>   LEITOS ALA LESTE - {leste.length}
                            </Text>
                        </View>
                        <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Convênio', {
                            leitos: oeste,
                            cor: cor
                        });
                    }}
                >
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome name='arrow-circle-left' color={cor} style={styless.alas} />
                                <Text style={[styless.title]}>   LEITOS ALA OESTE - {oeste.length}
                                </Text>
                            </View>
                            <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
    alas: {
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