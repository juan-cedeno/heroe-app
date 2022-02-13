import { useNavigate } from 'react-router-dom'

import '../css/login.css'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handlenLogin = () => {
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
