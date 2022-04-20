import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';

export default function Leito() {


    const [estado, setEstado] = useState("#32cd32");

    return (

        <View style={styles.container}>
            <View style={styles.leito}>
                <Text style={styles.titleOcupados}>• Leitos Ocupados</Text>
                <Text style={styles.texto}> No momento existem 57 leitos ocupados</Text>
            </View>

            <View style={styles.leito}>
                <Text style={styles.titleLivres}>• Leitos Livres</Text>
                <Text style={styles.texto}> No momento existem 11 leitos livres</Text>
            </View>
        </View>
    );
}