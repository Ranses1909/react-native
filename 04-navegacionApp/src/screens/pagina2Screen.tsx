import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

const Pagina2Screen = () => {
  // stackNavigation offers this hook
  const navigator = useNavigation<any>();

  // para ios 
  React.useEffect(() => {
    navigator.setOptions({
      // Title string used by the back button on iOS. Defaults to the previous scene's headerTitle.
      // title: 'Hola Mundo',
      headerBackTitle: 'back'
    })
  })
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>pagina2Screen</Text>
        
        <Button 
        title="Pagina 3"
        onPress={() => navigator.navigate('Pagina3Screen' )}
        />
    </View>
  )
}

export default Pagina2Screen