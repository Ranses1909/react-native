import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

const Pagina2Screen = () => {
  // stackNavigation offers this hook
  const navigator = useNavigation();
  return (
    <View style={styles.globalMargin}>
        <Text>pagina2Screen</Text>
        
        <Button 
        title="Pagina 3"
        onPress={() => navigator.navigate("Pagina3Screen")}
        />
    </View>
  )
}

export default Pagina2Screen