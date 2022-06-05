import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style'
import database from '../../config/database'

// UUID -> Gerador de ID Único

export default function LerQrCode({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('   ')
    const [leito, setLeito] = useState(null);


    function seachLeito(text) {
        const l = []
        database.collection('Leito').where('codigo', '==', text).onSnapshot((querry) => {
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
        seachLeito(data);
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
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.scanner}
            />
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
            {scanned && <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Leito',
                        {
                            idid: leito.id,
                            id: leito.codigo,
                            endereco: leito.endereco,
                            estado: leito.status,
                            ultimaMod: leito.ultimaMod.toDate()
                        }
                    )
                    setScanned(false), setText(' ')
                }}
            >
                <Text style={styles.textButton}>ACESSAR LEITO</Text>
            </TouchableOpacity>}
        </View>
    );
}