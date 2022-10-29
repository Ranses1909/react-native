import React from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/Context';

const AlbumScreen = () => {
  const { logOut, authState} = React.useContext(AuthContext);
    return (
        <View>
          <Text>
                  AlbumScreen
         </Text>

         {authState.isLoggedIn  ?
        <Button 
        title='LOG OUT'
        onPress={logOut}
         />
         :   null
         }
         </View>
    ) }

export default AlbumScreen