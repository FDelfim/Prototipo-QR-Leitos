import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style'
import database from '../../config/database'

export default function LerQrCode({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('   ')
    const [leito, setLeito] = useState(null);


    function seachLeito(txt) {
        database.collection('Leito').where('id'.equalsTo(txt)).onSnapshot((querry) => {
            const l = []
            querry.forEach((doc) => {
                l.push(doc.data());
            })
            setLeito(l[0])
        }
        )
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setText(data);
        seachLeito(text);
        console.log(text)
    };

    if (hasPermission === null) {
        return <Text style={styles.text}>Aguardando permissão de acesso a câmera!</Text>;
    }
    if (hasPermission === false) {
        return <Text style={styles.text}>Sem acesso a câmera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned => {
                    // (
                    //     navigation.navigate('Login', {
                    //         idid: leito.id,
                    //         id: leito.codigo,
                    //         endereco: leito.endereco,
                    //         estado: leito.status,
                    //         ultimaMod: leito.ultimaMod.toDate()
                    //     })
                    // );
                }}
                style={styles.scanner}
            />
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
            {scanned && <TouchableOpacity
                style={styles.button}
                onPress={() => { setScanned(false), setText(' ') }}
            >
                <Text style={styles.textButton}>ESCANEAR OUTRO QR CODE</Text>
            </TouchableOpacity>}
        </View>
    );
}