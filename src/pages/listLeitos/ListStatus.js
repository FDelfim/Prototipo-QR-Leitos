import React from 'react';
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import database from '../../config/database'

export default function ListStatus({ navigation }) {

    var [livre, setLivres] = useState([])
    var [ocupados, setOcupados] = useState([])
    var [aLimp, setALimp] = useState([])
    var [aFor, setAFor] = useState([])

    const [ocupacao, setOcupacao] = useState(0)

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {

            let list = [];
            let listL = [];
            let listO = [];
            let listAl = [];
            let listAf = [];

            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/livre') {
                    listL.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/ocupado' || Leito.status.path == 'estadoDoLeito/em alta') {
                    listO.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/aguardando higienizacao' || Leito.status.path == 'estadoDoLeito/em higienizacao') {
                    listAl.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/aguardando forragem' || Leito.status.path == 'estadoDoLeito/em processo de forragem') {
                    listAf.push(Leito)
                }
            })

            setLivres(listL)
            setOcupados(listO)
            setALimp(listAl)
            setAFor(listAf)

            setOcupacao(() => {
                return listO.length * 100 / list.length
            })

        })
    }, [])


    return (
        <View>
            <View>

                <View style={[styless.container]}>
                    <View style={styless.ocupacao}>
                        <Text style={styless.textOc}>Taxa de Ocupação: {ocupacao.toFixed(2)}%</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Alas', {
                        leitos: livre,
                        cor: 'green'
                    })
                }}>
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome
                                    name="circle" style={styless.livre} />
                                <Text style={[styless.title]}>   LEITOS LIVRES - {livre.length}</Text>
                            </View>
                            <Text style={styless.shortdescription}>
                                NO MOMENTO EXISTEM {livre.length} LEITOS LIVRES
                            </Text>
                            <Text style={styless.text}>
                                TOQUE MAIS INFORMAÇÕES!
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Alas', {
                            leitos: ocupados,
                            cor: 'red'
                        })
                    }}>
                        <View style={[styless.container]}>
                            <View style={[styless.lives]}>
                                <View style={[styless.head]}>
                                    <FontAwesome
                                        name="circle" style={styless.ocupado} />
                                    <Text style={[styless.title]}>   LEITOS OCUPADOS - {ocupados.length}</Text>
                                </View>
                                <Text style={styless.shortdescription}>
                                    NO MOMENTO EXISTEM {ocupados.length} LEITOS OCUPADOS
                                </Text>
                                <Text style={styless.text}>
                                    TOQUE MAIS INFORMAÇÕES!
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Alas', {
                    leitos: aLimp,
                    cor: 'blue'
                })
            }}>
                <View style={[styless.container]}>
                    <View style={[styless.lives]}>
                        <View style={[styless.head]}>
                            <FontAwesome
                                name="circle" style={styless.limpeza} />
                            <Text style={[styless.title]}>   LEITOS HIGIENIZAÇÃO - {aLimp.length}</Text>
                        </View>
                        <Text style={styless.longdescription}>
                            NO MOMENTO EXISTEM {aLimp.length} LEITOS AGUARDANDO HIGIENIZAÇÃO
                        </Text>
                        <Text style={styless.text}>
                            TOQUE MAIS INFORMAÇÕES!
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>

            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Alas', {
                        leitos: aFor,
                        cor: 'yellow'
                    })
                }}>
                    <View style={[styless.container]}>
                        <View style={[styless.lives]}>
                            <View style={[styless.head]}>
                                <FontAwesome
                                    name="circle" style={styless.forragem} />
                                <Text style={[styless.title]}>   LEITOS FORRAGEM - {aFor.length}</Text>
                            </View>
                            <Text style={styless.longdescription}>
                                NO MOMENTO EXISTEM {aFor.length} LEITOS AGUARDANDO FORRAGEM
                            </Text>
                            <Text style={styless.text}>
                                TOQUE MAIS INFORMAÇÕES!
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    );
}

const styless = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    lives: {
        flexDirection: 'column',
        backgroundColor: '#dcdcdc',
        width: '94%',
        height: 150,
        paddingTop: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    livre: {
        fontSize: 26,
        color: 'green'
    },
    ocupado: {
        fontSize: 26,
        color: 'red'
    },
    limpeza: {
        fontSize: 26,
        color: 'blue'
    },
    forragem: {
        fontSize: 26,
        color: 'yellow'
    },
    head: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
    },
    shortdescription: {
        fontSize: 16,
        paddingTop: 25,
        alignSelf: 'center',
    },
    longdescription: {
        fontSize: 12,
        paddingTop: 25,
        alignSelf: 'center',
    },
    text: {
        color: '#6495ED',
        paddingTop: 20,
        fontSize: 12,
        alignSelf: 'center'
    },
    ocupacao: {
        backgroundColor: '#dcdcdc',
        width: '94%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOc: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})