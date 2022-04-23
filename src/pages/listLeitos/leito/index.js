import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from '../leito/style'

export default function Leito({ navigation }, props) {

    return (
        <View style={styles.containerStatus}>

            <View style={styles.title}>
                <Text style={styles.titleFont}>
                    Leito A
                </Text>
            </View>

            <View style={styles.containerDesc}>
                <View style={{ paddingBottom: 10, }}>
                    <Text style={styles.detailsFont}>Endereço </Text>
                    <Text style={styles.detailsEnd}>Ala: Norte</Text>
                    <Text style={styles.detailsEnd}>Tipo: SUS</Text>
                    <Text style={styles.detailsEnd}>Tipo: Criança</Text>
                </View>
            </View>

            <View style={styles.containerDesc} >
                <Text style={styles.detailsFont}>Estado do Leito </Text>
            </View>

        </View >

    );

}