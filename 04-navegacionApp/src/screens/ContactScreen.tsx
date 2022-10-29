import React from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { AuthContext } from '../context/Context'
import { styles } from '../theme/AppTheme'

const ContactScreen = () => {
  const {signIn, authState} = React.useContext(AuthContext);

return(
  <View style={styles.globalMargin}>
  <Text style={styles.title}>
           ContactScreen
 </Text>
 {/* que no este en true */}
{!authState.isLoggedIn  ? <Button 
title='SIGN IN'
onPress={signIn}
/>
:   null
}

</View> 
)
}

export default ContactScreen