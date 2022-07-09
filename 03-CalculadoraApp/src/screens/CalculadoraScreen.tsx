import React, { useState } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    // const content = [1,2,3,4,5,6,7,8 ];
    const content = ["AC","-/+","%","/",'7','8','9','x','4',  '5','6','-','1', '2', '3', '+', ];

  return (
    <View style={styles.container}>
        <Text style={styles.previousResult}>1,500.00</Text>
        <Text style={styles.results}>1,500.00</Text>

        <Text style={styles.row} >
          {/* <Text style={styles.text}> */}
          <BtnCalc  content={content} />,
          {/* </Text> */}
         
        </Text>


    </View>
  )
}

export default CalculadoraScreen