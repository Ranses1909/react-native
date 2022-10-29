import React from 'react'
import { View } from 'react-native'
import { AuthContext, AuthState } from './Context'

type AuthAction = {type: 'SIGN IN' | 'LOG OUT'}
| {type: 'CHANGE-ICON', payload: string}
| {type: 'UPDATE-USER', payload: string }

const reducer = (state:AuthState,action:AuthAction): AuthState => {
    // const {authState} = React.useContext(AuthContext)
switch (action.type) {
  case 'SIGN IN':
    return {
      ...state, isLoggedIn: true, username: 'No-username-yet'
    }
    break
    case 'LOG OUT':
      return {...state, isLoggedIn:false, username: 'No-username-yet', favoriteIcon:undefined}
    break;
    case 'CHANGE-ICON':
      return {...state, favoriteIcon: action.payload}
      break;

    case 'UPDATE-USER':
      return {...state, username:action.payload}
      break;
}
}

export default reducer