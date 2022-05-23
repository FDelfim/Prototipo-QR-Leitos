import React from "react";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ListConvenio({ route, navigation }) {

    const { leitos, cor } = route.params

    const [particular, setParticular] = useState([]);
    const [sus, setSus] = useState([]);

    useEffect(() => {
        const listS = []
        const listP = []

        leitos.forEach((Leito) => {
            if (Leito.endereco[1] == "particular") {
                listP.push(Leito);
            }
        });

        leitos.forEach((Leito) => {
            if (Leito.endereco[1] == "sus") {
                listS.push(Leito);
            }
        });

        setParticular(listP);
        setSus(listS);

    }, []);

    return (
        <View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Lista de Leitos', {
                            leitos: sus,
                            cor: cor
                        });
                    }}
                >
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome name='ambulance' color={cor} style={styless.convenio} />
                                <Text style={[styless.title]}>   LEITOS SUS - {sus.length}</Text>
                            </View>
                            <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Lista de Leitos', {
                                leitos: particular,
                                cor: cor
                            });
                        }}
                    >
                        <View style={[styless.container]}>
                            <View style={[styless.lives]}>
                                <View style={[styless.head]}>
                                    <FontAwesome name='hospital-o' color={cor} style={styless.convenio} />
                                    <Text style={[styless.title]}>   LEITOS PARTICULAR - {particular.length}
                                    </Text>
                                </View>
                                <Text style={styless.text}>TOQUE PARA MAIS INFORMAÇÕES!</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
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
    shortdescription: {
        fontSize: 16,
        paddingTop: 15,
        alignSelf: "center",
    },
    text: {
        color: "#6495ED",
        paddingTop: 20,
        fontSize: 20,
        alignSelf: "center",
    },
    text: {
        color: '#6495ED',
        paddingTop: 15,
        fontSize: 12,
        alignSelf: 'center'
    },
});