import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
        <Text style={styles.title}>Pagina3Screen</Text>
   <Button 
   title="regresar"
   onPress={() => navigation.pop(1)}/>
   <Button 
   title="Primera pagina"
  //  methods come from stackScreen
   onPress={() => navigation.popToTop()}/>
   <Button
   title="ir Persona"
   onPress={() => navigation.navigate("PersonaScreen")}
   />

    </View>
  )
}

export default Pagina3Screen