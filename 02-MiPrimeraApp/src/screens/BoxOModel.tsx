import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxOModel = () => {
  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // la vista es limitada por su contenido hijo
  container: {
    backgroundColor:'red',
  //  flex:,
  },
  title:{
    padding:50,
  fontSize:25,
  width:250,
  borderWidth:10,
  },
})
export default BoxOModel