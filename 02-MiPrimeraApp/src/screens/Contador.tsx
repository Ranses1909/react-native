import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Fabtn from '../components/Fabtn';

const Contador = () => {
  const [count, setCount] = React.useState(10)
  return (
<View style={styles.container}>
  <Text style={styles.title}>Contador: {count}</Text>
  
  <Fabtn 
          onPress={()=> setCount(count+1)} 
          position={'br'}
          title={'+1'} 
          />
<Fabtn 
        onPress={() => setCount(count - 1)}
        position={'bl'}
         title={'-1'}        />

 {/* First button
<TouchableOpacity 
style={styles.fabLocationBL}
onPress={()=> setCount(count-1)}
>
  <View style={styles.fab}>
  <Text style={styles.fabText}>-1</Text>
  </View>
</TouchableOpacity> */}

</View>
    )
}

export default Contador

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  title:{
    fontSize:30, alignSelf:'center',
  }
 
})


