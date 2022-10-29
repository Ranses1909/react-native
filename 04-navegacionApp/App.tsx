import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import ComplexDrawer from './src/navigator/ComplexDrawer';
import { StackNavigator } from './src/navigator/StackNavigator';
import AppProvider from './src/context/Context';
const App = () => {
  return (
    // para respetar las reglas del reactNavigation lo dejamos de padre
    <NavigationContainer>

      <AppState>
  {/* <StackNavigator /> */}
      <ComplexDrawer />
    </AppState>

    </NavigationContainer>
  );
};

const AppState = ({children}: any) =>{
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}


export default App;

