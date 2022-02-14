
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

import '../css/navbar.css'

export const NavBar = () => {

    const navigate = useNavigate()
    const {authState , LogOut} = useContext(AuthContext)
    const {name} = authState

    const handlenLogout = () => {

        LogOut()
        localStorage.removeItem('user')

        navigate('/login' , {
            replace: true
        })
    }

  return (
    <>
        <nav className='container-navbar'>
            <div className='container-links'>
                <p className='logo'>Asociaciones</p>
                <NavLink 
                    to='/marvel'
                    className= {({isActive}) => 'nav-link' + (isActive ? ' active' : '')}
                >
                 Marvel
                </NavLink>

                <NavLink 
                    to='/dc'
                    className= {({isActive}) => 'nav-link' + (isActive ? ' active' : '')}
                >
                 DC
                </NavLink>

                <NavLink 
                    to='/search'
                    className= {({isActive}) => 'nav-link' + (isActive ? ' active' : '')}
                >
                 Search
                </NavLink>

            </div>

            <div className='container-logout'>
                <label className='name-navbar'>{name}</label>
                <button onClick={handlenLogout} className='btn-logout'>Logout</button>
            </div>
        </nav>
    </>
  )
}
