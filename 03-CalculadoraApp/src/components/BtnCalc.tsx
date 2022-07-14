import React from 'react'
import { Text, View } from 'react-native'
import styles from '../theme/appTheme';

interface Props {
 content: string;
}

const BtnCalc = ({content}:Props) => {
  return(
    <View style={styles.btn} > 
    
    <Text style={styles.btnContent}>{content}</Text>
    </View>
      )
}

export default BtnCalc