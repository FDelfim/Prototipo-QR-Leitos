import React from 'react'
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerPerfil: {
        paddingTop: 10,
        flex: 1,
        color: "#ffffff",
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
    },

    user: {
        fontSize: 32,
        paddingLeft: 100,
        color: 'blue'
    },

    cargo: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },

    cargo2: {
        fontSize: 20,
    },

    containerCargo: {
        marginTop: 15,
        paddingLeft: 15,
        backgroundColor: '#dcdcdc',
        width: '97%',
        flexDirection: 'column',
        borderRadius: 15,
        paddingBottom: 15,
        alignSelf: 'center'
    },

    logout: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 50,
        width: '50%',
        height: 50,
        position: 'absolute',
        bottom: -440,

    }
})

export default styles;