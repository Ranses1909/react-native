import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Button } from 'react-native';
import {styles} from '../theme/AppTheme'
// it needs two arguments, it can receive more info than what it comes by default with the arguments
interface Props extends StackScreenProps<any, any>{};

const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text>pagina1Screen </Text>
        <Button
        title="Pagina 2 "
        onPress={() => navigation.navigate
        // it must be the same name that you gave in name in StackScreen
        ('Pagina2Screen')}/>
    </View>
  )
}

export default Pagina1Screen;
// npx react-native run-android+6