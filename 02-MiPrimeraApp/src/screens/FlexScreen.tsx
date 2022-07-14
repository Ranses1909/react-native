import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
   <View style={styles.container} >
<Text style={styles.caja1}>caja1</Text>
<Text style={styles.caja2}>caja2</Text>
<Text style={styles.caja3}>caja3</Text>
<Text style={styles.caja1}>caja1</Text>
<Text style={styles.caja2}>caja2</Text>
<Text style={styles.caja3}>caja3</Text>
<Text style={styles.caja1}>caja1</Text>
<Text style={styles.caja2}>caja2</Text>
<Text style={styles.caja3}>caja3</Text>
<Text style={styles.caja1}>caja1</Text>
<Text style={styles.caja2}>caja2</Text>
<Text style={styles.caja3}>caja3</Text>
<Text style={styles.caja1}>caja1</Text>
<Text style={styles.caja2}>caja2</Text>
<Text style={styles.caja3}>caja3</Text>
<Text style={styles.caja1}>caja1</Text>

   </View>
  )
}
const styles = StyleSheet.create({
      container: {
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      justifyContent:'center',
      // alignItems: 'center',
      flexWrap:'wrap',
      backgroundColor:'#CAE9FF',
      },
        caja1:{
            // flex:4,
            // alignSelf:'center',
            borderWidth:2,
            borderColor: 'black',
            fontSize:25,
        },
        caja2:{
          // flex:3,
          // alignSelf:'flex-start',
          borderWidth:2,
           borderColor: 'black',
           fontSize:25,
        },
        caja3:{
          // flex:3,
          // alignSelf:'flex-end',
          borderWidth:2,
          borderColor: 'black',
          fontSize:25,
        },
  });


export default FlexScreen