import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './style'

export default function Perfil() {
    return (
        <View>
            <View style={styles.head}>
                <View>
                    <FontAwesome
                        name='circle'
                        size='80'
                        color='grey' />
                </View>
                <View>
                    <Text style={styles.user}>
                        User
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
        </View>
    );
}