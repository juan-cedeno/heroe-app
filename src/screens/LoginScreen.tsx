import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

import '../css/login.css'

export const LoginScreen = () => {

  const navigate = useNavigate()
  const {Login , authState} = useContext(AuthContext)
  const {name} = authState

  const handlenLogin = () => {

    Login('Juan Julio Cedeño')

    navigate('/' , {
      replace: true
    })
  }
  
  return (
    <div className='container-login'>
      <button 
      className='login' 
      onClick={handlenLogin}
      >Login</button>
    </div>
  )
}
