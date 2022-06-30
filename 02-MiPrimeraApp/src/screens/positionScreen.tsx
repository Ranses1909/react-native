import React from 'react'
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>

     <View style={styles.cajaMorada}/>
     <View style={styles.cajaNaranja}/>
     <View style={styles.cajaVerde}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#20A4F3',
      height: '70%',
      width: '100%',
      //  justifyContent: 'center',
      //  alignItems: 'center',
        },
        cajaMorada:{
            width:100,
            height:100,
            backgroundColor:'purple',
            borderWidth:10,
            borderColor:'white',
            position:'absolute',
            top:0,
            right:0,
        },
        cajaNaranja:{
            width:100,
            height:100,
            backgroundColor:'orange',
            borderWidth:10,
            borderColor:'white',
            bottom:0,
            left:0,
            position:'absolute'
        },
        cajaVerde:{
            width:100,
            height:100,
            backgroundColor:'green',
            borderWidth:10,
            borderColor:'white',
           top:0,
            left:0,
            position:'absolute'
        },

});
export default PositionScreen