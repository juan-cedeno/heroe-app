import { useReducer, useEffect } from 'react';
import { AuthContext } from "./AuthContext"
import { authReducer, authSate } from './authReducer';


interface props {
  children: JSX.Element | JSX.Element[]
}

const InitialState: authSate = {
  name : '',
  logAuth : false
}

export const AuthProvider = ({children}: props) => {
  
  const init = () => {
    return JSON.parse(localStorage.getItem("user") || '[]')
  }

  const [authState, dispatch] = useReducer(authReducer, InitialState , init)

  useEffect(() => {
    if (!authState) return

    localStorage.setItem('user' , JSON.stringify(authState))
  }, [authState])

  const Login = (name : string) => {

    dispatch({
      type: 'login',
      payload: name
    })

  }

  const LogOut = () => {
      dispatch({type : 'logout'})
  }

  return (
    
    <AuthContext.Provider value={{
      authState,
      Login,
      LogOut
      
    }}>
      {children}
    </AuthContext.Provider>
  )
}
