import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import ComplexDrawer from './src/navigator/ComplexDrawer';
const App = () => {
  return (
    <NavigationContainer>
  {/* <StackNavigator /> */}
      <ComplexDrawer />
    </NavigationContainer>
  );
};

export default App;

