import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {styles} from '../theme/AppTheme'

// it needs two arguments, it can receive more info than what it comes by default with the arguments
interface Props extends StackScreenProps<any, any>{};

const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>pagina1Screen </Text>
        <Button
        title="Pagina 2 "
        onPress={() => navigation.navigate
        // it must be the same name that you gave in name in StackScreen
        ('Pagina2Screen')}/>

<Text style={{fontSize: 20, }}>Navigate with arguments</Text>
<View style={{flexDirection: 'row', marginTop:5, justifyContent: 'center'}}>
{/* sending information in props  */}
    <TouchableOpacity
    style={{backgroundColor:'gray',  height: 40, width:'40%', alignContent: 'center', alignItems: 'center'}}
    onPress={() => navigation.navigate('PersonaScreen', {
      id:1,
      name: 'Ranses',
    })}>
        <Text style={{fontSize: 30, color:'white'}}>Ranses</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={{backgroundColor:'purple', height: 40,width:'40%',marginLeft:10, alignItems: 'center'}}
      onPress={() => navigation.navigate('PersonaScreen', {
        id:2,
        name: 'Leidimar',
      })}>
        <Text  style={{fontSize: 30, color:'white'}}>{'Leidimar'}</Text>
    </TouchableOpacity>
        </View>

    </View>
  )
}

export default Pagina1Screen;
// npx react-native run-android