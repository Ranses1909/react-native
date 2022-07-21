const reducer = (state: any, action:any) => {
    if(action.type === 'CLEAR'){
    return {...state, number: '0'}
    };

    if(action.type === 'CALCULATE'){
        return {
            ...state,
            number: '0' + action.payload.btnContent
        }
    }
}
export default reducer
