import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';

interface Props extends StackScreenProps<any, any>{};

const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
        <Text>Pagina3Screen</Text>
   <Button 
   title="regresar"
   onPress={() =>navigation.pop}/>
   <Button 
   title="Primera pagina"
   onPress={() =>navigation.popToTop}/>
    </View>
  )
}

export default Pagina3Screen