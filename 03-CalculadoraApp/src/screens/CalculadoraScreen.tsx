import React, { useState } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    const content = ['1', '2', '3', '+', '4',  '5','6','-','7','8','9', 'X',"C","-/+","%","/"];

  return (
    <View>
        <Text style={styles.previousResult}>1,500.00</Text>
        <Text style={styles.results}>1,500.00</Text>

        <View style={styles.row}>
          <BtnCalc content={content} />,
         
        </View>


    </View>
  )
}

export default CalculadoraScreen