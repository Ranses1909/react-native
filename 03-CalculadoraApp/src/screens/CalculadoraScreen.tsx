import React, { useState } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
 const [number, setNumber] = useState('0');
 const [previousNumber, setPreviousNumber] = useState('0');
const limpiar = () => {
  setNumber('')
}
const calculate = (numeroContent:() => void) => {
// :() => void
setNumber(number + previousNumber)
}
  return (
    <View style={styles.container}>
        <Text style={styles.previousResult}>1,500.00</Text>
        <Text style={styles.results}>{number}</Text>

        <View style={styles.row}>
          <BtnCalc content="AC" color="#9B9B9B" action={limpiar}/>
          <BtnCalc content="+/-" color={'#9B9B9B'}/>
          <BtnCalc content="del" color={'#9B9B9B'}/>
          <BtnCalc content="/" color={'#FF9427'}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="7" action={calculate}/>
          <BtnCalc content="8" action={calculate}/>
          <BtnCalc content="9" action={calculate}/>
          <BtnCalc content="x" color={'#FF9427'} action={calculate}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="4" action={calculate}/>
          <BtnCalc content="5"action={calculate} />
          <BtnCalc content="6" action={calculate}/>
          <BtnCalc content="-" color={'#FF9427'} action={calculate}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="1" action={calculate}/>
          <BtnCalc content="2" action={calculate}/>
          <BtnCalc content="3" action={calculate}/>
          <BtnCalc content="+" color={'#FF9427'} action={calculate}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="0" ancho={true} action={calculate} />
          <BtnCalc content="." action={calculate}/>
          <BtnCalc content="=" color={'#FF9427'}/>
          </View>


    </View>
  )
}

export default CalculadoraScreen