// we're going to create context, and try it out in some components of the NavigationApp, wacht out 
import React from 'react'
import { View } from 'react-native';
import reducer from '../context/Reducer';

// define what the data you're going to have looks like
// giving a type to initialState
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;  // ? means optional
}
// objeto inicial tipado
export const initialState: AuthState = {
isLoggedIn: false,
username:undefined,
favoriteIcon:undefined,
} 

// we'll use this to tell react what the context will look like 
export interface AuthContextProps {
authState: AuthState;
signIn:()=>void;
logOut:()=>void;
changeFavIcon: (iconName:string)=>void;
updateUser:(username:string)=>void;
}

// creating the context with type AuthContextProps
// basically giving a type to the value prop of the provider
export const AuthContext = React.createContext({} as AuthContextProps)

const AppProvider = ({children}:any) => {
  const [authState, dispatch] = React.useReducer(reducer, initialState);

  const signIn = ()=>{
    dispatch({type: 'SIGN IN',})
  }
  const logOut = ()=>{
    dispatch({type: 'LOG OUT',})
  }
  
  const changeFavIcon = (iconName:string)=>{
    dispatch({type: 'CHANGE-ICON', payload: iconName})
  }

  const updateUser = (username: string)=>{
  dispatch({type: 'UPDATE-USER', payload:username})
  }
   
  return (
    // All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. 
    <AuthContext.Provider 
    value={{
      // the one from reducer
    authState:authState,
    signIn,
    logOut,
    changeFavIcon,
    updateUser,
    }}>
    
    {children}

    </AuthContext.Provider>
  )
}
export const useGlobalContext = () => {
    return React.useContext(AuthContext)
  }
export default AppProvider