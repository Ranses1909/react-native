import React, { useState,useReducer } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'
import reducer from '../components/reducer'

  const initialState = {
    number: '0',  //actual state.number
    numBeforeNum: '0', // this is just for storing the number pressed before
    previousNumber: "100", // this is  the previous result
    btnText: '0' // what is coming from btnCalc 
  }

const CalculadoraScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const limpiar = () => {
    dispatch({type: 'CLEAR'})
  }
// calculate grabs the content of the btn
const calculate = (btnText: string) => {
// we concatenate with number what we have in that specific btn
dispatch({type: 'CALCULATE', payload: btnText})
}

const positiveNegative = () => {
  dispatch({type: 'PN'})
}

  return (
    <View style={styles.container}>
      <Text style={styles.previousResult}>{state.numBeforeNum}</Text>
        <Text style={styles.previousResult}>{state.previousNumber}</Text>
        <Text 
        style={styles.results}
          numberOfLines={1}
           adjustsFontSizeToFit={true}
           >
            {state.number}</Text>

        <View style={styles.row}>
          <BtnCalc content="AC" color="#9B9B9B" onclick={limpiar}/>
          <BtnCalc content="+/-" color={'#9B9B9B'} onclick={positiveNegative}/>
          <BtnCalc content="del" color={'#9B9B9B'} onclick={limpiar} />
          <BtnCalc content="/" color={'#FF9427'} onclick={limpiar}/>
          </View>
         <View  style={styles.row}>
          <BtnCalc content="7" onclick={calculate} />
          <BtnCalc content="8" onclick={calculate}/>
          <BtnCalc content="9" onclick={calculate}/>
          <BtnCalc content="x" color={'#FF9427'} onclick={calculate}/>
          </View>
       <View style={styles.row}>
          <BtnCalc content="4" onclick={calculate}/>
          <BtnCalc content="5"onclick={calculate} />
          <BtnCalc content="6" onclick={calculate}/>
          <BtnCalc content="-" color={'#FF9427'} onclick={calculate}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="1" onclick={calculate}/>
          <BtnCalc content="2" onclick={calculate}/>
          <BtnCalc content="3" onclick={calculate}/>
          <BtnCalc content="+" color={'#FF9427'} onclick={calculate}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="0" ancho={true} onclick={calculate} />
          <BtnCalc content="." onclick={calculate}/>
          <BtnCalc content="=" color={'#FF9427'} onclick={limpiar}/>
          </View>
  </View>
  )
}

export default CalculadoraScreen

