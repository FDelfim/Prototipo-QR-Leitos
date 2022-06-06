import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './style'

export default function Lista({ route, navigation }) {

    const { leitos, cor } = route.params

    return (
        <View style={[styles.containerLeitos]}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={leitos}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Leito", {
                                    idid: item.id,
                                    id: item.codigo,
                                    endereco: item.endereco,
                                    estado: item.status,
                                    ultimaMod: item.ultimaMod.toDate(),
                                })
                            }}>
                            <View style={styles.leito}>
                                <FontAwesome
                                    name="circle"
                                    color={cor} style={styles.livre} />
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
