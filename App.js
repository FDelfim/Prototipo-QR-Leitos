import * as React from 'react';
import Reacr, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"

import Routes from './src/route';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}
