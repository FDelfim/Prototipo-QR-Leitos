import React from 'react';
import { useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './style'
import Leitos from './leito'
import database from '../../config/firebase'

export default function ListLeitos() {

    const [leitos, setLeitos] = useState([])

    function leitosLivres(id) {
        database.collection("Leito").doc(id).search()
    }

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {
            const list = []
            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setLeitos(list)
        })
    }, [])


    return (
        <View style={styles.containerLeitos}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Leitos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity>
                                <FontAwesome
                                    name='circle'
                                    size={23}
                                    color='#c9f2a2'>
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text>

                            </Text>
                        </View>
                    );
                }}  >

            </FlatList>
        </View>
    );
}

// export default class ListLeitos extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             leitos: [[id = '1', 1],
//             [id = '2', 2],
//             [id = '3', 3],
//             [id = '4', 4],
//             [id = '5', 5],
//             [id = '6', 6],
//             [id = '7', 7],
//             [id = '8', 8],
//             [id = '9', 9],
//             [id = '10', 10],
//             [id = '11', 11]]
//         }
//     }

//     render() {
//         return (
//             <View>
//                 <FlatList
//                     data={this.state.leitos}
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ }) =>
//                         <View style={styles.containerLeitos}>
//                             {<Leitos />}
//                         </View>
//                     }
//                 />
//             </View>
//         );
//     }

// }