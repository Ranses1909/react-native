import React, { useState,useReducer } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'
import reducer from '../components/reducer'
interface iState {
  number: string;
  previousNumber: string;
  btnContent: string;
}
  const initialState:iState = {
    number: '0',
    previousNumber: "100",
    btnContent: ''
  }


const CalculadoraScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const limpiar = () => {
    dispatch({type: 'CLEAR'})
  }
// calculate grabs the content of the btn
const calculate = (btnContent: string) => {
// we concatenate with number what we have in that specific btn
dispatch({type: 'CALCULATE', payload: btnContent})
}


  return (
    <View style={styles.container}>
        <Text style={styles.previousResult}>{state.previousNumber}</Text>
        <Text 
        style={styles.results}
          numberOfLines={1}
           adjustsFontSizeToFit={true}
           >
            {state.number}</Text>

        <View style={styles.row}>
          <BtnCalc content="AC" color="#9B9B9B" onclick={limpiar}/>
          <BtnCalc content="+/-" color={'#9B9B9B'} onclick={limpiar}/>
          <BtnCalc content="del" color={'#9B9B9B'} onclick={limpiar} />
          <BtnCalc content="/" color={'#FF9427'} onclick={limpiar}/>
          </View>
         <View style={styles.row}>
          <BtnCalc content="7" onclick={calculate}/>
          <BtnCalc content="8" onclick={calculate}/>
          <BtnCalc content="9" onclick={calculate}/>
          <BtnCalc content="x" color={'#FF9427'} onclick={calculate}/>
          </View>
       {/* <View style={styles.row}>
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
          <BtnCalc content="=" color={'#FF9427'} action={result}/> */}
          </View>


    // </View>
  )
}

export default CalculadoraScreen

