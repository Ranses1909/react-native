const reducer = (state:any , action:any) => {
    if(action.type === 'CLEAR'){
    return {...state, number: '0'}
    };
    

 if(action.type === 'CALCULATE'){ 
          // IF YOU ARE PASSING JUST ONE PARAMETER YOU DON'T NEED TO PUT THE NAME AFTER .payload for example "action.payload.btnText"
          
if(state.number.includes('.') && action.payload === '.'){
    // we grab the already store state in the variable number that's why we used .includes, an then we grab the btn we are clicking on with action.payload and we compare, if they are the same we change nothing
  return {...state}
}

// If the first btn pressed is zero then we have to take into consideration...
if(state.number.startsWith('0') || state.number.startsWith('-0')){

    // if the btn pressed after zero it's '.' we leave the state how it is because we don't want to wipe out the zero before the dot
    if(action.payload === '.'){
       return{...state, number: state.number + action.payload} 
    }
    // if there's a dot in the state and zero is being pressed it is allowed 
    else if( action.payload === '0' && state.number.includes('.')){
        return{...state, number: state.number + action.payload} 
    }
    // now if we have zero in the state and zero btn is being pressed we don't take it into account okay? and also to change the default zero to the number being pressed if it is needed.
    else{
        return {
            ...state, 
            number: state.number.replace('0','') + action.payload,
            } 
    }
}    
    else{
  return {...state, number: state.number + action.payload}
}
    };

    if(action.type === 'PN'){
        if(state.number.includes('-')){
        return { ...state,
            // TO NOT have the problem "NUMBER only refers to a type, but is being used as a value here" YOU have to acces the state and then acces the property dumb ass
        number: state.number.replace('-', '')
        }}else{
            return { ...state, number: '-' + state.number}
        }
    };

    }

export default reducer
