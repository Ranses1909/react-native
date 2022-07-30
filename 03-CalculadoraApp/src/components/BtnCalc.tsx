import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../theme/appTheme';

interface Props {
 content: string;
 color?: string;
 ancho?: boolean;
//  aqui deberiamos recibr un argumento
 onclick: (btnText:string) => void;
}

const BtnCalc = ({content,color='#2D2D2D',ancho, onclick,}:Props) => {
  return(
    <TouchableOpacity
    // when you click on the touchable activates a callback function that calls along with its argument
    // onClick agarra content btnContent becomes content)
      onPress={() => onclick(content)}
      >
    <View style={{...styles.btn,
    backgroundColor:color,
    borderRadius: 100,
    width:(ancho===true) ? 180 : 80,
  }}> 
    <Text style={{
      ...styles.btnContent,
      color: (color=== '#9B9B9B') ? 'black' : 'white'
    }}>
      {content}</Text>
    </View>
      </TouchableOpacity>
      )
}

export default BtnCalc