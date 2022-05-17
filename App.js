import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { LogBox } from 'react-native';


import Menu from "./src/screens/menu";
import Leito from './src/pages/listLeitos/leito';
import Login from './src/pages/login';
import Lista from './src/pages/listLeitos/lista';

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Leito" component={Leito} getId={({ params }) => params.id} />
      <Stack.Screen name="ListaDeLeitos" component={Lista} getId={({ params }) => params.id} />
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
