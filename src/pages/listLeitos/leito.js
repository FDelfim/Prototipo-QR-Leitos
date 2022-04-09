import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';

export default function Leito() {
    return (
        <View style={styles.leito}>
            <Text style={styles.title}>Leito x</Text>
            <Feather style={styles.status} name="circle" size={20} color={'#32cd32'} />
        </View>
    );
}