import React from 'react'
import { StyleSheet, View } from 'react-native'

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.BoxAquamarine}>

      </View>
      <View style={styles.BoxLightGreen}>

      </View>
      <View style={styles.BoxCrayola}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flexWrap:'wrap',
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#004E64',
    justifyContent: 'center',
    alignItems:'center',
    },
    BoxAquamarine:{
        // flex:1,
        width:100,
        height:100,
        borderWidth:10,
        borderColor: '#FFF',
    backgroundColor: '#9FFFCB'
    },
    BoxLightGreen:{
        // flex:1,
        top:50,
        width:100,
        height:100,
        borderWidth:10,
        borderColor: '#FFF',
    backgroundColor: '#7AE582'
    },
    BoxCrayola:{
        // flex:1,
        width:100,
        height:100,
        borderWidth:10,
        borderColor: '#FFF',
    backgroundColor: '#00A5CF'
    },
});
// 9FFFCB
// 7AE582
export default TareaScreen