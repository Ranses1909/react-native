import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/AppTheme';

// more for phones with notches
const SettingsScreen = () => {
  //custom hook from react native, bascially a safe_area_view
 const insets = useSafeAreaInsets();
 
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top+20}}>
        <Text style={styles.title}>Settings Screens</Text>
    </View>
  )
}

export default SettingsScreen