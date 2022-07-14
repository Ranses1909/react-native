import React, { useState } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    // const content = [1,2,3,4,5,6,7,8 ];
    // const content = ["AC","-/+","%","/",'7','8','9','x','4', '5','6','-','1', '2', '3', '+', ];

  return (
    <View style={styles.container}>
        <Text style={styles.previousResult}>1,500.00</Text>
        <Text style={styles.results}>1,500.00</Text>

        <View style={styles.row}>
          <BtnCalc content="AC" color="#9B9B9B"/>
          <BtnCalc content="+/-" color={'#9B9B9B'}/>
          <BtnCalc content="del" color={'#9B9B9B'}/>
          <BtnCalc content="/" color={'#FF9427'}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="7" />
          <BtnCalc content="8" />
          <BtnCalc content="9" />
          <BtnCalc content="x" color={'#FF9427'}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="4" />
          <BtnCalc content="5" />
          <BtnCalc content="6" />
          <BtnCalc content="-" color={'#FF9427'}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="1" />
          <BtnCalc content="2" />
          <BtnCalc content="3" />
          <BtnCalc content="+" color={'#FF9427'}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="0" ancho={true} />
          <BtnCalc content="," />
          <BtnCalc content="=" color={'#FF9427'}/>
          </View>


    </View>
  )
}

export default CalculadoraScreen