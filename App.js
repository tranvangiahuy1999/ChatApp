/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/routes/MainStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
    </NavigationContainer>
  );
};

export default App;
