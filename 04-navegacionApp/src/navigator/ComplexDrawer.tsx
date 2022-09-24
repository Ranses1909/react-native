import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {StackNavigator} from './StackNavigator';
import SettingsScreens from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/AppTheme';

const Drawer = createDrawerNavigator();

const ComplexDrawer = () => {
  // we use a react's hook to get the window dimensions
const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
    // we don't want to put many lines of code here
    drawerContent={(props) =>  <MenuInterno {...props}/> }
    screenOptions={{
      drawerType: width >= 500 ? 'permanent' : 'front', // Menú modo horizontal
      headerShown: false  ,// Oculta la hamburguesa
      drawerStyle:{backgroundColor: 'white', width: 200},
      // styling label in the drawer
      drawerLabelStyle:{
        color: 'black',
        fontWeight: 'bold',
      }
      
   }} >
      <Drawer.Screen name="StacNavigator" options={{}}  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreens" options={{}}  component={SettingsScreens} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}:DrawerContentComponentProps) => {
  return ( 
    // we use DrawerContentScrollView to make a custom drawer basically
    <DrawerContentScrollView >
      <View style={styles.avatarContainer}>

        <Image
          source={{
            uri:'https://rentkh.com/assets/avatar.jpeg'
          }}
         style={styles.avatar}
         />

      </View>
      {/* Menu options */}
     <View style={styles.menuContainer}>

       <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('StackNavigator')}>
        <Text style={styles.menuText}>Navegation</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate('SettingsScreens')}>
         <Text style={styles.menuText}>Settings</Text>
         </TouchableOpacity>
         </View>

    </DrawerContentScrollView>
  )
}


export default ComplexDrawer;
