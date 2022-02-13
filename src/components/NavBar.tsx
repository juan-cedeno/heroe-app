
import { NavLink, useNavigate } from 'react-router-dom';

import '../css/navbar.css'

export const NavBar = () => {

    const navigate = useNavigate()

    const handlenLogout = () => {
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
                <label className='name-navbar'>Juan</label>
                <button onClick={handlenLogout} className='btn-logout'>Logout</button>
            </div>
        </nav>
    </>
  )
}
