import React from 'react';
import { Text, View } from 'react-native';
// npx react-native run-android

const HiWorldScreen = () => {
  return (
   <View style={{
    flex:1,
    // backgroundColor:'gray',
    justifyContent: 'center',
   }}>
    <Text style={{
      fontSize: 42,
      color:'black',
      textAlign:'center'
    }}>Lo vas a lograr</Text>
   </View>
  );
};

export default HiWorldScreen;

