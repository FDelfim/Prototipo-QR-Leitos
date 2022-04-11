import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './style'

export default function LerQrCode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`QR CODE ${type} de ${data} foi escaneado!`);
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
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <TouchableOpacity
                style={styles.button}
                onPress={() => { setScanned(false) }}
            >
                <Text style={styles.textButton}>TOQUE PARA ESCANEAR OUTRO QR CODE</Text>
            </TouchableOpacity>}
        </View>
    );
}