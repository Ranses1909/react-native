import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import {colores} from '../theme/AppTheme'
import { Platform, Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
// condicion para mostrar algunas cositas distintas si es para Ios o si es para android.
const Tabs = ()=>{
  return Platform.OS === 'ios'
  ?<TabsIos></TabsIos>
  :<TabsAndroid></TabsAndroid>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return(
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    screenOptions={({route})=> ({
    tabBarLabelStyle:{
    fontSize:15,
    },
    //i guess, this is how we access the icon 
    tabBarIcon : ({focused, color})=>{
      let iconName:string = '';
      // console.log(iconName)
      // displaying the names(icons) of every tab
      switch(route.name){
        case 'Tab1Screen':
           iconName = "bandage-outline"
           break;
        case 'TopTabNavigator': 
          iconName = "tablet-portrait-sharp"
          break;
        case 'StackNavigator':
          iconName = "file-tray-stacked-outline"
      }
      // ECMS6, same color that you passed to the label
    return  <Icon name={iconName} size={20} color={color}></Icon>
    }
    })}
    barStyle={{
      backgroundColor:colores.secondaryColor,
    }}

    >
    <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab 1',}} component={Tab1Screen} />
    <BottomTabIos.Screen name="TopTabNavigator" options={{title:'Top Tab'}} component={TopTabNavigator} />
    <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
)
}




const BottomTabIos = createBottomTabNavigator();
const TabsIos = () => {
    return (
      // drawer maintain active its content
        <BottomTabIos.Navigator 
        // Style object for the component wrapping the screen content.
        sceneContainerStyle={{backgroundColor:'white'}}
       // Each screen component in your app is provided with the route prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).
        screenOptions={({route})=> ({
          tabBarActiveTintColor:'black',
          headerShown: false  ,
        tabBarStyle: {
          borderTopColor: colores.tertiaryColor,
          // borderTopWidth:1.5,
          elevation: 0,
        },
        tabBarLabelStyle:{
        fontSize:15,
        },
        //i guess, this is how we access the icon 
        tabBarIcon : ({focused, color, size})=>{
          let iconName:string = '';
          // console.log(iconName)
          // displaying the names(icons) of every tab
          switch(route.name){
            case 'Tab1Screen':
               iconName = 'T1'
               break;
            case 'Tab2Screen': 
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'SN'
              break;
          }
          // ECMS6, same color that you passed to the label
        return <Text style={{color}}>{iconName}</Text>
        }
        })
        }> 

          {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1',tabBarIcon:()=> <Text>Hola</Text> }} component={Tab1Screen} /> */}
          <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab 1',}} component={Tab1Screen} />
          <BottomTabIos.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={Tab2Screen} />
          <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
        </BottomTabIos.Navigator>
      );
}

export default Tabs