import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import BasicDrawer from './src/navigator/BasicDrawer';
const App = () => {
  return (
    <NavigationContainer>
  {/* <StackNavigator /> */}
      <BasicDrawer />
    </NavigationContainer>
  );
};

export default App;

