import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StackNavigator} from './StackNavigator';
import SettingsScreens from '../../../04-navegacionApp/src/screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const BasicDrawer = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="StacNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreens" options={{title:'Settings'}}  component={SettingsScreens} />
    </Drawer.Navigator>
  );
};
export default BasicDrawer;
