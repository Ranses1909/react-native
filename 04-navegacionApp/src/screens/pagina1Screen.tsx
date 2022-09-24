import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {styles} from '../theme/AppTheme'

// it needs two arguments, it can receive more info than what it comes by default with the arguments
// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

const Pagina1Screen = ({navigation}: Props) => {
React.useEffect(() => {
// añadiendo una funcionalidad on the left side
navigation.setOptions({
  // receives a function that returns a jsx
  headerLeft: ()=>(
<Button title="menu" onPress={()=>{navigation.toggleDrawer()}}/>
  )
})
},[])

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

    // navegando a otras cartas
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