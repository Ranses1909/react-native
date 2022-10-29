import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/AppTheme'
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
// React.useEffect(() => {
// console.log('Tab1Screen')
// },[])

  return (
   <View>
    <Text style={styles.globalMargin}>Iconos</Text>

    <Text>
      <TouchableIcon  iconName="rocket"/>
      <TouchableIcon  iconName="logo-snapchat"/>
      <TouchableIcon iconName="file-tray-stacked-outline" />
    </Text>
   </View>
  )
}

export default Tab1Screen