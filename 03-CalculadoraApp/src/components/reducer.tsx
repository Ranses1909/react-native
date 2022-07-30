const reducer = (state:any , action:any) => {
    if(action.type === 'CLEAR'){
    return {...state, number: '0'}
    };

    if(action.type === 'CALCULATE'){
        return {...state,
            // IF YOU ARE PASSING JUST ONE PARAMETER YOU DON'T NEED TO PUT THE NAME AFTER .payload
            number: state.number + action.payload
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
   


    }

    }

export default reducer
