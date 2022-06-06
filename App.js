import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { LogBox } from 'react-native';


import Menu from "./src/config/menu";
import Leito from './src/pages/bottomMenu/listLeitos/leito';
import Login from './src/pages/login';
import Lista from './src/pages/bottomMenu/listLeitos/listas/lista';
import Ala from './src/pages/bottomMenu/listLeitos/listas/listAlas';
import Convenio from './src/pages/bottomMenu/listLeitos/listas/listConvenio';
import Tipo from './src/pages/bottomMenu/listLeitos/listas/listTipo'

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
