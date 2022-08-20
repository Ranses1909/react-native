import React, { useState,useReducer } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'
import reducer from '../components/reducer'

  const initialState = {
    number: '0',  //actual state.number
    previousNumber: "0", // this is  the previous result
    btnText: '0' // what is coming from btnCalc 
  }
  // Por que enum????
  // to make useRef look better basically so you avoid passing several properties in useref
  const enum Operators{
    // se definen numeros representados por un nombre...
    sumar, restar, multiplicar, dividir,
  }
   
const CalculadoraScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const lastReference = React.useRef<Operators>() 


  const limpiar = () => {
    numBefore();
    dispatch({type: 'CLEAR'})
  }
// buidNumber grabs the content of the btn
const buildNumber = (btnText: string) => {
// we concatenate with number what we have in that specific btn
dispatch({type: 'BUILDNUMBER', payload: btnText})
}
const positiveNegative = (btnText: string) => {
  dispatch({type: 'PN', payload: btnText})
}
const removeLast = () => {
  dispatch({type: 'DELETE'})
}
const numBefore =() =>{
dispatch({type: 'PREVIOUS'})
}



const calcDiv = () => {
  numBefore();
  lastReference.current= Operators.dividir
  dispatch({type: 'DIVISION'})
}
const calcMulti = () => {
  numBefore();
  lastReference.current= Operators.multiplicar
  dispatch({type: 'MULTIPLICACION' })
}
const calcSum = () => {
  numBefore();
  lastReference.current= Operators.sumar
  dispatch({type: 'SUMA' })
}
const calcResta = () => {
  numBefore();
  lastReference.current= Operators.restar
  dispatch({type: 'RESTA' })
}

const calculate = () => {
  dispatch({type: 'CALCULATE',payload:{lastReference, }})
  }
  


  return (
    <View style={styles.container}>
      {(state.previousNumber !== '0') && 
        <Text style={styles.previousResult}>{state.previousNumber}</Text>
         }<Text
        style={styles.results}
          numberOfLines={1}
           adjustsFontSizeToFit={true}
           >
            {state.number}</Text>  

        <View style={styles.row}>
          <BtnCalc content="AC" color="#9B9B9B" onclick={limpiar}/>
          <BtnCalc content="+/-" color={'#9B9B9B'} onclick={positiveNegative}/>
          <BtnCalc content="del" color={'#9B9B9B'} onclick={removeLast} />
          <BtnCalc content="/" color={'#FF9427'} onclick={calcDiv}/>
          </View>
         <View  style={styles.row}>
          <BtnCalc content="7" onclick={buildNumber} />
          <BtnCalc content="8" onclick={buildNumber}/>
          <BtnCalc content="9" onclick={buildNumber}/>
          <BtnCalc content="x" color={'#FF9427'} onclick={calcMulti}/>
          </View>
       <View style={styles.row}>
          <BtnCalc content="4" onclick={buildNumber}/>
          <BtnCalc content="5"onclick={buildNumber} />
          <BtnCalc content="6" onclick={buildNumber}/>
          <BtnCalc content="-" color={'#FF9427'} onclick={calcResta}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="1" onclick={buildNumber}/>
          <BtnCalc content="2" onclick={buildNumber}/>
          <BtnCalc content="3" onclick={buildNumber}/>
          <BtnCalc content="+" color={'#FF9427'} onclick={calcSum}/>
          </View>
        <View style={styles.row}>
          <BtnCalc content="0" ancho={true} onclick={buildNumber} />
          <BtnCalc content="." onclick={buildNumber}/>
          <BtnCalc content="=" color={'#FF9427'} onclick={numBefore}/>
          </View>
  </View>
  )
}

export default CalculadoraScreen

