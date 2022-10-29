import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext, initialState } from '../context/Context';
import reducer from '../context/Reducer';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/AppTheme';

// more for phones with notches
const SettingsScreen = () => {
  //custom hook from react native, bascially a safe_area_view for IOS
 const insets = useSafeAreaInsets();
 
const {authState} = React.useContext(AuthContext)

  return (

    <View style={{
      ...styles.globalMargin,
      // marginTop: insets.top+20
    }}>

        <Text style={styles.title}>Settings Screens</Text>
           
        <Text>{JSON.stringify(authState, null, 3)}</Text>
 
 {
   authState.favoriteIcon && (
    <Ionicons 
    name={ authState.favoriteIcon} 
    size={100} 
    color={colores.secondaryColor}/>
    )
  }
      {/* ! means trust me tp */}
    </View>
  )
}

export default SettingsScreen 