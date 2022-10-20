import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/AppTheme'

const Tab1Screen = () => {
// React.useEffect(() => {
// console.log('Tab1Screen')
// },[])

  return (
   <View>
    <Text style={styles.globalMargin}>Iconos</Text>
    <Text>
    <Icon name="rocket" size={40} color={colores.secondaryColor} />
    <Icon name="file-tray-stacked-outline" size={30} color={colores.secondaryColor}></Icon>
    </Text>
   </View>
  )
}

export default Tab1Screen