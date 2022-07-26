const reducer = (state: any, action:any) => {
    if(action.type === 'CLEAR'){
    return {...state, number: '0'}
    };

    if(action.type === 'CALCULATE'){
        return {
            ...state,
            number:action.btnContent 
        }
    };
}
export default reducer
