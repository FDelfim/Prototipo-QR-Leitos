import React from 'react';
import { Component } from 'react';
import { View, FlatList } from 'react-native';

//faker

import styles from './style'
import Leitos from './leito'


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

export default function ListLeitos() {
    return (
        <View style={styles.containerLeitos}>
            <Leitos />
        </View>
    );
}