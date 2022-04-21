import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';

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
