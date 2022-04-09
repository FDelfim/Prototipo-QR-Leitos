import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Text, View, FlatList } from 'react-native';
import styles from './style'
import Leitos from './leito'


// export default class ListLeitos extends Component {
export default function ListLeitos() {

    return (
        <View>
            <View style={styles.containerLeitos}>
                <Leitos />
            </View>

            <View style={styles.containerLeitos}>
                <Leitos />
            </View>

            <View style={styles.containerLeitos}>
                <Leitos />
            </View>

            <View style={styles.containerLeitos}>
                <Leitos />
            </View>

            <View style={styles.containerLeitos}>
                <Leitos />
            </View>
            <View style={styles.containerLeitos}>
                <Leitos />
            </View>
        </View>
    );

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         leitos: [
    //             { id: "1", nome: 'Leito 1' },
    //             { id: "2", nome: 'Leito 2' },
    //             { id: "3", nome: 'Leito 3' },
    //             { id: "4", nome: 'Leito 4' },
    //             { id: "5", nome: 'Leito 5' },
    //             { id: "6", nome: 'Leito 6' },
    //             { id: "7", nome: 'Leito 7' },
    //             { id: "8", nome: 'Leito 8' },
    //         ]
    //     }
    // }

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <FlatList
    //                 data={this.state.leitos}
    //                 keyExtractor={(item) => item.id}
    //                 renderItem={({ item }) =>
    //                     <View style={styles.containerLeitos}>
    //                         <Text style={styles.text}> {item.nome}</Text>
    //                     </View>
    //                 }
    //             />
    //         </View>
    //     );
    // }
}