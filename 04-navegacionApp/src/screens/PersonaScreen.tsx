import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/AppTheme'


// Second way
// interface RouteParams {
//   id:number,
//   name:string
// }
// two ways of getting the params
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};
// we desctructure the "route" object we saw when console loging 
const PersonaScreen = ({route,navigation}:Props) => {

  // inside of route object we have propertie params, we extract it

  const params = route.params;

  // second way
  // const params = route.params as RouteParams;
  // console.log(JSON.stringify(props, null, 3))

  React.useEffect(() => {
  navigation.setOptions({
    // ! means force
    // title: params!.name 
    // Second way
    title: params.name 
  })
  },[])

  return (
    <View style={styles.globalMargin}> 
        <Text style={styles.title}>
           {JSON.stringify(params, null, 3)}
        </Text>
        <Button 
   title="regresar"
   onPress={() => navigation.pop(1)}/>
    </View>
  )
}

export default PersonaScreen