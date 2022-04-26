import React, { useState, route } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from '../leito/style'
import { ModalPicker } from "../../../../components/ModalPicker";

export default function Leito({ route, navigation }) {

    const { id, endereco } = route.params

    const [status, setStatus] = useState('<                                   >')

    const [isModalVisble, setisModalVisible] = useState(false)
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setOption = (option) => {
        setStatus(option)
    }

    return (
        <View style={styles.containerStatus}>

            <View style={styles.title}>
                <Text style={styles.titleFont}>
                    {id}
                </Text>
            </View>

            <View style={styles.containerDesc}>
                <View style={{ paddingBottom: 10, }}>
                    <Text style={styles.detailsFont}>Endereço </Text>
                    <Text style={styles.detailsEnd}>Ala: {endereco[0]}</Text>
                    <Text style={styles.detailsEnd}>Tipo: {endereco[1]}</Text>
                    <Text style={styles.detailsEnd}>Tipo: {endereco[2]}</Text>
                </View>
            </View>

            <View style={[{ backgroundColor: '#E7E6E1', width: '97%', borderRadius: 15, paddingBottom: 15 }]}>
                <View style={styles.containerDesc} >
                    <Text style={styles.detailsFont}>Estado do Leito </Text>
                </View>

                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        onPress={() => changeModalVisibility(true)}>
                        <Text style={[styles.detailsEnd]}>{status}</Text>
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
                onPress={() => navigation.navigate("Menu")}
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