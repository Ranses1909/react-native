import React, { useState,useReducer } from 'react'
import { View,Text } from 'react-native'
import BtnCalc from '../components/BtnCalc';
import styles from '../theme/appTheme'
import useCalculadora from '../components/useCalculadora'

const CalculadoraScreen = () => {
 
  const {
    limpiar,
    buildNumber,
    positiveNegative,
    removeLast,
    numBefore,
    calcDiv,
    calcMulti,
    calcSum,
    calcResta,
    calculate,
    ...state
  } = useCalculadora()
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
          <BtnCalc content="=" color={'#FF9427'} onclick={calculate}/>
          </View>
  </View>
  )
}

export default CalculadoraScreen

