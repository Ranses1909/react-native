import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from "../../../04-navegacionApp/src/screens/Pagina1Screen";
import Pagina2Screen from '../../../04-navegacionApp/src/screens/Pagina2Screen';
import Pagina3Screen from '../../../04-navegacionApp/src/screens/Pagina3Screen';
import {styles} from '../../../04-navegacionApp/src/theme/AppTheme'
import PersonaScreen from '../../../04-navegacionApp/src/screens/PersonaScreen';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button } from 'react-native';

// if we dont receive any data in the screen we declare type as undefined (recommended on documentation)
// giving a type
export type RootStackParams = {
Pagina1Screen: undefined,
Pagina2Screen: undefined,
Pagina3Screen: undefined,
PersonaScreen: {id:number, name:string},
}
interface Props extends DrawerScreenProps<any, any>{};
// este es el stack que tiene todas esas screens de arriba
// giving a type for all content of the stack
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {

  return (
    <Stack.Navigator
    // You can pass a prop named screenOptions to the Group component to configure screens inside the group, where you can specify an object with different options.
    screenOptions={{
      // headerStyle:{elevation: 0},
      // headerShown: false,
      cardStyle:{ backgroundColor:'white' } 
    }}
    >

      <Stack.Screen name="Pagina1Screen" options={{title: 'Pagina 1',   headerTitleAlign: 'center'}} component={Pagina1Screen} />

      <Stack.Screen name="Pagina2Screen" options={{title: 'Pagina 2',   headerTitleAlign: 'center'}} component={Pagina2Screen} />

      <Stack.Screen name="Pagina3Screen" options={{title: 'Pagina 3',   headerTitleAlign: 'center'}} component={Pagina3Screen} />

      <Stack.Screen name="PersonaScreen" component={PersonaScreen}/>
    </Stack.Navigator>
  )}; 