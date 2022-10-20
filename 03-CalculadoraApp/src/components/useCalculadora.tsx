import React from 'react'
import reducer from '../components/reducer'
const initialState = {
    number: '0',  //actual state.number
    previousNumber: "0", // this is  the previous result
    btnText: '0', // what is coming from btnCalc 
  }
  // couldn't use enum because of reducer
  // to make useRef look better basically so you avoid passing several properties in useref
  // const enum perators{
  //   // se definen numeros representados por un nombre...
  //   sumar, restar, multiplicar, dividir,
  // }
const useCalculadora = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);
    const lastReference = React.useRef('dividir'|| 'multiplicar'||'sumar'||'restar'); 
  
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
    lastReference.current = 'dividir'
    // dispatch({type: 'DIVISION'})
  }
  const calcMulti = () => {
    numBefore();
    lastReference.current= 'multiplicar'
    // dispatch({type: 'MULTIPLICACION' })
  }
  const calcSum = () => {
    numBefore();
    lastReference.current= 'sumar'
    // dispatch({type: 'SUMA' })
  }
  const calcResta = () => {
    numBefore();
    lastReference.current = 'restar'
    // dispatch({type: 'RESTA' })
  }
  
  const calculate = () => {
    dispatch({type: 'CALCULATE',payload:{lastReference}})
    }
  return {
    ...state,
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
  }
}

export default useCalculadora