import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const {width, height} = Dimensions.get('window')

const Dimensiones = () => {
    const {width, height} = useWindowDimensions();
  return (
    <View>
  <View style={styles.container}>
    <View style={{
        // extracting dimensions and making percentages
        ...styles.purpleBox,
        // width: width * 0.20,
    }}>

    </View>
    <View style={styles.orangeBox}></View>
  </View>
     <Text style={styles.title}>W: {width.toFixed(1)} H: {height.toFixed(1)} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
width: '100%',
height: 200,
backgroundColor:'blue',
    },
    title: {
        textAlign: 'center',
        fontSize:20,
    },
    purpleBox:{
     height:'50%',
     backgroundColor:'purple',
     width:'50%',
     marginLeft:'50%'
    },
    orangeBox:{
    width:'50%',
    height:40,
    backgroundColor:'orange',
    },
});
export default Dimensiones
