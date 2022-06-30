import React, { useState } from 'react'
import { Text, TouchableOpacity, TouchableNativeFeedback, View, StyleSheet, Platform} from 'react-native';

interface Props{
  title: string;
  // opcional ?
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fabtn = ({onPress, position = 'br',title}:Props) => {
    
const ios = ()=> {
  return (
    <>
      {/* First button */}
  <TouchableOpacity 
  activeOpacity={ 0.5 }
  // another alternative is using array format 
  style={[styles.fabLocation,
    (position==='br') ? styles.right : styles.left
  ]}
  onPress={onPress}
  >  
    <View style={styles.fab}>
    <Text style={styles.fabText}>{title}</Text>
    </View>
  </TouchableOpacity>

    </>
    )}

const android = ()=> {
  return (
  <>
    {/* First button */}
<TouchableOpacity 
// another alternative is using array format 
style={[styles.fabLocation,
  (position==='br') ? styles.right : styles.left
]}
onPress={onPress}
>  
  <View style={styles.fab}>
  <Text style={styles.fabText}>{title}</Text>
  </View>
</TouchableOpacity>

  </>
  )}

  // return condicional
return (Platform.OS === 'ios') ? ios() : android();

}
const styles = StyleSheet.create({
  fabLocation:{
    position:'absolute',
    bottom:25,
  },
  right:{
  right:25
  },
  left:{
  left:25,
  },
  
  fab:{
    backgroundColor:'#44BBA4',
    width:60,
    height:50,
    justifyContent:'center',
    borderRadius:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.53,
shadowRadius: 13.97,

elevation: 24,
  },
  fabText:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
  }
})

export default Fabtn