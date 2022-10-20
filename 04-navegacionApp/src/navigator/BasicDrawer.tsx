import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StackNavigator} from './StackNavigator';
import SettingsScreens from '../../../04-navegacionApp/src/screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const BasicDrawer = () => {
  // we use a react's hook to get the window dimensions
const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator    screenOptions={{
      drawerType: width >= 400 ? 'permanent' : 'front', // Menú modo horizontal
      headerShown: false  ,// Oculta la hamburguesa
      drawerStyle:{backgroundColor: '#779BE7', width: 200},
      // drawerInactiveTintColor:'gray',
      drawerLabelStyle:{  color: 'black',fontWeight: 'bold', }
      }} 
      >
      <Drawer.Screen name="StacNavigator" options={{title:'Home'}}  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreens" options={{title:'Settings'}}  component={SettingsScreens} />
    </Drawer.Navigator>
  );
};
export default BasicDrawer;
