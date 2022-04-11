import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style'

export default function LerQrCode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('   ')

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data);
        console.log('Type:' + type + '/nData: ' + data)
    };

    if (hasPermission === null) {
        return <Text style={styles.text}>Aguardando permissão de acessoa a câmera!</Text>;
    }
    if (hasPermission === false) {
        return <Text style={styles.text}>No access to camera</Text>;
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
                onPress={() => { setScanned(false), setText(' ') }}
            >
                <Text style={styles.textButton}>ESCANEAR OUTRO QR CODE</Text>
            </TouchableOpacity>}
        </View>
    );
}