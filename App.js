import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { LogBox } from 'react-native';


import Menu from "./src/screens/menu";
import Leito from './src/pages/listLeitos/leito';
import Login from './src/pages/login';
import Lista from './src/pages/listLeitos/lista';
import Ala from './src/pages/listLeitos/listAlas';
import Convenio from './src/pages/listLeitos/listConvenio';
import Tipo from './src/pages/listLeitos/listTipo'

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
      <Stack.Screen name="Leito" component={Leito} getId={({ params }) => params.id} />
      <Stack.Screen name="Lista de Leitos" component={Lista} getId={({ params }) => params.id} />
      <Stack.Screen name="Alas" component={Ala} getId={({ params }) => params.id} />
      <Stack.Screen name="Convênio" component={Convenio} getId={({ params }) => params.id} />
      <Stack.Screen name="Tipo" component={Tipo} getId={({ params }) => params.id} />
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
