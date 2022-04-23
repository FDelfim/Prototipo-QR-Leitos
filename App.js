import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack"

import Menu from "./src/screens/menu";
import Leito from './src/pages/listLeitos/leito'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Leito" component={Leito} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
