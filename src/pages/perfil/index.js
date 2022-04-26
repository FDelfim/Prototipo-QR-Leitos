import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './style'

export default function Perfil({ navigation }) {
    return (
        <View style={styles.containerPerfil}>
            <View style={styles.head}>
                <View>
                    <FontAwesome
                        name='circle'
                        size='80'
                        color='grey' />
                </View>
                <View>
                    <Text style={styles.user}>
                        João
                    </Text>
                </View>
            </View>
            <View style={styles.containerCargo}>
                <Text style={styles.cargo}>
                    Cargo:
                </Text>
                <Text style={styles.cargo2}>
                    Enfermeiro
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}>
                <View style={styles.logout}>
                    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
                        Sair
                    </Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}