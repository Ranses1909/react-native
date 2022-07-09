import React from 'react'
import { Text, View } from 'react-native'
import styles from '../theme/appTheme';

interface Props {
 content: string[];
}

const BtnCalc = ({content}:Props) => {
  // const buttons = ['1', '2', '3', '4','5','6','7','8','9'];
  return(
    <>
{content.map(((el,key) =>{
  return(
    <View style={styles.btn} key={key}> 
    <Text style={styles.btnContent} >{el}</Text>
    </View>
      )
    }))}
    </>
  )
}

export default BtnCalc