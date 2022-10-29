import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/AppTheme';
import { useGlobalContext } from '../context/Context'

interface Props{
    iconName:string;
}

const TouchableIcon = ({iconName}:Props) => {
  const {changeFavIcon} = useGlobalContext()
  return (
    <View style={{...styles.globalMargin,
    }}>
        <TouchableOpacity
        // if we passed in the function with parentheses, the function will execute every time the component renders.
        // agarra el name del icono en el que clickaste
        onPress={() => changeFavIcon(iconName)}
        >
        <Ionicons
         name={iconName} 
         size={40} 
         color={colores.secondaryColor}
         />
        </TouchableOpacity>
    </View>
  )
}

export default TouchableIcon