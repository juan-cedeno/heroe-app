import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
    children: JSX.Element
}

export const PublicRoute = ({children} : Props) => {
    
    const {authState} = useContext(AuthContext)

    return !authState.logAuth
           ? children
           : <Navigate to = '/'/>
}
