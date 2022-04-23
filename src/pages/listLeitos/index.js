import React from 'react';
import { useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './style'
import database from '../../config/database'

export default function ListLeitos({ navigation }) {

    const [leitos, setLeitos] = useState([])

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {
            const list = [];
            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setLeitos(list)
        })
    }, [])


    return (
        <View style={styles.containerLeitos}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={leitos}
                renderItem={({ item }) => {
                    console.log({ item })
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Leito", {
                                    id: item.id,
                                    endereco: item.endereco
                                })
                            }}>
                            <View style={styles.leito}>
                                <FontAwesome
                                    name="circle"
                                    size='20'
                                    color='green' />
                                <Text style={styles.title}>
                                    {item.codigo}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
