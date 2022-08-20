import React from "react";

const reducer = (state:any , action:any,) => {
    const {number, previousNumber, btnText,} = state
    if(action.type === 'CLEAR'){
    return {...state, number: '0', previousNumber: '0'}
    };
    

 if(action.type === 'BUILDNUMBER'){ 
        // we grab the already store state in the variable number that's why we used .includes, an then we grab the btn we are clicking on with action.payload and we compare, if they are the same we change nothing
        if (state.number.includes('.') && action.payload === '.') return{...state}; 
        else{
            return {
                ...state,
                // default state.number = '0'
                /*-1) If the first btn pressed is zero then we leave the state how it is
                -2) if there's a dot in the state and zero is being pressed it is allowed
                -3) if payload = '.' we concatenate the state with payload to avoid removing the state content 
                */ 
              number: state.number !=='0' || action.payload === '.' ? state.number+action.payload : action.payload  
            }
        }
    };

    if(action.type === 'PN'){
        // let stateLength = state.number.lentgh
        // if((stateLength === 1 && state.number.includes('0')) && action.payload === '+/-')  return { ...state, number: state.number}
        if(state.number.includes('-')){
               return { ...state,
                number: state.number.replace('-', '')
        }
        }else if(action.payload === '+/-'){
            return { ...state, number: '-' + state.number}
     }};

if (action.type === 'DELETE'){
    let stateLength = state.number.length
    if(stateLength === 1 || (stateLength === 2 && state.number.includes('-'))){  return {...state, number: '0'}}
    return { ...state, number: state.number.slice(0, stateLength-1) }
} 

if(action.type === 'PREVIOUS'){
    if (number.endsWith('.')){  return { ...state, previousNumber: number.slice(0,-1), number:'0'}}
    else{ return { ...state, number:'0', previousNumber: number}}
}

// current de tipo operadores
if(action.type==='CALCULATE'){
    const num1 = Number(number)
    const num2 = Number(previousNumber) 
    if( num1 === 0 && num2 === 0) {
        return {...state};
    } 
    switch (action.payload.lastReference.current) {
        case 'sumar':
            return {...state, number:`${(num1 + num2)}`}
            break;
        case 'restar':
            return {...state, number:`${(num2 - num1)}`}
            break;
        case 'multiplicar':
            return {...state, number:`${(num1 * num2)}`}
            break;
        case 'dividir':
            return {...state, number:`${(num2 / num1)}`}
            break; 
        default:
            break;
    }
    return { ...state, number:`${0}`, previousNumber: `${0}`} 
   

}
}
   

export default reducer
    
 