import React from 'react';
import { useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import database from '../../config/database'

export default function ListStatus({ navigation }) {

    const [leitos, setLeitos] = useState([])
    const [livre, setLivres] = useState([])
    const [ocupados, setOcupados] = useState([])
    const [aLimp, setALimp] = useState([])
    const [aFor, setAFor] = useState([])

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {
            const list = [];
            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setLeitos(list)
        })
        setLiv()
        setOc()
        setAl()
        setAf()
    }, [])

    function setLiv() {
        const list = [];
        leitos.forEach((Leito) => {
            if (Leito.status.path == 'estadoDoLeito/livre') {
                list.push(Leito)
            }
            setLivres(list)
        });
    }

    function setAl() {
        const list = [];
        leitos.forEach((Leito) => {
            if (Leito.status.path == 'estadoDoLeito/aguardando higienizacao e limpeza' || Leito.status.path == 'estadoDoLeito/em higienizacao') {
                list.push(Leito)
            }
            setALimp(list)
        });
    }

    function setAf() {
        const list = [];
        leitos.forEach((Leito) => {
            if (Leito.status.path == 'estadoDoLeito/aguardando forragem' || Leito.status.path == 'estadoDoLeito/em processo de forragem') {
                list.push(Leito)
            }
            setAFor(list)
        });
    }

    function setOc() {
        const list = [];
        leitos.forEach((Leito) => {
            if (Leito.status.path == 'estadoDoLeito/ocupado' || Leito.status.path == 'estadoDoLeito/em alta') {
                list.push(Leito)
            }
            setOcupados(list)
        });
    }

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ListaDeLeitos', {
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
                        navigation.navigate('ListaDeLeitos', {
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
                navigation.navigate('ListaDeLeitos', {
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
                    navigation.navigate('ListaDeLeitos', {
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
        height: 165,
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
        paddingTop: 40,
        fontSize: 12,
        alignSelf: 'center'
    }
})