import React from 'react';
import { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from './style'
import Leitos from './leito'


export default class ListLeitos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leitos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.leitos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ }) =>
                        <View style={styles.containerLeitos}>
                            <Leitos />
                        </View>
                    }
                />
            </View>
        );
    }

}