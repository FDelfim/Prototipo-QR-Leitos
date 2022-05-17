import React, { useState, useEffect, route } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { ModalPicker } from "../../../../components/ModalPicker";
import { LogBox } from 'react-native';


import database from '../../../config/database'
import styles from '../leito/style'

export default function Leito({ route, navigation }) {

    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

    const { idid, id, endereco, estado, ultimaMod } = route.params
    var estadoShow = estado.path.substr(14, estado.path.length);
    estadoShow = estadoShow[0].toUpperCase() + estadoShow.substr(1);

    const [statusl, setStatusl] = useState(estadoShow)

    const [isModalVisble, setisModalVisible] = useState(false)
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setOption = (option) => {
        setStatusl(option.toLowerCase())
    }

    return (
        <View style={styles.containerStatus}>

            <View style={styles.title}>
                <Text style={styles.titleFont}>
                    {id}
                </Text>
            </View>

            <View style={styles.containerDesc}>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.detailsFont}>Endereço </Text>
                    <Text style={styles.detailsEnd}>Ala: {endereco[0]}</Text>
                    <Text style={styles.detailsEnd}>Tipo: {endereco[1]} - {endereco[2]} </Text>
                    <Text style={styles.detailsEnd}>Ultima Modificação: {new Date(ultimaMod).toUTCString()} </Text>
                </View>
            </View>

            <View style={[{ backgroundColor: '#E7E6E1', width: '97%', borderRadius: 15, paddingBottom: 15 }]}>
                <View style={styles.containerDesc} >
                    <Text style={styles.detailsFont}>Estado do Leito </Text>
                </View>

                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        onPress={() => changeModalVisibility(true)}>
                        <Text style={[styles.detailsEnd]}>{statusl}</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisble}
                        nRequestClose={() => changeModalVisibility(false)}
                    >
                        <ModalPicker
                            changeModalVisibility={changeModalVisibility}
                            setOption={setOption}
                        />

                    </Modal>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonLabel}
                onPress={() => {
                    // database.collection('modificaStatus').add({
                    //     IdLeito: refLeito,
                    //     data_hora: new Date(),
                    //     modificacao: database.collection('estadoDoLeito').doc(statusl)
                    // })
                    database.collection('Leito').doc(idid).update({
                        status: database.collection('estadoDoLeito').doc(statusl),
                        ultimaMod: new Date()
                    })
                    navigation.navigate('Menu')
                }
                }
            >
                <View>
                    <Text style={styles.buttonText}>
                        Salvar
                    </Text>
                </View>
            </TouchableOpacity>

        </View >

    );

}