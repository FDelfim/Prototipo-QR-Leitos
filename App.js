import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Component } from 'react';

import { Route, RouteStack } from './src/route';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    );
  }
}
