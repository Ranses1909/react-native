import React from 'react'
import { Text, View } from 'react-native'
import styles from '../theme/appTheme';

interface Props {
 content: string;
 color?: string;
 ancho?: boolean;
}

const BtnCalc = ({content,color='#2D2D2D',ancho}:Props) => {
  return(
    <View style={{...styles.btn,
    backgroundColor:color,
    borderRadius: 100,
    width:(ancho===true) ? 170 : 80,
    }}> 
    <Text style={{
      ...styles.btnContent,
    color: (color=== '#9B9B9B') ? 'black' : 'white'
    }}>
      {content}</Text>
    </View>
      )
}

export default BtnCalc