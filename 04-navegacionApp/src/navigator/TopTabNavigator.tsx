import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AlbumScreen from '../screens/AlbumScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import {colores} from '../theme/AppTheme'

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  // destructuramos solo el inset del top para tener un control y no aplicar safeArea en todos lados solo en top (this is more for IOS).
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarPressColor: colores.secondaryColor,
      tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: colores.secondaryColor,
      },
      tabBarIcon: ({focused, color})=>{
      let iconName:any = null ;
      // console.log(iconName)
      // displaying the names(icons) of every tab
      switch(route.name){
        case 'ChatScreen':
          iconName= "chatbubbles-outline"
           break;
        case 'ContactScreen': 
        iconName= 'people-outline'
          break;
        case 'AlbumScreen':
         iconName= "albums-outline"
          break;
      }
      // ECMS6, same color that you passed to the label
    return <Icon name={iconName} size={20} color={color}></Icon>
    }
  })} 
  
    // style={{   FOR IOS
    //   paddingTop: top,
    // }}

    // Style object for the component wrapping the screen content.
    sceneContainerStyle={{
      backgroundColor:'white',
    }}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;